import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import Routs from './Routes';

function App() {
  return (
      <BrowserRouter>
        <div className="wrapper">
            <header>
                <div className="container">
                    <Link className="header_name" to="/">Learn</Link>
                </div>
            </header>
            <main>
                <div className="container">
                    <Routs />
                </div>
            </main>
            <footer>
                <div className="container">
                    <p>&#169; Videocourses, All Rights Reserved.</p>
                </div>
            </footer>
        </div>
      </BrowserRouter>
  )}

export default App;
