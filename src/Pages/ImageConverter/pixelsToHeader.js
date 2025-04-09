import Palette from "./palette.js";
import fileSaver from "file-saver";
import getPixels from "image-pixels";


// TODO: Clean this code up for real; add way to convert multiple files at once
/**
 * Given an array of the RGB values of an image and a Representation,
 * generate a header file formatted for GBA.
 */
export async function convert(image, mode, filenameExt) {
  const {data, width, height} = await getPixels(image);
  const getPixel = (x, y, c) => {
    return data[(y * 8) + (x * 4) + c];
  }

  const filename = filenameExt.replace(/\.[^/.]+$/, "")

  try {
    // Store output text
    let c_text = "// File: " + filename + ".c\n";
    let h_text = "// File: " + filename + ".h\n";

    const c_include = "#include \"" + filename + ".h\"\n\n";
    const h_include = "#include <stdint.h>\n\n";

    let img_header = "// Image: " + filenameExt + "\n";
    c_text += img_header;
    h_text += img_header;

    // Perform mode-dependent conversion
    if (mode === "bitmap32768") {
      const rep = "// Representation: Bitmap without Palette (32,768 colors)\n\n";
      h_text += rep;
      h_text += h_include;
      h_text += "#define img_" + filename + "_width " + width + "\n";
      h_text += "#define img_" + filename + "_height " + height + "\n\n";
      h_text += "extern const uint16_t img_" + filename + "_data[];\n";

      c_text += rep;
      c_text += c_include;
      c_text += "const uint16_t img_" + filename + "_data[] = {\n";

      // Iterate through all pixels, left to right, then top to bottom
      for (let y = 0; y < height; y++) {
        c_text += "\t";
        for (let x = 0; x < width; x++) {
          // Convert RGB to GBA-formatted hex
          let r = getPixel(x, y, 0);
          let g = getPixel(x, y, 1);
          let b = getPixel(x, y, 2);
          let color = rgbToGba(r, g, b);
          let hex = "0x" + color.toString(16).padStart(4, "0");
          c_text += hex + ", ";
        }
        c_text += "\n";
      }
      c_text += "};\n";

    } else if (mode === "bitmap256") {
      // Create palette to store colors
      let palette = new Palette();

      const rep = "// Representation: Bitmap with Palette (256 colors)\n\n";
      h_text += rep;
      h_text += h_include;
      h_text += "#define img_" + filename + "_width " + width + "\n";
      h_text += "#define img_" + filename + "_height " + height + "\n\n";
      h_text += "extern const uint8_t img_" + filename + "_data[];\n";
      h_text += "extern const uint16_t img_" + filename + "_palette[];\n";

      c_text += rep;
      c_text += c_include;
      c_text += "const uint8_t img_" + filename + "_data[] = {\n";

      // Iterate through all pixels, left to right, then top to bottom
      for (let y = 0; y < height; y++) {
        c_text += "\t";
        for (let x = 0; x < width; x++) {
          // Convert RGB to GBA-formatted hex
          let r = getPixel(x, y, 0);
          let g = getPixel(x, y, 1);
          let b = getPixel(x, y, 2);
          let color = rgbToGba(r, g, b);
          // Add color to palette
          let index = palette.addColor(color);
          if (index == null) {
            window.alert("Error during conversion: Color palette exceeds 256 colors - try reducing color" +
              "count and submit again.");
            return;
          }
          let hex = "0x" + index.toString(16).padStart(2, "0");
          c_text += hex + ", ";
        }
        c_text += "\n";
      }
      c_text += "};\n\n";

      // Add palette here
      c_text += palette.getText(filename);

    } else if (mode === "tiles") {
      // Create palette to store colors
      let palette = new Palette();

      // Determine number of 8x8 tiles across/down
      let tileCountX = Math.ceil(width / 8);
      let tileCountY = Math.ceil(height / 8);

      const rep = "// Representation: Tiles (8x8 squares, 256-color palette)\n\n";
      h_text += rep;
      h_text += h_include;
      h_text += "#define img_" + filename + "_tile_count_x " + tileCountX + "\n";
      h_text += "#define img_" + filename + "_tile_count_y " + tileCountY + "\n\n";
      h_text += "extern const uint8_t img_" + filename + "_data[];\n";
      h_text += "extern const uint16_t img_" + filename + "_palette[];\n";

      c_text += rep;
      c_text += c_include;
      c_text += "const uint8_t img_" + filename + "_data[] = {\n";

      // Iterate through tiles
      let tileNo = 0;
      for (let tileY = 0; tileY < tileCountY; tileY++) {
        for (let tileX = 0; tileX < tileCountX; tileX++) {
          // Iterate through pixels within each tile
          c_text += "\n  // Tile " + tileNo.toString() + "\n";
          tileNo++;
          for (let localY = 0; localY < 8; localY++) {
            if (localY % 2 === 0) {
              c_text += "\t";
            }
            let y = (tileY * 8) + localY;
            for (let localX = 0; localX < 8; localX++) {
              let x = (tileX * 8) + localX;
              // If out of bounds, use first color in palette.
              if (x >= width || y >= height) {
                c_text += "0x00, ";
              } else {
                // Convert RGB to GBA-formatted hex
                let r = getPixel(x, y, 0);
                let g = getPixel(x, y, 1);
                let b = getPixel(x, y, 2);
                let color = rgbToGba(r, g, b);
                // Add color to palette
                let index = palette.addColor(color);
                if (index == null) {
                  window.alert("Error during conversion: Color palette exceeds 256 colors - try reducing" +
                    "color count and submit again.");
                  return;
                }
                let hex = "0x" + index.toString(16).padStart(2, "0");
                c_text += hex + ", ";
              }
            }
            // Add line breaks every 16 entries
            if (localY % 2 === 1) {
              c_text += "\n";
            }
          }
        }
      }
      c_text += "};\n\n";

      // Add palette here
      c_text += palette.getText(filename);

    } else {
      window.alert("Error during conversion: Mode " + mode.toString() + " not found");
      return;
    }

    // Save text to file
    let c_blob = new Blob([c_text], {type: "text/c;charset=utf-8"});
    let h_blob = new Blob([h_text], {type: "text/h;charset=utf-8"});
    fileSaver.saveAs(c_blob, filename + ".c");
    fileSaver.saveAs(h_blob, filename + ".h");

  } catch (e) {
    window.alert("Unknown error during conversation: " + e);
  }
}

/**
 * Given an RGB color (0-255 for each value), return an
 * integer from 0 to 32,767 representing GBA-formatted color.
 */
function rgbToGba(red, green, blue) {
  if (red < 0 || red > 255 ||
    green < 0 || green > 255 ||
    blue < 0 || blue > 255) {
    throw new RangeError("RGB values out of range");
  }
  let r = red >> 3;
  let g = green >> 3;
  let b = blue >> 3;
  return r + (g * 32) + (b * 1024);
}
