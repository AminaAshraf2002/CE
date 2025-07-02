import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, ArrowRight, Phone, Mail, Settings, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Residential.css';

// Import video
import bannerVideo from '../assets/home.mp4';

// Import residential elevator images - Update these paths to match your actual image locations
import classicImage from '../assets/classic.jpeg';
import grandeurImage from '../assets/grand2.jpeg';
import grandeurSignatureImage from '../assets/grand.jpeg';
import royaleImage from '../assets/royal.jpeg';



const Residential = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeElevator, setActiveElevator] = useState('classic');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Elevator models data with imported images
  const elevatorModels = {
    classic: {
      id: 'classic',
      name: 'Capricorn Classic',
      subtitle: 'Elegant Design with Superior Safety',
      description: 'The Capricorn Classic is designed with cutting-edge technology and a focus on safety, comfort, and durability. Featuring a sleek stainless steel cabin with both glossy and hairline finishes, this model offers a sophisticated touch to any space.',
      image: classicImage, // Using imported image
      specifications: {
        cabin: 'SS 304 Silver- Glossy & Hairline finish',
        door: 'SS 304 Covered',
        motor: 'Gearless Version 1 Rope Driven',
        landingControl: 'Push Buttons – with Brail',
        safety: 'Advanced Braking System\nOverload Cutoff\nSpeed Governing\nARD with UPS',
        idleFor: 'Masonry Shaft'
      },
      features: [
        'Sleek stainless steel cabin design',
        'Advanced safety systems',
        'Energy-efficient operation',
        'Smooth and quiet performance',
        'Braille push buttons for accessibility',
        'Emergency backup systems'
      ]
    },
    grandeur: {
      id: 'grandeur',
      name: 'Capricorn Grandeur',
      subtitle: 'Luxury Meets Advanced Technology',
      description: 'Experience the pinnacle of elevator luxury with the Capricorn Grandeur. This premium model combines sophisticated aesthetics with cutting-edge technology, featuring customizable cabin options and advanced safety systems.',
      image: grandeurImage, // Using imported image
      specifications: {
        cabin: 'SS 304\nSilver cabin with one back panel as\nRAL – White, Cream, Black, Grey, any RGB\nColoured SS – Gold, Rose Gold, Bronze, Black, etc.',
        door: 'SS 304 Half Vision & Full Vision',
        motor: 'Gearless Version 2 Rope Driven',
        landingControl: 'Touch control /hybrid',
        safety: 'Advanced Braking System\nOverload Sensor with indicator\nSpeed Governing\nARD with UPS\nDrive System 2.0\nIntercom',
        idleFor: 'Masonry'
      },
      features: [
        'Customizable cabin colors and finishes',
        'Half vision and full vision door options',
        'Touch control technology',
        'Advanced drive system 2.0',
        'Intercom communication system',
        'Premium safety features'
      ]
    },
    grandeurSignature: {
      id: 'grandeurSignature',
      name: 'Capricorn Grandeur Signature',
      subtitle: 'The Ultimate in Elevator Excellence',
      description: 'The Capricorn Grandeur Signature represents the ultimate in elevator luxury and technology. With premium materials, advanced control systems, and comprehensive safety features, this model sets new standards in residential elevator excellence.',
      image: grandeurSignatureImage, // Using imported image
      specifications: {
        cabin: 'SS 304\nColoured Cabin with options of\nRAL – White, Cream, Black,\nGrey, any RGB\nColoured SS – Gold, Rose\nGold, Bronze, Black, etc.\nDesigner SS\nWooden Finish MDF\nLeather Finish\nMirror',
        door: 'SS 304 Full Vision\nWith & without Door Frame\nRAL\nSS Coloured\nTinted option also',
        motor: 'Gearless Version 3 Motor or\nBelt Driven',
        landingControl: '20" LCD Panel with\nvoice control\ngesture Control\nMobile Control',
        safety: 'Advanced Braking System\nOverload Sensor\nSpeed Governing\nARD with UPS\nDrive System 2.0\nIntercom\nSOS notification on your\nmobile\nMalfunction alert on your\nmobile',
        idleFor: 'Masonry or Metallic Shaft'
      },
      features: [
        'Premium material options including leather and wood',
        '20" LCD panel with voice control',
        'Gesture and mobile control',
        'Smart notification system',
        'Designer cabin finishes',
        'Advanced safety monitoring'
      ]
    },
    royale: {
      id: 'royale',
      name: 'Capricorn Royale',
      subtitle: 'Glass Elegance with Smart Technology',
      description: 'The Capricorn Royale features stunning glass shaft design with 3-side glass opening, offering unparalleled views and natural light. This model combines aesthetic beauty with advanced technology for the ultimate residential elevator experience.',
      image: royaleImage, // Using imported image
      specifications: {
        cabin: '3 Side Glass Opening with\nGlass Shaft\nPlain Glass, blurred Glass,\nTinted Glass\nback panel in\nRAL – White, Cream,\nBlack, Grey, any RGB\nColoured SS – Gold, Rose\nGold, Bronze, Black, etc.\nDesigner SS\nWooden Finish MDF\nLeather Finish\nMirror',
        door: 'SS 304 Full Vision\nWith & without Door\nFrame\nRAL\nSS Coloured\nTinted option also',
        motor: 'Gearless Version 3 Motor or\nBelt Driven',
        landingControl: '20" LCD Panel with\nvoice control\ngesture Control\nMobile Control',
        safety: 'Advanced Braking System\nOverload Sensor\nSpeed Governing\nARD with UPS\nDrive System 2.0\nIntercom\nSOS notification on ur\nmobile\nMalfunction alert on yur\nmobile',
        idleFor: 'With Glass Shaft\nminimum pit 10 cm\nminimum droom 2.4m'
      },
      features: [
        '3-side glass opening with shaft',
        'Multiple glass options (plain, blurred, tinted)',
        'Premium cabin material choices',
        '20" LCD control panel',
        'Smart mobile notifications',
        'Minimal space requirements'
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-play video
    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentElevator = elevatorModels[activeElevator];

  return (
    <div className="residential-elevators-page">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="residential-hero">
        {/* Video Background */}
        <div className="residential-hero-video-container">
          <video 
            ref={videoRef}
            className="residential-hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="residential-hero-overlay" />
        </div>

        {/* Hero Content */}
        <div 
          className="residential-hero-content"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="residential-hero-badge">
            Premium Residential Collection
          </div>
          
          <h1 className="residential-hero-title">
            <span className="residential-hero-title-line-1">Luxury Home</span>
            <span className="residential-hero-title-line-2">Elevators</span>
          </h1>
          
          <p className="residential-hero-description">
            Discover our complete range of residential elevators, from classic elegance to 
            cutting-edge glass designs. Each model is crafted with precision engineering, 
            premium materials, and advanced safety systems.
          </p>
          
          <div className="residential-hero-buttons">
            <Link to="#models" className="residential-btn-primary">
              Explore Models
              <ArrowRight size={18} />
            </Link>
            
            <Link to="/contact" className="residential-btn-secondary">
              Get Quote
              <Phone size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="residential-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Elevator Models Section */}
      <section id="models" className="residential-models-section">
        <div className="residential-models-container">
          {/* Section Header */}
          <div className="residential-section-header">
            <div className="residential-section-badge">
              Our Premium Collection
            </div>
            <h2 className="residential-section-title">
              Choose Your Perfect <span className="residential-section-title-highlight">Elevator</span>
            </h2>
            <p className="residential-section-subtitle">
              From classic elegance to cutting-edge glass designs, explore our comprehensive 
              range of residential elevators tailored to your lifestyle and home aesthetics.
            </p>
          </div>

          {/* Model Navigation */}
          <div className="residential-model-nav">
            {Object.values(elevatorModels).map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveElevator(model.id)}
                className={`residential-model-nav-btn ${activeElevator === model.id ? 'active' : ''}`}
              >
                {model.name.replace('Capricorn ', '')}
              </button>
            ))}
          </div>

          {/* Active Model Display */}
          <div className="residential-model-display">
            {/* Model Image */}
            <div className="residential-model-image-container">
              <img 
                src={currentElevator.image}
                alt={currentElevator.name}
                className="residential-model-image"
                onError={(e) => {
                  // Enhanced fallback styling for better appearance
                  e.target.style.background = 'linear-gradient(135deg, #2c2c2c, #4a4a4a)';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  e.target.style.color = '#d4b347';
                  e.target.style.fontSize = '1.2rem';
                  e.target.style.fontWeight = '600';
                  e.target.style.textAlign = 'center';
                  e.target.style.padding = '20px';
                  e.target.innerHTML = `<div>${currentElevator.name}<br><small style="color: #888; font-size: 0.9rem;">Image Loading...</small></div>`;
                }}
              />
              <div className="residential-model-badge">
                {currentElevator.name.replace('Capricorn ', '')}
              </div>
            </div>

            {/* Model Details */}
            <div className="residential-model-details">
              <h3 className="residential-model-name">
                {currentElevator.name}
              </h3>
              
              <h4 className="residential-model-subtitle">
                {currentElevator.subtitle}
              </h4>
              
              <p className="residential-model-description">
                {currentElevator.description}
              </p>

              {/* Key Features */}
              <div className="residential-features">
                <h5 className="residential-features-title">
                  Key Features:
                </h5>
                <div className="residential-features-grid">
                  {currentElevator.features.map((feature, index) => (
                    <div key={index} className="residential-feature-item">
                      <Check size={16} className="residential-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="residential-model-cta">
                <Link to="/contact" className="residential-model-btn-primary">
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                
                <button className="residential-model-btn-secondary">
                  View Specifications
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="residential-specifications">
            <h3 className="residential-specifications-title">
              Technical Specifications
            </h3>
            
            <div className="residential-specifications-grid">
              {Object.entries(currentElevator.specifications).map(([key, value]) => (
                <div key={key} className="residential-spec-item">
                  <div className="residential-spec-label">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="residential-spec-value">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="residential-cta-section">
        <div className="residential-cta-container">
          <h2 className="residential-cta-title">
            Ready to Elevate Your Home?
          </h2>
          <p className="residential-cta-description">
            Get expert consultation and custom design for your perfect residential elevator. 
            Our team will help you choose the ideal model for your home and lifestyle.
          </p>
          <div className="residential-cta-buttons">
            <Link to="/contact" className="residential-cta-btn-primary">
              <MessageSquare size={18} />
              Start Consultation
            </Link>
            <a href="tel:+919876543210" className="residential-cta-btn-secondary">
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Residential;