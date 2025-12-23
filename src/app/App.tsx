import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Amenities from './pages/Amenities';
import Activities from './pages/Activities';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="app-footer">
            <div className="footer-content">
              <p>&copy; 2025 Relaxation Resort. All rights reserved.</p>
              <p>Your dream vacation destination</p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}
