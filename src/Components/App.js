import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';

import NavBar from './Pages/NavBar/NavBar.js';
import MainMenu from './Pages/MainMenu/MainMenu.js';
import ColorPicker from './Pages/ColorPicker/ColorPicker.js';
import ImageConverter from './Pages/ImageConverter/ImageConverter.js';
import AudioConverter from './Pages/AudioConverter/AudioConverter.js';
import TilemapEditor from './Pages/TilemapEditor/TilemapEditor.js';
import UsefulLinks from './Pages/UsefulLinks/UsefulLinks.js';
import About from './Pages/About/About.js';

/**
 * The App component contains the entire website.
 */
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <NavBar/>
                    <div className="App-page">
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
                            <Route path="/audio">
                                <AudioConverter/>
                            </Route>
                            <Route path="/tilemap">
                                <TilemapEditor/>
                            </Route>
                            <Route path="/links">
                                <UsefulLinks/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;