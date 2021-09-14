import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.scss';

import NavBar from './NavBar.js';
import MainMenu from './MainMenu.js';
import ColorPicker from './ColorPicker.js';

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
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;