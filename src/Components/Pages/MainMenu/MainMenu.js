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
                        <p>Color picker</p>
                    </div>
                </Link>
                <Link to="image"><ul>Image converter</ul></Link>
                <ul>Audio converter</ul>
                <ul>Tilemap Editor</ul>
                <ul>Useful links</ul>
                <ul>About</ul>
                <a href="https://github.com/isaact23/gba-helper" target="_blank" rel="noreferrer"><ul>Github Repo</ul></a>
                <ul>Donate</ul>
            </div>
        );
    }
}

export default MainMenu;