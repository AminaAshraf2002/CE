import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Debug log to see state changes
  console.log('Current activeDropdown state:', activeDropdown);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is 100vh
      setIsScrolled(scrollTop >= heroHeight - 100); // Change when hero section ends (100px before for smooth transition)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.nav-dropdown') && !event.target.closest('.mobile-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown) => {
    console.log('Dropdown clicked:', dropdown); // Debug log
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdowns();
  };

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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

            {/* Products Dropdown - SIMPLIFIED */}
            <div className="nav-dropdown">
              <button
                className="nav-dropdown-trigger"
                onClick={() => {
                  console.log('Dropdown clicked!');
                  setActiveDropdown(activeDropdown === 'products' ? null : 'products');
                }}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`dropdown-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
                />
              </button>
              {console.log('Should show dropdown:', activeDropdown === 'products')}
              {activeDropdown === 'products' && (
                <div className="nav-dropdown-menu">
                  <Link to="/products/home" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                    Home Lifts
                  </Link>
                  <Link to="/products/commercial" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                    Commercial
                  </Link>
                </div>
              )}
            </div>

            <Link to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
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
            aria-label="Toggle mobile menu"
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
              <button 
                className="mobile-dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleMobileDropdown('products');
                }}
              >
                <span className="mobile-dropdown-title">Products</span>
                <ChevronDown
                  size={16}
                  className={`mobile-dropdown-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
                />
              </button>
              {activeDropdown === 'products' && (
                <div className="mobile-dropdown-items">
                  <Link to="/products/home" onClick={closeMenu}>Home Lift</Link>
                  <Link to="/products/commercial" onClick={closeMenu}>Commercial</Link>
                </div>
              )}
            </div>

            <Link to="/services" onClick={closeMenu}>Services</Link>
             <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/careers" onClick={closeMenu}>Careers</Link>

            <Link to="/contact" onClick={closeMenu}>
              <button className="btn-secondary mobile-get-quote">Get Quote</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;