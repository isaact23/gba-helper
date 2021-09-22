import React from 'react';
const converter = require('./converter.js');
const getPixels = require('get-pixels');

/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
class ImageConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            imageName: null,
            mode: "tile"
        }

        // Bind functions
        this.onFileChange = this.onFileChange.bind(this);
        this.onConvertModeChange = this.onConvertModeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onGetPixels = this.onGetPixels.bind(this);
    }

    // Called when a new PNG image is selected.
    onFileChange(event) {
        // If no file is selected, stop.
        if (event.target.files.length < 1) { return; }

        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
            imageName: event.target.files[0].name.replace(/\.[^/.]+$/, "") // remove extension
        });
    }

    // Called when convert mode is changed.
    onConvertModeChange(event) {
        this.setState({
            mode: event.target.value
        });
    }

    // Called when submit is pressed.
    onSubmit(event) {
        // If no file is selected, stop.
        if (this.state.image == null) {
            window.alert("Please select a file.");
            return;
        }

        // Generate array of pixels for image.
        getPixels(this.state.image, this.onGetPixels);
    }

    // Callback for getPixels
    onGetPixels(error, pixels) {
        if (error) {
            window.alert("Error loading pixels from image!");
            return
        }
        converter.convert(pixels, this.state.mode, this.state.imageName);
    }

    render() {
        return (
            <div className="ImageConverter">
                <h2>PNG to GBA converter</h2>
                <input type="file" id="convertImage" accept="image/png, image/jpeg" onChange={this.onFileChange} />
                <div className="pixelart">
                    <div className="ImageConverter-selectedImage">
                        <img src={this.state.image} alt="Selection" />
                    </div>
                </div>
                <p>Conversion mode</p>
                <select id="convertMode" onChange={this.onConvertModeChange}>
                    <option value="tile">Tiles (8x8 squares, 256-color palette)</option>
                    <option value="bitmapPalette">Bitmap with Palette (256 colors)</option>
                    <option value="bitmapRaw">Bitmap without Palette (32,768 colors)</option>
                </select>
                <button onClick={this.onSubmit}>
                    <p>Submit</p>
                </button>
            </div>
        );
    }
}

export default ImageConverter;