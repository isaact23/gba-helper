import React from 'react';
import {Link} from "react-router-dom";

class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
                <h2>Main Menu</h2>
                <Link to="color"><ul>RGBA color picker</ul></Link>
                <ul>PNG to GBA converter</ul>
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