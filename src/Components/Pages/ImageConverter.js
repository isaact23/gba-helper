import React from 'react';

/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
class ImageConverter extends React.Component {
    render() {
        return (
            <div className="ImageConverter">
                <h2>PNG to GBA converter</h2>
                <p>Upload file</p>
                <p>Bitmap / tile mode?</p>
                <p>Palette or no palette?</p>
                <p>Submit</p>
            </div>
        );
    }
}

export default ImageConverter;