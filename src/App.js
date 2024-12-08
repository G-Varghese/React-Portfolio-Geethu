import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';  // Correct import for v6 and later
import { loadFull } from "tsparticles";  // Import loadFull
import React from 'react';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar/index';
import ParticlesComponent from './utils.js/particles';  // Correct path, make sure the file is in utils folder

function App() {
    const location = useLocation();  // Corrected the capitalization here to 'location'

    console.log(location);  // Logs current location for debugging

    const handleInit = async (main) => {
        await loadFull(main);  // Initialize particles
    };

    const renderParticleJsInHomePage = location.pathname === "/";  // Check if current page is Home

    return (
        <div className="App">
            {/* Conditionally render ParticlesComponent based on location */}
            {renderParticleJsInHomePage && (
                <ParticlesComponent id="particles" init={handleInit} />
            )}

            {/* Navbar component */}
            <Navbar />

            {/* Main page content */}
            <div className="App_main-page-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </div>

            
        </div>
    );
}

export default App;
