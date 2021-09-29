import React from 'react';
import {Link} from "react-router-dom";

/**
 * Main menu is the first page the user sees. It contains links to every other part of the website.
 */
class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
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
                <Link to="audio">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/audioConverter.png" alt="Audio Converter"/>
                        </div>
                    </div>
                </Link>
                <Link to="tilemap">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/tilemapEditor.png" alt="Tilemap Editor"/>
                        </div>
                    </div>
                </Link>
                <Link to="links">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/usefulLinks.png" alt="Useful Links"/>
                        </div>
                    </div>
                </Link>
                <Link to="about">
                    <div className="MainMenu-optionBox">
                        <div className="pixelart">
                            <img src="/img/about.png" alt="About"/>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MainMenu;