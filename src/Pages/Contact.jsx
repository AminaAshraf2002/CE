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
  Pause
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
    company: '',
    projectType: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [contactHeroVisible, setContactHeroVisible] = useState(true); // Set to true immediately
  const [contactFormVisible, setContactFormVisible] = useState(true); // Set to true immediately
  const [contactInfoVisible, setContactInfoVisible] = useState(true); // Set to true immediately
  const [contactCtaVisible, setContactCtaVisible] = useState(true); // Set to true immediately
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        subject: '',
        message: ''
      });
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
          {/* <div className="contact-hero-badge">
            <span className="contact-hero-subtitle">Get Expert Consultation</span>
          </div> */}
          
          {/* <div className="contact-breadcrumb">
            <span>Home</span>
            <ChevronRight size={16} />
            <span>Contact Us</span>
          </div>
           */}
          {/* <h1 className="contact-page-title">
            Get In <span className="contact-highlight">Touch</span>
          </h1>
          
          <p className="contact-page-subtitle">
            Ready to elevate your space? Connect with our elevator experts for personalized solutions. 
            From consultation to installation, we're here to bring your vision to life.
          </p> */}

          {/* <div className="contact-header-stats">
            <div className="contact-stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-stat-number">{animatedContactStats.projects}+</div>
              <div className="contact-stat-label">Projects</div>
            </div>
            <div className="contact-stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-stat-number">{animatedContactStats.countries}</div>
              <div className="contact-stat-label">Countries</div>
            </div>
            <div className="contact-stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-stat-number">{animatedContactStats.clients}+</div>
              <div className="contact-stat-label">Clients</div>
            </div>
            <div className="contact-stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-stat-number">{animatedContactStats.satisfaction}%</div>
              <div className="contact-stat-label">Satisfaction</div>
            </div>
          </div> */}

          {/* <div className="contact-header-actions">
            <button className="contact-cta-btn contact-primary">
              Schedule Free Consultation
              <ArrowRight size={18} />
            </button>
            <button className="contact-cta-btn contact-secondary">
              Call Now: +91 98765 43210
              <Phone size={18} />
            </button>
          </div> */}
        </div>

        <div className="contact-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="contact-info-grid-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfoData.map((info, index) => (
              <div 
                key={index} 
                className="contact-info-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="contact-info-icon" style={{ backgroundColor: info.color }}>
                  {info.icon}
                </div>
                <div className="contact-info-content">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-info-detail">{detail}</p>
                  ))}
                  <span className="contact-info-subtitle">{info.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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

                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="contact-input-wrapper">
                          <Phone size={18} className="contact-input-icon" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="company">Company Name</label>
                        <div className="contact-input-wrapper">
                          <Building size={18} className="contact-input-icon" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="contact-form-row">
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
                      <div className="contact-form-group">
                        <label htmlFor="subject">Subject</label>
                        <div className="contact-input-wrapper">
                          <MessageSquare size={18} className="contact-input-icon" />
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject of your inquiry"
                          />
                        </div>
                      </div>
                    </div>

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

                    <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
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
                      <p>+91 8943777000</p>
                      <p>+91 7593000222</p>
                    </div>
                  </div>
                  <div className="contact-detail-item" data-aos="fade-left" data-aos-delay="300">
                    <Mail size={20} />
                    <div>
                      <strong>Email Addresses</strong>
                      <p>accounts@capricornelevators.com</p>
                     
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
                    <a href="tel:+919876543210" className="contact-action-btn contact-action-primary">
                      <Phone size={16} />
                      Call Now
                    </a>
                    <a href="mailto:info@capricornelevators.com" className="contact-action-btn contact-action-secondary">
                      <Mail size={16} />
                      Email Us
                    </a>
                    <a href="https://wa.me/919876543210" className="contact-action-btn contact-action-whatsapp" target="_blank" rel="noopener noreferrer">
                      <MessageSquare size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-company-stats" data-aos="fade-left" data-aos-delay="600">
                  <div className="contact-company-stat">
                    <span className="contact-stat-value">500+</span>
                    <span className="contact-stat-label">Projects Completed</span>
                  </div>
                  <div className="contact-company-stat">
                    <span className="contact-stat-value">9</span>
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