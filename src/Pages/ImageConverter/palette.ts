/**
 * Store up to 256 unique GBA colors.
 */
export default class Palette {
  palette: Map<number, number>
  index: Map<number, number>
  colorCount: number

  constructor() {
    this.palette = new Map<number, number>; // Maps color number (GBA format) to palette index (0 thru 255)
    this.index = new Map<number, number>; // Maps palette indices (0 thru 255) to color number (GBA format) (reverse of previous dictionary)
    this.colorCount = 0;
  }

  /**
   * Given a GBA color (0 - 32,767), add the
   * color to the palette if necessary and return its
   * index in hexadecimal. If full, return null.
   */
  addColor(color: number) {
    // Find color in palette
    let index = this.palette.get(color);

    // If color is not in palette,
    if (index === undefined) {
      // If there is room for another color,
      if (this.colorCount < 256) {
        // Add color and return index.
        this.palette.set(color, this.colorCount);
        this.index.set(this.colorCount, color);
        this.colorCount++;
        return (this.colorCount - 1);
      } else {
        // Palette is full, no index can be returned.
        return null;
      }
    }
    // If color is in the palette,
    else {
      return index;
    }
  }

  /**
   * Convert this palette to text to be added to a header file.
   */
  getText() {
    console.log(this.index);
    let text = "const uint16_t palette [] = {\n";
    for (let i = 0; i < 32; i++) {
      text += "\t";
      for (let j = 0; j < 8; j++) {
        // Given the index in palette, get the color.
        let color = this.index.get(j + (i * 8));
        if (color === undefined) {
          color = 0;
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
