import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.scss";

/*
The NavBar is displayed at the top of the screen on all pages.
 */
class NavBar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-header-title">
          <Link to="/gba-helper"><h1>GBA Helper</h1></Link>
        </div>
      </header>
    );
  }
}

export default NavBar;