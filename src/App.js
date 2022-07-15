import React from 'react';
import './App.css';
import{Route, BrowserRouter as Router , Routes, Link} from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Store from "./pages/store"


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
          </nav>

   <Routes>
    
    <Route path= "/" exact element={<Home/>}/>
    <Route path= "/contact" element={<Contact/>} />
    <Route path= "/store" element={<Store/>} />
    
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
