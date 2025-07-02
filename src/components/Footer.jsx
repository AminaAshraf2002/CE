import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo1.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-container">
                <img 
                  src={logo} 
                  alt="Capricorn Elevators" 
                  className="footer-logo-image"
                />
              </div>
              <span className="footer-logo-text">Capricorn Elevators</span>
            </Link>
            <p className="footer-description">
              Elevating experiences with premium elevator solutions. 
              Your trusted partner for reliable, safe, and stylish vertical transportation.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
             
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <div className="footer-links">
              <Link to="/products/residential" className="footer-link">Home Elevators</Link>
              <Link to="/products/commercial" className="footer-link">Commercial Elevators</Link>
              
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <span>+91 8943777 000</span>
                
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={16} />
                </div>
                <span>info@capricornelevators.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={16} />
                </div>
                <span>Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila, Ernakulam, Kerala 682028</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Capricorn Elevators. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms & Conditions</Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;