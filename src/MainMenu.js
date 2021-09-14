import {Link} from "react-router-dom";

export default function MainMenu() {
    return (
        <div className="MainMenu">
            <h2>Main Menu</h2>
            <Link to="color"><ul>PNG to GBA converter</ul></Link>
            <ul>RGBA color picker</ul>
            <ul>Tilemap Editor</ul>
            <ul>Useful links</ul>
            <ul>About</ul>
            <ul>Donate</ul>
            <ul>GitHub Repo</ul>
        </div>
    );
}
