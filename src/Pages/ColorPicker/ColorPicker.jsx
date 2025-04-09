import {SketchPicker} from 'react-color';
import "./ColorPicker.css";
import {useState, useMemo} from "react";

/**
 * ColorPicker is a page allowing the user to choose colors and convert to GBA format (15 bits).
 * This is more for demonstration of how GBA handles colors. Other tools (PNG to GBA, tile map maker, etc)
 * should be more practical for actual game development.
 */
function ColorPicker() {

  const [red, setRed] = useState(40);
  const [green, setGreen] = useState(120);
  const [blue, setBlue] = useState(220);

  // Convert a single number to binary (0 to 31 range)
  const numToBin = (num) => {
    return ((num >> 4) % 2).toString() +
      ((num >> 3) % 2).toString() +
      ((num >> 2) % 2).toString() +
      ((num >> 1) % 2).toString() +
      (num % 2).toString()
  }

  // Convert an RGB color to binary
  const getBin = () => {
    return "0 " +
      numToBin(blue >> 3) + " " +
      numToBin(green >> 3) + " " +
      numToBin(red >> 3);
  }

  const bin = useMemo(() => getBin(), [red, green, blue]);

  const handleColorChange = (color) => {
    setRed(color.rgb.r);
    setGreen(color.rgb.g);
    setBlue(color.rgb.b);
  }

  return (
    <div className="ColorPicker">
      <div className="ColorPicker-picker">
        <h2>Color Picker</h2>
        <SketchPicker
          width={"400"}
          disableAlpha={true}
          color={{r: red, g: green, b: blue}}
          onChange={handleColorChange}
        />
      </div>
      <div className="ColorPicker-output">
        <h2>GBA Color Representation</h2>
        <p>Binary: {bin}</p>
      </div>
    </div>
  );
}

export default ColorPicker;