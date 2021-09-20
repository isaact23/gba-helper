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
        // Prep for image conversion
        this.canvas = document.getElementById("imageConverterCanvas");
        this.context = this.canvas.getContext("2d");


        // Bind functions
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Called when a new PNG image is selected.
    onFileChange(event) {
        // If no file is selected, stop.
        if (event.target.files.length < 1) { return; }

        // TODO remove this setState
        this.setState({
            selectedImage: URL.createObjectURL(event.target.files[0])
        });

        // Draw image to canvas
        let image = this.state.selectedImage;
        this.context.drawImage(image, 0, 0);
    }

    // Called when submit is pressed.
    onSubmit(event) {
        let imgData = this.context.getImageData(0, 0,
            this.state.selectedImage.width, this.state.selectedImage.height);

        console.log(imgData);

        //window.alert("File conversion is not supported yet!");
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
                <canvas id="imageConverterCanvas" width={512} height={512} />
            </div>
        );
    }
}

export default ImageConverter;