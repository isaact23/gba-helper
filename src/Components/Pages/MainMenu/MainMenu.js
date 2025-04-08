import React from 'react';
import {Link} from "react-router-dom";
import "./MainMenu.scss";

/**
 * Main menu is the first page the user sees. It contains links to every other part of the website.
 */
class MainMenu extends React.Component {
  render() {
    return (
      <div className="MainMenu">
        <Link to="/gba-helper/color">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/colorPicker.png" alt="Color Picker"/>
            </div>
          </div>
        </Link>
        <Link to="/gba-helper/image">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/imageConverter.png" alt="PNG Converter"/>
            </div>
          </div>
        </Link>
        <Link to="/gba-helper/audio">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/audioConverter.png" alt="Audio Converter"/>
            </div>
          </div>
        </Link>
        <Link to="/gba-helper/tilemap">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/tilemapEditor.png" alt="Tilemap Editor"/>
            </div>
          </div>
        </Link>
        <Link to="/gba-helper/links">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/usefulLinks.png" alt="Useful Links"/>
            </div>
          </div>
        </Link>
        <Link to="/gba-helper/about">
          <div className="MainMenu-optionBox">
            <div className="pixelart">
              <img src="/gba-helper/img/about.png" alt="About"/>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MainMenu;