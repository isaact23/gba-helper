import {Link} from "react-router";
import "./MainMenu.css";

/**
 * Main menu is the first page the user sees. It contains links to every other part of the website.
 */
function MainMenu() {
  return (
    <div className="MainMenu">
      <Link to="/color">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/colorPicker.png" alt="Color Picker"/>
          </div>
        </div>
      </Link>
      <Link to="/image">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/imageConverter.png" alt="PNG Converter"/>
          </div>
        </div>
      </Link>
      <Link to="/audio">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/audioConverter.png" alt="Audio Converter"/>
          </div>
        </div>
      </Link>
      <Link to="/tilemap">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/tilemapEditor.png" alt="Tilemap Editor"/>
          </div>
        </div>
      </Link>
      <Link to="/links">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/usefulLinks.png" alt="Useful Links"/>
          </div>
        </div>
      </Link>
      <Link to="/about">
        <div className="MainMenu-optionBox">
          <div className="pixel">
            <img src="/gba-helper/img/about.png" alt="About"/>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MainMenu;