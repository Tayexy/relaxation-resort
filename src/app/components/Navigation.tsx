import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="logo">
            Relaxation Resort
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/amenities" onClick={() => setMenuOpen(false)}>Amenities</Link></li>
            <li><Link to="/activities" onClick={() => setMenuOpen(false)}>Activities</Link></li>
            <li><Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className="nav-auth">
            {isAuthenticated ? (
              <div className="user-menu">
                <span className="user-name">Welcome, {user?.name}</span>
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className="btn-signin">
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navigation;
