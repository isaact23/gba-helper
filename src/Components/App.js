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
                            <Route exact path="/gba-helper">
                                <MainMenu/>
                            </Route>
                            <Route path="/gba-helper/color">
                                <ColorPicker/>
                            </Route>
                            <Route path="/gba-helper/image">
                                <ImageConverter/>
                            </Route>
                            <Route path="/gba-helper/audio">
                                <AudioConverter/>
                            </Route>
                            <Route path="/gba-helper/tilemap">
                                <TilemapEditor/>
                            </Route>
                            <Route path="/gba-helper/links">
                                <UsefulLinks/>
                            </Route>
                            <Route path="/gba-helper/about">
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