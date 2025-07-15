import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, ArrowRight, Phone, Mail, MapPin, Play, X, Settings, Shield, Zap, Star, Volume2, Wrench, Monitor, ChevronRight, Users, Heart, Globe, Building, Award, Clock, Send, User, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser'; // Add EmailJS import
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShaftSelectionSection from '../components/ShaftSelectionSection';
import TechnicalSpecifications from '../components/TechnicalSpecifications';
import ServicesSection from '../components/ServicesSection';
import PVEHotspotSection from '../components/PVEHotspotSection';
import './Home.css';

// Import assets
import bannerVideo from '../assets/banner.mp4';
import commercialImage from '../assets/commercial.jpg';
import residentialImage from '../assets/residential.jpg';
import aboutImage from '../assets/16.jpeg';
import worldMapImage from '../assets/map.png';
import indiaFlag from '../assets/India.png';
import uaeFlag from '../assets/uae.png';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_1ek8u4y',
  templateId: 'template_6b8ubiq',
  publicKey: 'Hz19e9XYQ6Y93PH_b'
};

const Home = () => {
  // All States
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [globalVisible, setGlobalVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLocation, setActiveLocation] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    installations: 0,
    countries: 0,
    satisfaction: 0
  });
  const [globalStats, setGlobalStats] = useState({
    countries: 0,
    offices: 0,
    projects: 0,
    clients: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState(''); // Add error state

  // All Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const productsRef = useRef(null);
  const journeyRef = useRef(null);
  const aboutRef = useRef(null);
  const globalRef = useRef(null);
  const contactRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroButtonsRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  // Data Arrays
  const locations = [
    { id: 'india', name: 'India', city: 'Kerala', x: 80, y: 51, flag: '🇮🇳', flagImage: indiaFlag, offices: 5, projects: 250, code: 'IN' },
    { id: 'uae', name: 'UAE', city: 'Dubai', x: 65, y: 40, flag: '🇦🇪', flagImage: uaeFlag, offices: 2, projects: 80, code: 'AE' },
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

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      details: ['+971-50-916-9002', '+91-759-3000-222'],
      subtitle: 'Mon - Sat, 9:00 AM - 6:00 PM'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      details: ['info@capricornelevators.com', 'sales@capricornelevators.com'],
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Visit Us',
      details: ['Kerala, India', 'Dubai, UAE'],
      subtitle: 'Headquarters & Regional Offices'
    },
    {
      icon: <Clock size={20} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM'],
      subtitle: 'Sunday: Closed'
    }
  ];

  const projectTypes = ['Residential Elevator', 'Commercial Elevator'];

  const products = [
    {
      id: 'residential',
      title: 'Home Lift',
      subtitle: 'Luxury, Accessibility, and Innovation',
      image: residentialImage,
      description: "Our hydraulic and Machine-Room-Less (MRL) elevators provide smooth, quiet operation and energy-efficient, space-saving designs for modern homes.",
    },
    {
      id: 'commercial',
      title: 'Commercial Elevators',
      subtitle: 'Efficient Solution for Business Spaces.',
      image: commercialImage,
      description: "From luxurious residential lifts to high-performance commercial and industrial elevators, we offer reliable, efficient, and space-saving solutions for all types of buildings.",
    }
  ];

  // Helper Functions
  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const targets = { experience: 25, installations: 500, countries: 9, satisfaction: 98 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedStats({
        experience: Math.floor(targets.experience * progress),
        installations: Math.floor(targets.installations * progress),
        countries: Math.floor(targets.countries * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepDuration);
  };

  const animateGlobalStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const targets = { countries: 2, offices: 5, projects: 200 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setGlobalStats({
        countries: Math.floor(targets.countries * progress),
        offices: Math.floor(targets.offices * progress),
        projects: Math.floor(targets.projects * progress)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setGlobalStats(targets);
      }
    }, stepDuration);
  };

  const handleLocationEnter = (locationId) => setActiveLocation(locationId);
  const handleLocationLeave = () => setActiveLocation(null);

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

  // Updated handleSubmit function with EmailJS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setPhoneError('');
    setSubmitError('');
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
      const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!/^\d+$/.test(digitsOnly)) {
        const selectedCountry = getSelectedCountryInfo();
        setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        hasErrors = true;
      } else {
        const isValid = validatePhoneNumber(formData.phone, formData.country);
        if (!isValid) {
          const selectedCountry = getSelectedCountryInfo();
          setPhoneError(`Please enter a valid ${selectedCountry?.name || ''} phone number. Example: ${selectedCountry?.example || ''}`);
          hasErrors = true;
        }
      }
    }
    
    if (hasErrors) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email data for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.country} ${formData.phone}`,
        company: formData.company || 'Not specified',
        project_type: formData.projectType || 'Not specified',
        message: formData.message
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', result);
      
      // Success - show success message
      setIsSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        country: '', 
        company: '', 
        projectType: '', 
        message: '' 
      });
      setPhoneError('');
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      if (error.text) {
        setSubmitError(`Failed to send message: ${error.text}`);
      } else if (error.status === 400) {
        setSubmitError('Please check your form data and try again.');
      } else if (error.status === 401) {
        setSubmitError('Email service configuration error. Please try again later.');
      } else {
        setSubmitError('Failed to send message. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) videoRef.current.play();
  };

  // Updated mobile-responsive hover handlers
  const handleTitleMouseEnter = (productId) => {
    if (!isMobile) {
      setHoveredProduct(productId);
    }
  };

  const handleTitleMouseLeave = () => {
    if (!isMobile) {
      setHoveredProduct(null);
    }
  };

  const handleProductClick = (productId) => {
    if (isMobile) {
      setHoveredProduct(hoveredProduct === productId ? null : productId);
    }
  };

  // Check if device is mobile
  const checkIsMobile = () => {
    const mobile = window.innerWidth <= 1023;
    setIsMobile(mobile);
    return mobile;
  };

  // Get selected country info for placeholder
  const selectedCountryInfo = getSelectedCountryInfo();

  // UseEffect for all observers and animations
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, mirror: false });

    // Check if mobile on load
    checkIsMobile();

    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }

    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(heroTitleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(heroDescRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .fromTo(heroButtonsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

    gsap.to(".floating-element", {
      y: "random(-60, 60)", x: "random(-30, 30)", rotation: "random(-90, 90)",
      duration: "random(4, 8)", ease: "none", repeat: -1, yoyo: true,
      stagger: { each: 0.3, from: "random" }
    });

    // All Observers
    const createObserver = (ref, setState, callback) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
          if (callback) callback();
        }
      }, { threshold: 0.3 });
    };

    const aboutObserver = createObserver(aboutRef, setAboutVisible, animateStats);
    const globalObserver = createObserver(globalRef, setGlobalVisible, animateGlobalStats);
    const contactObserver = createObserver(contactRef, setContactVisible);

    const journeyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setJourneyVisible(true);
        setTimeout(() => {
          const timelineSteps = document.querySelectorAll('.timeline-step');
          timelineSteps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('visible');
              setTimeout(() => {
                const circle = step.querySelector('.timeline-step-circle');
                const content = step.querySelector('.timeline-step-content');
                const image = step.querySelector('.timeline-step-image');
                if (circle) circle.style.animationDelay = '0.3s';
                if (content) content.style.animationDelay = '0.1s';
                if (image) image.style.animationDelay = '0.2s';
              }, 100);
            }, index * 300);
          });
        }, 500);
      }
    }, { threshold: 0.1, rootMargin: '100px' });

    [aboutObserver, globalObserver, contactObserver].forEach((observer, index) => {
      const refs = [aboutRef, globalRef, contactRef];
      if (refs[index].current) observer.observe(refs[index].current);
    });

    if (journeyRef.current) journeyObserver.observe(journeyRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      [journeyObserver, aboutObserver, globalObserver, contactObserver].forEach(obs => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => checkIsMobile();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="hero-section">
        <div className="video-container">
          <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline>
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-bg-elements">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-element" style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`, animationDuration: `${6 + Math.random() * 4}s`
            }} />
          ))}
        </div>

        <div className="hero-content" style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}>
          <div className="hero-badge" ref={heroTitleRef}>
            <span className="hero-subtitle">Capricorn Elevators</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line-1">Elevators Built for</span>
            <span className="title-line-2">Your Needs</span>
          </h1>
          <div className="hero-taglines" ref={heroDescRef}>
            <p className="hero-tagline-paragraph">
              Smooth, Safe, Reliable Elevators. Effortless Movement, Stylish Design.
              Smart Elevators for Stylish Living.
              <span className="main-tagline-text">Elevating Life, One Floor at a Time.</span>
            </p>
          </div>

          <div className="hero-buttons" ref={heroButtonsRef}>
            <Link to="/products/home"><button className="btn-primary-large">Explore Collection</button></Link>
            <Link to="/contact"><button className="btn-secondary-large">Get Quote</button></Link>
          </div>
        </div>

        <div className="scroll-indicator"><ChevronDown size={28} /></div>
      </section>

      {/* Featured Products Section - Updated for Mobile */}
      <section id="products" ref={productsRef} className="featured-products-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="section-badge">Premium Collection</div>
            <h2 className="section-title">
              Looking for <span className="highlight">Premium Elevator</span><br />Solutions?
            </h2>
            <p className="section-subtitle">
              Our Capricorn elevators are the best lift solutions for your project.
              Discover our signature collection of premium residential and commercial elevator systems.
            </p>
          </div>

          {isMobile ? (
            // Mobile Layout - Individual sections for each product
            <div className="elite-products-container">
              {products.map((product, index) => (
                <div key={product.id} className="mobile-product-section" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="elite-product-item" onClick={() => handleProductClick(product.id)}>
                    <div className="elite-product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="elite-product-label">
                      <h4>{product.id === 'residential' ? 'Home Lift' : 'Commercial'}</h4>
                    </div>
                  </div>
                  
                  <div className="elite-content-panel">
                    <div className="elite-product-content">
                      <div className="elite-content-inner">
                        <h3 className="elite-content-title">{product.title}</h3>
                        <h4 className="elite-content-subtitle-gold">{product.subtitle}</h4>
                        <p className="elite-content-description">{product.description}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Layout - Original hover interaction
            <div className="elite-products-container">
              <div className={`elite-products-wrapper ${hoveredProduct ? 'has-active' : ''}`}>
                {/* Residential Product - Full image hover */}
                <div
                  className={`elite-product-item left ${hoveredProduct === 'residential' ? 'active' : ''}`}
                  data-product="residential"
                  onMouseEnter={() => handleTitleMouseEnter('residential')}
                  onMouseLeave={handleTitleMouseLeave}
                >
                  <div className="elite-product-image">
                    <img src={products[0].image} alt={products[0].title} />
                  </div>
                  <div className="elite-product-label">
                    <h4>Home Lift</h4>
                  </div>
                </div>

                {/* Commercial Product - Full image hover */}
                <div
                  className={`elite-product-item right ${hoveredProduct === 'commercial' ? 'active' : ''}`}
                  data-product="commercial"
                  onMouseEnter={() => handleTitleMouseEnter('commercial')}
                  onMouseLeave={handleTitleMouseLeave}
                >
                  <div className="elite-product-image">
                    <img src={products[1].image} alt={products[1].title} />
                  </div>
                  <div className="elite-product-label">
                    <h4>Commercial</h4>
                  </div>
                </div>
              </div>

              <div className="elite-content-panel">
                {/* Residential Content */}
                <div className={`elite-product-content ${hoveredProduct === 'residential' ? 'active' : ''}`}>
                  <div className="elite-content-inner">
                    <h3 className="elite-content-title">{products[0].title}</h3>
                    <h4 className="elite-content-subtitle-gold">{products[0].subtitle}</h4>
                    <p className="elite-content-description">{products[0].description}</p>
                    
                  </div>
                </div>

                {/* Commercial Content */}
                <div className={`elite-product-content ${hoveredProduct === 'commercial' ? 'active' : ''}`}>
                  <div className="elite-content-inner">
                    <h3 className="elite-content-title">{products[1].title}</h3>
                    <h4 className="elite-content-subtitle-gold">{products[1].subtitle}</h4>
                    <p className="elite-content-description">{products[1].description}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ShaftSelectionSection />

      {/* Services Section */}
      <ServicesSection />

      <TechnicalSpecifications />

      {/* PVE Style Interactive Hotspot Section */}
      <PVEHotspotSection />

      {/* About Us Section */}
      <section ref={aboutRef} className={`home-about-section ${aboutVisible ? 'visible' : ''}`}>
        <div className="about-bg-pattern" />
        <div className="home-about-container">
          <div className="home-about-header">
            <div className="home-about-badge">Who We Are</div>
            <h2 className="home-about-title">
              Delivering Top-Quality<br />
              <span className="highlight">Elevators for Every Need</span>
            </h2>
          </div>

          <div className="home-about-content">
            <div className="home-about-image-section">
              <div className="home-about-image-container">
                <img src={aboutImage} alt="Capricorn Elevators - Modern Glass Elevator" className="home-about-main-image" />
                <div className="floating-badge">
                  <div className="badge-content">
                    <div className="badge-icon"><Shield size={20} /></div>
                    <div className="badge-text">
                      <span className="badge-title">WE ELEVATE</span>
                      <span className="badge-subtitle">SAFETY & QUALITY</span>
                    </div>
                  </div>
                </div>
                <div className="decorative-circle circle-1"></div>
                <div className="decorative-circle circle-2"></div>
              </div>
            </div>

            <div className="home-about-text-section">
              <div className="home-about-description">
                <p>
                  Capricorn Elevators is a global leader in designing and manufacturing premium Residential
                  and Commercial Elevators. With cutting-edge manufacturing facilities in India and the UAE,
                  we deliver excellence in safety, efficiency, and design.
                </p>
                <p>
                  Our commitment to innovation and quality sets industry benchmarks, making us a trusted
                  name worldwide.
                </p>
              </div>

              {/* Certifications Grid (2x2 Layout) */}
              <div className="home-certifications-grid">
                <div className="home-certification-item">
                  <div className="home-certification-icon">
                    <Award size={20} />
                  </div>
                  <div className="home-certification-content">
                    <div className="home-certification-title">ISO 9001:2015</div>
                    <div className="home-certification-subtitle">Quality Management System</div>
                  </div>
                </div>
                <div className="home-certification-item">
                  <div className="home-certification-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="home-certification-content">
                    <div className="home-certification-title">CE Certification</div>
                    <div className="home-certification-subtitle">European Conformity</div>
                  </div>
                </div>
                <div className="home-certification-item">
                  <div className="home-certification-icon">
                    <Shield size={20} />
                  </div>
                  <div className="home-certification-content">
                    <div className="home-certification-title">EN 81-20/50</div>
                    <div className="home-certification-subtitle">Safety Standards</div>
                  </div>
                </div>
                <div className="home-certification-item">
                  <div className="home-certification-icon">
                    <Star size={20} />
                  </div>
                  <div className="home-certification-content">
                    <div className="home-certification-title">ASME A17.1</div>
                    <div className="home-certification-subtitle">North American Standards</div>
                  </div>
                </div>
              </div>

              <div className="home-about-cta">
                <Link to="/about" className="home-find-out-more-btn">
                  Find Out More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section ref={globalRef} className={`global-presence-section ${globalVisible ? 'visible' : ''}`}>
        <div className="global-bg-pattern" />
        <div className="network-lines" />
        <div className="global-container">
          <div className="global-header">
            <div className="global-badge">Global Presence</div>
            <h2 className="global-title">
              Connecting Worldwide<br />
              <span className="highlight">Elevator Excellence</span>
            </h2>
            <p className="global-subtitle">
              From Kerala to the UAE, we deliver premium elevator solutions
              that connect communities and elevate experiences globally.
            </p>
          </div>

          <div className="global-content">
            <div className="map-container">
              <div className="world-map">
                <div className="map-background">
                  <img src={worldMapImage} alt="World Map" className="world-map-image" />
                  <div className="map-overlay"></div>
                </div>

                {locations.map((location, index) => (
                  <div key={location.id} className={`location-marker ${activeLocation === location.id ? 'active' : ''}`}
                    style={{ left: `${location.x}%`, top: `${location.y}%`, animationDelay: `${index * 0.3}s` }}
                    onMouseEnter={() => handleLocationEnter(location.id)}
                    onMouseLeave={handleLocationLeave}>
                    <div className="marker-pulse" />
                    <div className="marker-dot" />
                    <div className={`location-tooltip ${activeLocation === location.id ? 'show' : ''}`}>
                      <div className="tooltip-header">
                        <div className="tooltip-flag-image">
                          <img src={location.flagImage} alt={`${location.name} flag`} className="flag-img"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }} />
                          <span className="flag-emoji-fallback" style={{ display: 'none' }}>{location.flag}</span>
                        </div>
                        <div className="tooltip-country-code">{location.code}</div>
                      </div>
                      <div className="tooltip-content">
                        <h4>{location.name}</h4>
                        <p>{location.city}</p>
                        <div className="tooltip-stats">
                          <span>{location.offices} Offices</span>
                          <span>{location.projects} Projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="global-stats">
              <div className="stats-header">
                <h3>Our Global Impact</h3>
              </div>
              <div className="stats-grid">
                <div className="global-stat-card">
                  <div className="stat-icon">
                    <Globe size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{globalStats.countries}</div>
                    <div className="stat-label">Countries</div>
                  </div>
                </div>
                <div className="global-stat-card">
                  <div className="stat-icon">
                    <Building size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{globalStats.offices}</div>
                    <div className="stat-label">Offices</div>
                  </div>
                </div>
                <div className="global-stat-card">
                  <div className="stat-icon">
                    <Award size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{globalStats.projects}+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="countries-row">
            <div className="countries-header">
              <h3>Our Global Network</h3>
            </div>
            <div className="flags-container">
              {locations.map((location, index) => (
                <div key={location.id} className="flag-item" style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => handleLocationEnter(location.id)}
                  onMouseLeave={handleLocationLeave}>
                  <div className="flag-circle">
                    <img src={location.flagImage} alt={`${location.name} flag`} className="flag-circle-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }} />
                    <span className="flag-emoji-fallback" style={{ display: 'none' }}>{location.flag}</span>
                  </div>
                  <div className="country-name">{location.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={`contact-section ${contactVisible ? 'visible' : ''}`}>
        <div className="contact-bg-pattern" />
        <div className="contact-network-lines" />
        <div className="contact-container">
          <div className="contact-header">
            <div className="contact-badge">Get In Touch</div>
            <h2 className="contact-title">
              Ready to Elevate<br />
              <span className="highlight">Your Space?</span>
            </h2>
            <p className="contact-subtitle">
              Connect with our elevator experts for personalized solutions. From consultation to installation,
              we're here to bring your vision to life with premium elevator systems.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-form-section">
              <div className="form-container">
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon"><CheckCircle size={48} /></div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. Our team will contact you soon.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Add error message display */}
                    {submitError && (
                      <div className="error-message">
                        <AlertTriangle size={20} />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Row 1: Name and Email */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <div className="input-wrapper">
                          <User size={18} className="input-icon" />
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <div className="input-wrapper">
                          <Mail size={18} className="input-icon" />
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email" />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Country Code and Phone Number */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="country">Country Code *</label>
                        <div className="select-wrapper">
                          <select id="country" name="country" value={formData.country} onChange={handleInputChange} required>
                            <option value="">Select country code</option>
                            {countries.map((country, index) => (
                              <option key={index} value={country.code}>
                                {country.code} - {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <div className="input-wrapper">
                          <Phone size={18} className="input-icon" />
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

                    {/* Row 3: Company and Project Type */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company">Company (Optional)</label>
                        <div className="input-wrapper">
                          <Building size={18} className="input-icon" />
                          <input 
                            type="text" 
                            id="company" 
                            name="company" 
                            value={formData.company} 
                            onChange={handleInputChange} 
                            placeholder="Enter your company name" 
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="projectType">Project Type</label>
                        <div className="select-wrapper">
                          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange}>
                            <option value="">Select project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <div className="textarea-wrapper">
                        <MessageSquare size={18} className="textarea-icon" />
                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Tell us about your project requirements..."></textarea>
                      </div>
                    </div>

                    <button type="submit" className="submit-button" disabled={isSubmitting || phoneError}>
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
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

            <div className="contact-info-section">
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="info-detail">{detail}</p>
                      ))}
                      <span className="info-subtitle">{info.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;