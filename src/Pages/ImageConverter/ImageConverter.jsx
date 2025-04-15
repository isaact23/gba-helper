import {useState} from 'react';
import "./ImageConverter.css";
import {convert} from "./pixelsToHeader.js";
/**
 * This page converts PNG images to multiple formats (tiled / bitmaps) supported by GBA hardware.
 */
function ImageConverter() {

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [mode, setMode] = useState("tile");
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(255);

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
    setImageName(file.name);
  }

  // Called when submit is pressed.
  const onSubmit = async () => {
    // If no file is selected, stop.
    if (image.length == 0) {
      window.alert("Please select a file.");
      return;
    }

    convert(image, mode, imageName, {r: red, g: green, b: blue});
  }

  return (
    <div className="ImageConverter">
      <h2>Image to GBA converter</h2>
      <div>
        <p>Select image</p>
        <input type="file" id="convertImage" accept="image/png, image/jpeg" onChange={onFileChange}/>
        
        {image.length > 0 ? (
          <div className="pixelart">
            <div className="ImageConverter-selectedImage">
              <img src={image} alt="Selection"/>
            </div>
          </div>
        ) : null}
      </div>
      <div>
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
      </div>
      <div>
        <p>Transparent color</p>
        <input className="w3-input shortInput" value={red} min="0" max="255" onChange={e => setRed(e.target.value)} />
        <input className="w3-input shortInput" value={green} min="0" max="255" onChange={e => setGreen(e.target.value)} />
        <input className="w3-input shortInput" value={blue} min="0" max="255" onChange={e => setBlue(e.target.value)} />
        <div className="colorDisplay" style={{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
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