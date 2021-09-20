import React from 'react';

/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
class ImageConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null
        }

        // Bind functions
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Called when a new PNG image is selected.
    onFileChange(event) {
        this.setState({
            selectedImage: URL.createObjectURL(event.target.files[0])
        });
    }

    // Called when submit is pressed.
    onSubmit(event) {
        window.alert("You IDIOT.");
    }

    render() {
        return (
            <div className="ImageConverter">
                <h2>PNG to GBA converter</h2>
                <input type="file" id="convertImage" accept="image/png" onChange={this.onFileChange} />
                <div className="pixelart">
                    <div className="ImageConverter-selectedImage">
                        <img src={this.state.selectedImage} />
                    </div>
                </div>
                <p>Conversion mode</p>
                <select id="convertMode">
                    <option value="tile">Tiles (8x8 squares, 256-color palette)</option>
                    <option value="bitmapPalette">Bitmap with Palette (256 colors)</option>
                    <option value="bitmapRaw">Bitmap without Palette (65,536 colors)</option>
                </select>
                <a onClick={this.onSubmit}>
                    <p>Submit</p>
                </a>
            </div>
        );
    }
}

export default ImageConverter;