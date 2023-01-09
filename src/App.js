/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * January 31, 2022 (Start date of project)
 */

// TODO decide how to deal with our custom pages (All on index.js like its already doing OR make a new page for each custom page)

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './Pages'
import BlueJuly from "./Pages/BlueJuly";
import RustBoy from "./Pages/RustBoy";
import VoxelEngine from "./Pages/VoxelEngine";
import EmailForm from "./Pages/EmailForm";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/BlueJuly' element={<BlueJuly />} />
                <Route path='/RustBoy' element={<RustBoy />} />
                <Route path='/VoxelEngine' element={<VoxelEngine />} />
                <Route path='/EmailPage' element={<EmailForm />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
