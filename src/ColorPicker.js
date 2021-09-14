import React from 'react';
import { SketchPicker } from 'react-color'

/*
ColorPicker is a page allowing the user to choose colors and convert to GBA format (15 bits).
This is more for demonstration of how GBA handles colors. Other tools (PNG to GBA, tile map maker, etc)
should be more practical for actual game development.
 */
class ColorPicker extends React.Component {

    // Initialize ColorPicker with a default color.
    constructor(props) {
        super(props);
        this.state = {
           color: "#fff"
        };
    }

    // Handle a change in the color picker.
    handleChangeComplete = (color) => {
        this.setState({
            color: color
        });
    }

    render() {
        return (
            <div className="ColorPicker">
                <div className="ColorPicker-picker">
                    <h2>Color Picker</h2>
                    <SketchPicker
                        width={400}
                        color={this.state.color}
                        onChangeComplete={this.handleChangeComplete}
                    />
                </div>
                <div className="ColorPicker-output">
                    <h2>GBA Color Representation</h2>
                    <p>Binary:</p>
                    <p>Hex:</p>
                </div>
            </div>
        );
    }
}

export default ColorPicker;