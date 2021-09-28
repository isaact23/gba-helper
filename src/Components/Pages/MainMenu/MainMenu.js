import React from 'react';
import {Link} from "react-router-dom";

/**
 * Main menu is the first page the user sees. It contains links to every other part of the website.
 */
class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
                <h2>Main Menu</h2>
                <Link to="color">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/colorPicker.png" alt="Color Picker"/>
                        </div>
                    </div>
                </Link>
                <Link to="image">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/imageConverter.png" alt="Image Converter"/>
                        </div>
                    </div>
                </Link>
                <div className="MainMenu-optionBox">
                    <p>Audio converter</p>
                </div>
                <div className="MainMenu-optionBox">
                    <p>Tilemap Editor</p>
                </div>
                <div className="MainMenu-optionBox">
                    <p>Useful Links</p>
                </div>
                <div className="MainMenu-optionBox">
                    <p>About</p>
                </div>
                <a href="https://github.com/isaact23/gba-helper" target="_blank" rel="noreferrer">
                    <div className="MainMenu-optionBox">
                        <p>Github Repo</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default MainMenu;