import {BrowserRouter as Router, Link} from "react-router-dom";

export default function NavBar() {
    return (
        <header className="App-header">
            <div className="App-header-title">
                <Link to="/"><h1>GBA Helper</h1></Link>
            </div>
        </header>
    );
}