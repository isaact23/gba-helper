import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';

import NavBar from './Pages/NavBar.js';
import MainMenu from './Pages/MainMenu.js';
import ColorPicker from './Pages/ColorPicker.js';
import ImageConverter from './Pages/ImageConverter.js';

/**
 * The App component contains the entire website.
 */
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <MainMenu/>
                        </Route>
                        <Route path="/color">
                            <ColorPicker/>
                        </Route>
                        <Route path="/image">
                            <ImageConverter/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;