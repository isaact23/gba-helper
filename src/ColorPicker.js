import React from 'react';
import { HuePicker } from 'react-color'

class ColorPicker extends React.Component {

    render() {
        return (
            <div className="ColorPicker">
                <h2>Color Picker</h2>
                <HuePicker/>
            </div>
        );
    }
}

export default ColorPicker;