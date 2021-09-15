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
                <Link to="color"><ul>RGB color picker</ul></Link>
                <Link to="image"><ul>PNG to GBA converter</ul></Link>
                <ul>Tilemap Editor</ul>
                <ul>Useful links</ul>
                <ul>About</ul>
                <ul>Donate</ul>
                <ul>GitHub Repo</ul>
            </div>
        );
    }
}

export default MainMenu;