import {HashRouter, Route, Routes} from "react-router";
import './App.css';

import NavBar from '../Pages/NavBar';
import MainMenu from '../Pages/MainMenu';
import ColorPicker from '../Pages/ColorPicker';
import ImageConverter from '../Pages/ImageConverter';
import AudioConverter from '../Pages/AudioConverter';
import TilemapEditor from '../Pages/TilemapEditor';
import UsefulLinks from '../Pages/UsefulLinks';
import About from '../Pages/About';

/**
 * The App component contains the entire website.
 */
function App() {
  return (
    <div>
      <NavBar/>
      <div className="App w3-container">
        <HashRouter>
          <Routes>
            <Route index element={<MainMenu />} />
            <Route path="color" element={<ColorPicker />} />
            <Route path="image" element={<ImageConverter />} />
            <Route path="audio" element={<AudioConverter />} />
            <Route path="tilemap" element={<TilemapEditor />} />
            <Route path="links" element={<UsefulLinks />} />
            <Route path="about" element={<About />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
