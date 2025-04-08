import {useState} from 'react';
import "./ImageConverter.css";
import {convert} from "./pixelsToHeader";
import getPixels from "get-pixels";

/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
function ImageConverter() {

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [mode, setMode] = useState("tile");

  // Called when a new PNG image is selected.
  const onFileChange = (event) => {
    // If no file is selected, stop.
    if (event.target.files.length < 1) {
      return;
    }

    setImage(event.target.files[0]);
    setImageName(event.target.files[0].name.replace(/\.[^/.]+$/, "")); // remove extension
  }

  // Called when submit is pressed.
  const onSubmit = () => {
    // If no file is selected, stop.
    if (image == null) {
      window.alert("Please select a file.");
      return;
    }

    // Generate array of pixels for image.
    getPixels(image, function (error, pixels) {
      if (error) {
        window.alert("Error loading pixels from image!");
        return
      }
      convert(pixels, mode, imageName);
    });
  }

  return (
    <div className="ImageConverter">
      <h2>Image to GBA converter</h2>
      <input type="file" id="convertImage" accept="image/png, image/jpeg" onChange={onFileChange}/>
      <div className="pixelart">
        <div className="ImageConverter-selectedImage">
          <img src={image} alt="Selection"/>
        </div>
      </div>
      <p>Conversion mode</p>
      <select id="convertMode" onChange={event => setMode(event.target.value)}>
        <option value="tile">Tiles (8x8 squares, 256-color palette)</option>
        <option value="bitmapPalette">Bitmap with Palette (256 colors)</option>
        <option value="bitmapRaw">Bitmap without Palette (32,768 colors)</option>
      </select>
      <button onClick={onSubmit}>
        <p>Submit</p>
      </button>
    </div>
  );
}

export default ImageConverter;