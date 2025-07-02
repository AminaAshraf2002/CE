import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is 100vh
      setIsScrolled(scrollTop >= heroHeight - 100); // Change when hero section ends (100px before for smooth transition)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdowns();
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="header-logo" onClick={closeMenu}>
            <div className="logo-container">
              <img
                src={logo}
                alt="Capricorn Elevators"
                className="logo-image"
              />
            </div>
          </Link>

          <nav className="header-nav">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>

            {/* Products Dropdown */}
            <div className="nav-dropdown">
              <button
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown('products')}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`dropdown-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
                />
              </button>
              {activeDropdown === 'products' && (
                <div className="nav-dropdown-menu">
                  <Link to="/products/home" className="dropdown-item" onClick={closeDropdowns}>
                    Home Lifts
                  </Link>
                  <Link to="/products/commercial" className="dropdown-item" onClick={closeDropdowns}>
                    Commercial
                  </Link>
                </div>
              )}
            </div>

            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>

            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
            
            <Link to="/careers" className="nav-link" onClick={closeMenu}>
              Careers
            </Link>

            <Link to="/contact">
              <button className="btn-secondary" onClick={closeMenu}>Get Quote</button>
            </Link>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <Link to="/" onClick={closeMenu}>Home</Link>

            <Link to="/about" onClick={closeMenu}>About</Link>

            <div className="mobile-dropdown">
              <span className="mobile-dropdown-title">Products</span>
              <div className="mobile-dropdown-items">
                <Link to="/products/home" onClick={closeMenu}>Home Lift</Link>
                <Link to="/products/commercial" onClick={closeMenu}>Commercial</Link>
              </div>
            </div>

            
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/careers" onClick={closeMenu}>Careers</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;