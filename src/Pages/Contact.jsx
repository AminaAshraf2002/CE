import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle, 
  Building,
  Star,
  Globe,
  Award,
  Shield,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  Play,
  Pause,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

// Import assets
import bannerVideo from '../assets/hero.mp4';
import contactElevatorImage from '../assets/homecon.jpg';
import elevatorInteriorImage from '../assets/luxuary.jpeg';
import elevatorExteriorImage from '../assets/residential.jpg';

const Contact = () => {
  // States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [contactHeroVisible, setContactHeroVisible] = useState(true);
  const [contactFormVisible, setContactFormVisible] = useState(true);
  const [contactInfoVisible, setContactInfoVisible] = useState(true);
  const [contactCtaVisible, setContactCtaVisible] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [animatedContactStats, setAnimatedContactStats] = useState({
    projects: 500,
    countries: 9,
    clients: 1200,
    satisfaction: 98
  });

  // Refs
  const contactHeroRef = useRef(null);
  const contactVideoRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactCtaRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Data Arrays
  const projectTypes = [
    'Residential Elevator',
    'Commercial Elevator',
    'Industrial Elevator',
    'Hospital Elevator',
    'Freight Elevator',
    'Passenger Elevator',
    'Maintenance Service',
    'Modernization',
    'Other'
  ];

  const countries = [
    { 
      code: '+91', 
      name: 'India', 
      pattern: /^[6-9]\d{9}$/, 
      placeholder: 'Enter 10-digit number (e.g., 9876543210)', 
      example: '9876543210',
      description: '10 digits starting with 6-9'
    },
    { 
      code: '+971', 
      name: 'UAE', 
      pattern: /^[5]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 501234567)', 
      example: '501234567',
      description: '9 digits starting with 5'
    },
    { 
      code: '+1', 
      name: 'USA', 
      pattern: /^[2-9]\d{9}$/, 
      placeholder: 'Enter 10-digit number (e.g., 2125551234)', 
      example: '2125551234',
      description: '10 digits starting with 2-9'
    },
    { 
      code: '+44', 
      name: 'UK', 
      pattern: /^[1-9]\d{9,10}$/, 
      placeholder: 'Enter 10-11 digit number (e.g., 2012345678)', 
      example: '2012345678',
      description: '10-11 digits starting with 1-9'
    },
    { 
      code: '+33', 
      name: 'France', 
      pattern: /^[1-9]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 123456789)', 
      example: '123456789',
      description: '9 digits starting with 1-9'
    },
    { 
      code: '+49', 
      name: 'Germany', 
      pattern: /^[1-9]\d{9,11}$/, 
      placeholder: 'Enter 10-12 digit number (e.g., 1712345678)', 
      example: '1712345678',
      description: '10-12 digits starting with 1-9'
    },
    { 
      code: '+81', 
      name: 'Japan', 
      pattern: /^[1-9]\d{9,10}$/, 
      placeholder: 'Enter 10-11 digit number (e.g., 9012345678)', 
      example: '9012345678',
      description: '10-11 digits starting with 1-9'
    },
    { 
      code: '+86', 
      name: 'China', 
      pattern: /^[1]\d{10}$/, 
      placeholder: 'Enter 11-digit number (e.g., 13812345678)', 
      example: '13812345678',
      description: '11 digits starting with 1'
    },
    { 
      code: '+61', 
      name: 'Australia', 
      pattern: /^[4]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 412345678)', 
      example: '412345678',
      description: '9 digits starting with 4'
    },
    { 
      code: '+65', 
      name: 'Singapore', 
      pattern: /^[8-9]\d{7}$/, 
      placeholder: 'Enter 8-digit number (e.g., 81234567)', 
      example: '81234567',
      description: '8 digits starting with 8 or 9'
    }
  ];

  const contactInfoData = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+91 7593000222', '+91 8943777000'],
      subtitle: 'Mon - Sat, 9:00 AM - 6:00 PM',
      color: '#d4b347'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['accounts@capricornelevators.com'],
      subtitle: 'We respond within 24 hours',
      color: '#f0d482'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM'],
      subtitle: 'Sunday: Closed',
      color: '#d4b347'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Presence',
      details: ['9 Countries Worldwide', '500+ Projects Completed'],
      subtitle: 'Serving clients globally',
      color: '#f0d482'
    }
  ];

  // Helper functions
  const handleContactVideoPlay = () => {
    if (contactVideoRef.current) {
      setIsVideoPlaying(true);
      contactVideoRef.current.play();
    }
  };

  const handleContactVideoPause = () => {
    if (contactVideoRef.current) {
      setIsVideoPlaying(false);
      contactVideoRef.current.pause();
    }
  };

  // Enhanced Phone Validation Functions
  const validatePhoneNumber = (phone, countryCode) => {
    if (!phone || !countryCode) return false;
    
    const selectedCountry = countries.find(c => c.code === countryCode);
    if (!selectedCountry) return false;
    
    // Remove formatting characters
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Must contain only digits
    if (!/^\d+$/.test(cleanPhone)) {
      return false;
    }
    
    // Must match country-specific pattern
    return selectedCountry.pattern.test(cleanPhone);
  };

  const getSelectedCountryInfo = () => {
    return countries.find(c => c.code === formData.country);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow digits, spaces, hyphens, and parentheses
      let cleanValue = value.replace(/[^\d\s\-\(\)]/g, '');
      
      // Additional check: if the input contains letters, show immediate error
      if (/[a-zA-Z]/.test(value)) {
        const selectedCountry = getSelectedCountryInfo();
        setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
      }
      
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      
      // Real-time validation
      if (formData.country && cleanValue) {
        const isValid = validatePhoneNumber(cleanValue, formData.country);
        const selectedCountry = getSelectedCountryInfo();
        
        // Check if contains only digits (after removing formatting)
        const digitsOnly = cleanValue.replace(/[\s\-\(\)]/g, '');
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Please enter a valid ${selectedCountry.name} phone number. Example: ${selectedCountry.example}`);
        } else if (isValid) {
          setPhoneError(''); // Clear error for valid numbers
        }
      } else if (formData.country && !cleanValue) {
        setPhoneError('Phone number is required');
      }
    } else if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value }));
      setPhoneError(''); // Reset phone error when country changes
      
      // Re-validate existing phone number with new country
      if (formData.phone) {
        const isValid = validatePhoneNumber(formData.phone, value);
        const selectedCountry = countries.find(c => c.code === value);
        
        const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Please enter a valid ${selectedCountry.name} phone number. Example: ${selectedCountry.example}`);
        } else if (isValid) {
          setPhoneError('');
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setPhoneError('');
    let hasErrors = false;
    
    // Validate required fields
    if (!formData.name?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.email?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.message?.trim()) {
      hasErrors = true;
    }
    
    // Phone validation
    if (!formData.phone?.trim()) {
      setPhoneError('Phone number is required');
      hasErrors = true;
    } else if (!formData.country) {
      setPhoneError('Please select a country code');
      hasErrors = true;
    } else {
      // Check if phone contains only digits (after removing formatting)
      const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!/^\d+$/.test(digitsOnly)) {
        const selectedCountry = getSelectedCountryInfo();
        setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        hasErrors = true;
      } else {
        // Validate against country pattern
        const isValid = validatePhoneNumber(formData.phone, formData.country);
        if (!isValid) {
          const selectedCountry = getSelectedCountryInfo();
          setPhoneError(`Please enter a valid ${selectedCountry?.name || ''} phone number. Example: ${selectedCountry?.example || ''}`);
          hasErrors = true;
        }
      }
    }
    
    // Stop submission if there are any errors
    if (hasErrors) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        projectType: '',
        subject: '',
        message: ''
      });
      setPhoneError('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  // UseEffect for all observers and animations
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      easing: 'ease-out-cubic', 
      once: true, 
      mirror: false,
      offset: 100
    });

    // Enhanced video handling
    const video = contactVideoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(console.log);
      setIsVideoPlaying(true);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedCountryInfo = getSelectedCountryInfo();

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={contactHeroRef} className="contact-hero-section visible">
        <div className="contact-video-container">
          <video 
            ref={contactVideoRef} 
            className="contact-hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            poster={contactElevatorImage}
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="contact-video-overlay"></div>
          
          <div className="contact-video-controls">
            <button 
              className="contact-video-control-btn"
              onClick={isVideoPlaying ? handleContactVideoPause : handleContactVideoPlay}
              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
            >
              {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>

        <div className="contact-header-bg-pattern" />
        
        <div className="contact-header-content" style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          opacity: Math.max(0, 1 - scrollY / 700)
        }}>
        </div>

        <div className="contact-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-main-bg-pattern" />
        <div className="contact-container">
          <div className="contact-main-content-grid">
            
            {/* Contact Form */}
            <div ref={contactFormRef} className="contact-form-section visible">
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="contact-success-message">
                    <div className="contact-success-icon">
                      <CheckCircle size={48} />
                    </div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. Our team will contact you soon.</p>
                    <button 
                      className="contact-new-message-btn"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Row 1: Name and Email */}
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="name">Full Name *</label>
                        <div className="contact-input-wrapper">
                          <User size={18} className="contact-input-icon" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="email">Email Address *</label>
                        <div className="contact-input-wrapper">
                          <Mail size={18} className="contact-input-icon" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Country Code and Phone Number */}
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="country">Country Code *</label>
                        <div className="contact-select-wrapper">
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select country code</option>
                            {countries.map((country, index) => (
                              <option key={index} value={country.code}>
                                {country.code} - {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <div className="contact-input-wrapper">
                          <Phone size={18} className="contact-input-icon" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder={selectedCountryInfo ? selectedCountryInfo.placeholder : "Select country code first"}
                            disabled={!formData.country}
                          />
                        </div>
                        {phoneError && (
                          <div className="phone-error-message">
                            <AlertTriangle size={16} />
                            <span>{phoneError}</span>
                          </div>
                        )}
                        {selectedCountryInfo && (
                          <div className="phone-help-text">
                            Format: {selectedCountryInfo.code} {selectedCountryInfo.example}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Project Type (single column, full width) */}
                    <div className="contact-form-group">
                      <label htmlFor="projectType">Project Type</label>
                      <div className="contact-select-wrapper">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="contact-form-group">
                      <label htmlFor="message">Message *</label>
                      <div className="contact-textarea-wrapper">
                        <MessageSquare size={18} className="contact-textarea-icon" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>
                    </div>

                    <button type="submit" className="contact-submit-button" disabled={isSubmitting || phoneError}>
                      {isSubmitting ? (
                        <>
                          <div className="contact-spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Office Information */}
            <div ref={contactInfoRef} className="contact-office-info-section visible">
              <div className="contact-simple-contact-info">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-detail-item" data-aos="fade-left" data-aos-delay="100">
                    <MapPin size={20} />
                    <div>
                      <strong>Head Office</strong>
                      <p>Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila, Ernakulam, Kerala 682028</p>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-aos="fade-left" data-aos-delay="200">
                    <Phone size={20} />
                    <div>
                      <strong>Phone Numbers</strong>
                      <p>+971-50-916-9002</p>
                      <p>+91 7593000222</p>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-aos="fade-left" data-aos-delay="300">
                    <Mail size={20} />
                    <div>
                      <strong>Email Addresses</strong>
                      <p>sales@capriconelevators.com</p>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-aos="fade-left" data-aos-delay="400">
                    <Clock size={20} />
                    <div>
                      <strong>Business Hours</strong>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="contact-quick-actions" data-aos="fade-left" data-aos-delay="500">
                  <h4>Quick Actions</h4>
                  <div className="contact-action-buttons">
                    <a href="tel:+917593000222" className="contact-action-btn contact-action-primary">
                      <Phone size={16} />
                      Call Now
                    </a>
                    <a href="mailto:sales@capriconelevators.com" className="contact-action-btn contact-action-secondary">
                      <Mail size={16} />
                      Email Us
                    </a>
                    <a href="https://wa.me/917593000222" className="contact-action-btn contact-action-whatsapp" target="_blank" rel="noopener noreferrer">
                      <MessageSquare size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-company-stats" data-aos="fade-left" data-aos-delay="600">
                  <div className="contact-company-stat">
                    <span className="contact-stat-value">200+</span>
                    <span className="contact-stat-label">Projects Completed</span>
                  </div>
                  <div className="contact-company-stat">
                    <span className="contact-stat-value">2</span>
                    <span className="contact-stat-label">Countries Served</span>
                  </div>
                  <div className="contact-company-stat">
                    <span className="contact-stat-value">25+</span>
                    <span className="contact-stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={contactCtaRef} className="contact-cta-section visible">
        <div className="contact-cta-bg-image">
          <img src={contactElevatorImage} alt="Modern Elevator" />
        </div>
        <div className="contact-cta-bg-pattern" />
        <div className="contact-container">
          <div className="contact-cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Transform your space with our premium elevator solutions. Get in touch today for a free consultation.</p>
            <div className="contact-cta-buttons">
              <button className="contact-cta-btn contact-primary">
                Schedule Consultation
                <ArrowRight size={18} />
              </button>
              <button className="contact-cta-btn contact-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;