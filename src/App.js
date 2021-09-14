import {Route, Switch} from "react-router";
import './App.css';

import MainMenu from './MainMenu.js';
import ColorPicker from './ColorPicker.js';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header-title">
                    <h1>GBA Helper</h1>
                </div>
            </header>
            <Switch>
                <Route exact path="/">
                    <MainMenu/>
                </Route>
                <Route path="colors">
                    <ColorPicker/>
                </Route>
            </Switch>
        </div>
    );
}
