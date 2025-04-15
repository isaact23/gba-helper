/**
 * Store up to 256 unique GBA colors.
 */
export default class Palette {

  constructor() {
    this.palette = {} // Maps color number (GBA format) to palette index (0 thru 255)
    this.index = {} // Maps palette indices (0 thru 255) to color number (GBA format) (reverse of previous dictionary)
    this.colorCount = 0;
  }

  /**
   * Given a GBA color (0 - 32,767), add the
   * color to the palette if necessary and return its
   * index in hexadecimal. If full, return null.
   */
  addColor(color) {

    // If color is in palette,
    if (color in this.palette) {
      return this.palette[color];
    } else {
      // If there is room for another color,
      if (this.colorCount < 256) {
        // Add color and return index.
        this.palette[color] = this.colorCount;
        this.index[this.colorCount] = color;
        this.colorCount++;
        return (this.colorCount - 1);
      } else {
        // Palette is full, no index can be returned.
        return null;
      }
    }
  }

  /**
   * Convert this palette to text to be added to a header file.
   */
  getText(filename) {
    let text = "const uint16_t img_" + filename + "_palette[] = {\n";
    for (let i = 0; i < 32; i++) {
      text += "\t";
      for (let j = 0; j < 8; j++) {
        // Given the index in palette, get the color.
        let paletteIndex = j + (i * 8);
        let color = 0;
        if (paletteIndex in this.index) {
          color = this.index[paletteIndex];
        }
        let hex = "0x" + color.toString(16).padStart(4, "0");
        text += hex + ", ";
      }
      text += "\n";
    }
    text += "};\n";
    return text;
  }
}
