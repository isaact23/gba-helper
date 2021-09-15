import React from 'react';
import { SketchPicker } from 'react-color'

/**
 * ColorPicker is a page allowing the user to choose colors and convert to GBA format (15 bits).
 * This is more for demonstration of how GBA handles colors. Other tools (PNG to GBA, tile map maker, etc)
 * should be more practical for actual game development.
 */
class ColorPicker extends React.Component {

    // Initialize ColorPicker with a default color.
    constructor(props) {
        super(props);
        let initialColor = {r: 40, g: 120, b: 220};

        this.state = {
            colorRgb: initialColor,
            colorBin: this.rgbToBin(initialColor)
        };
    }

    // Convert an RGB color to binary
    rgbToBin(color) {
        return "0 " +
            this.numToBin(color.b >> 3) + " " +
            this.numToBin(color.g >> 3) + " " +
            this.numToBin(color.r >> 3);
    }
    // Convert a single number to binary (0 to 31 range)
    numToBin(num) {
        return ((num >> 4) % 2).toString() +
            ((num >> 3) % 2).toString() +
            ((num >> 2) % 2).toString() +
            ((num >> 1) % 2).toString() +
            (num % 2).toString()
    }

    // Handle a change in the color picker.
    handleChangeComplete = (color) => {
        this.setState({
            colorRgb: color.rgb,
            colorBin: this.rgbToBin(color.rgb)
        });
    }

    render() {
        return (
            <div className="ColorPicker">
                <div className="ColorPicker-picker">
                    <h2>Color Picker</h2>
                    <SketchPicker
                        width={400}
                        disableAlpha={true}
                        color={this.state.colorRgb}
                        onChangeComplete={this.handleChangeComplete}
                    />
                </div>
                <div className="ColorPicker-output">
                    <h2>GBA Color Representation</h2>
                    <p>Binary: {this.state.colorBin}</p>
                </div>
            </div>
        );
    }
}

export default ColorPicker;