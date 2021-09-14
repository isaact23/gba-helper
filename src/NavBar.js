import React from 'react';
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-header-title">
                    <Link to="/"><h1>GBA Helper</h1></Link>
                </div>
            </header>
        );
    }
}

export default NavBar;