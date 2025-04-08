import {useState} from 'react';
import "./ImageConverter.css";
import {convert} from "./pixelsToHeader.ts";
/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
function ImageConverter() {

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [mode, setMode] = useState("tile");

  // Called when a new PNG image is selected.
  const onFileChange = (event) => {
    if (event.target.files.length < 1) {
      setImage("");
      setImageName("");
      return;
    }

    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setImage(url);
    setImageName(file.name.replace(/\.[^/.]+$/, "")); // remove extension
  }

  // Called when submit is pressed.
  const onSubmit = async () => {
    // If no file is selected, stop.
    if (image.length == 0) {
      window.alert("Please select a file.");
      return;
    }

    convert(image, mode, imageName);
  }

  return (
    <div className="ImageConverter">
      <h2>Image to GBA converter</h2>
      <p>Select image</p>
      <input type="file" id="convertImage" accept="image/png, image/jpeg" onChange={onFileChange}/>
      
      {image.length > 0 ? (
        <div className="pixelart">
          <div className="ImageConverter-selectedImage">
            <img src={image} alt="Selection"/>
          </div>
        </div>
      ) : null}
      
      <p>Conversion mode</p>
      <div>
        <input className="w3-radio" type="radio" name="convertMode" value="tiles" onChange={mode => setMode(mode.target.value)} />
        <label className="w3-float-left">Tiles (8x8 squares, 256-color palette)</label>
      </div>
      <div>
        <input className="w3-radio" type="radio" name="convertMode" value="bitmap256" onChange={mode => setMode(mode.target.value)} />
        <label>Bitmap with Palette (256 colors)</label>
      </div>
      <div>
        <input className="w3-radio" type="radio" name="convertMode" value="bitmap32768" onChange={mode => setMode(mode.target.value)} />
        <label>Bitmap without Palette (32,768 colors)</label>
      </div>
      <div className="vbox">
        <button onClick={onSubmit} className="w3-button w3-green" disabled={image.length == 0}>
          <p>Convert</p>
        </button>
      </div>
    </div>
  );
}

export default ImageConverter;