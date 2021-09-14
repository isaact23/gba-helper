import {Link} from "react-router-dom";

export default function MainMenu() {
    return (
        <div className="MainMenu">
            <h1>Main Menu</h1>
            <Link to="color"><p>PNG to GBA converter</p></Link>
            <p>RGBA color picker</p>
            <p>Tilemap Editor</p>
            <p>Useful links</p>
            <p>About</p>
            <p>Donate</p>
        </div>
    );
}
