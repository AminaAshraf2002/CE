import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, ArrowRight, Phone, Mail, Settings, MessageSquare, Building, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Commercial.css';

// Import video
import bannerVideo from '../assets/commerce.mp4';

// Import elevator images - Update these paths to match your actual image locations
import vertexImage from '../assets/ver.jpeg';
import presidentialImage from '../assets/pres.jpeg';


const Commercial = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeElevator, setActiveElevator] = useState('vertex');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Commercial elevator models data with imported images
  const elevatorModels = {
    vertex: {
      id: 'vertex',
      name: 'Capricorn Vertex',
      subtitle: 'Professional Grade Commercial Solution',
      description: 'The Capricorn Vertex is engineered for high-traffic commercial environments, offering reliability, efficiency, and sleek design. Perfect for office buildings, retail centers, and commercial complexes.',
      image: vertexImage, // Using imported image
      specifications: {
        cabin: 'SS 304 Silver- Glossy & Hairline finish',
        door: 'SS 304 Covered',
        motor: 'Gearless Version 1 Rope Driven',
        landingControl: 'Push Buttons – with Brail',
        safety: 'Advanced Braking System\nOverload Cutoff\nSpeed Governing\nARD with UPS',
        idleFor: 'Masonry',
        capacity: '4,6,8,10,15,18,20,26'
      },
      features: [
        'Heavy-duty commercial construction',
        'High-speed operation for efficiency',
        'Energy-efficient LED lighting',
        'Vandal-resistant button panels',
        'Advanced safety systems',
        'Multiple capacity options'
      ]
    },
    presidential: {
      id: 'presidential',
      name: 'Capricorn Presidential',
      subtitle: 'Luxury Commercial Elevator Solution',
      description: 'The Capricorn Presidential represents the pinnacle of commercial elevator luxury. Featuring premium materials, advanced technology, and sophisticated design for prestigious commercial buildings.',
      image: presidentialImage, // Using imported image
      specifications: {
        cabin: 'With & Without Shaft\n3 Side Glass Opening with Glass Shaft\nPlain Glass, blurred Glass, Tinted Glass\nback panel in\nRAL – White, Cream, Black,\nGrey, any RGB\nColoured SS – Gold, Rose Gold,\nBronze, Black, etc.\nDesigner SS\nWooden Finish MDF\nLeather Finish\nMirror',
        door: 'SS 304 Full Vision\nWith & without Door Frame\nRAL\nSS Coloured\nTinted option also',
        motor: 'Gearless Version 3 Motor or Belt Driven',
        landingControl: '20" LCD Panel with\nvoice control\ngesture Control\nMobile Control',
        safety: 'Advanced Braking System\nOverload Sensor\nSpeed Governing\nARD with UPS\nDrive System 2.0\nIntercom\nSOS notification on your mobile\nMalfunction alert on your\nmobile',
        idleFor: 'With Glass Shaft\nminimum pit 10 cm\nminimum droom 2.4m',
        capacity: '4,6,8,10,15,18,20,26'
      },
      features: [
        '3-side glass opening design',
        'Premium material options',
        '20" LCD control panel with smart features',
        'Mobile notifications and alerts',
        'Flexible shaft requirements',
        'Executive-level luxury finishes'
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
    <div className="comm-elevators-page">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="comm-hero">
        {/* Video Background */}
        <div className="comm-hero-video-container">
          <video 
            ref={videoRef}
            className="comm-hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="comm-hero-overlay" />
        </div>

        {/* Hero Content */}
        <div 
          className="comm-hero-content"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="comm-hero-badge">
            Professional Commercial Solutions
          </div>
          
          <h1 className="comm-hero-title">
            <span className="comm-hero-title-line-1">Commercial</span>
            <span className="comm-hero-title-line-2">Elevators</span>
          </h1>
          
          <p className="comm-hero-description">
            Engineered for high-traffic commercial environments, our elevators deliver 
            exceptional performance, reliability, and efficiency. From office buildings 
            to retail centers, we provide solutions that keep your business moving.
          </p>
          
          <div className="comm-hero-buttons">
            <Link to="#models" className="comm-btn-primary">
              Explore Solutions
              <ArrowRight size={18} />
            </Link>
            
            <Link to="/contact" className="comm-btn-secondary">
              Request Quote
              <Building size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="comm-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Commercial Benefits Section */}
      <section className="comm-benefits-section">
        <div className="comm-benefits-container">
          <div className="benefits-header">
            <div className="benefits-badge">Why Choose Commercial</div>
            <h2 className="benefits-title">
              Built for <span className="benefits-highlight">Business Success</span>
            </h2>
            <p className="benefits-subtitle">
              Our commercial elevators are designed to meet the demanding requirements 
              of modern business environments with superior performance and reliability.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>High Traffic Capacity</h3>
              <p>Designed to handle heavy daily usage with multiple capacity options from 4 to 26 passengers.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Zap size={32} />
              </div>
              <h3>Energy Efficient</h3>
              <p>Advanced gearless motors and LED lighting systems reduce operational costs and environmental impact.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Shield size={32} />
              </div>
              <h3>Advanced Safety</h3>
              <p>Comprehensive safety systems including emergency communication and backup power ensure peace of mind.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Building size={32} />
              </div>
              <h3>Professional Design</h3>
              <p>Sleek aesthetics that complement modern commercial architecture and enhance building value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elevator Models Section */}
      <section id="models" className="comm-models-section">
        <div className="comm-models-container">
          {/* Section Header */}
          <div className="comm-section-header">
            <div className="comm-section-badge">
              Our Commercial Collection
            </div>
            <h2 className="comm-section-title">
              Professional <span className="comm-section-title-highlight">Elevator Solutions</span>
            </h2>
            <p className="comm-section-subtitle">
              From standard commercial applications to luxury executive installations, 
              our elevators are built to meet diverse business requirements.
            </p>
          </div>

          {/* Model Navigation */}
          <div className="comm-model-nav">
            {Object.values(elevatorModels).map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveElevator(model.id)}
                className={`comm-model-nav-btn ${activeElevator === model.id ? 'active' : ''}`}
              >
                {model.name.replace('Capricorn ', '')}
              </button>
            ))}
          </div>

          {/* Active Model Display */}
          <div className="comm-model-display">
            {/* Model Image */}
            <div className="comm-model-image-container">
              <img 
                src={currentElevator.image}
                alt={currentElevator.name}
                className="comm-model-image"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.background = 'linear-gradient(135deg, #333, #555)';
                  e.target.style.display = 'flex';
                  e.target.style.alignItems = 'center';
                  e.target.style.justifyContent = 'center';
                  e.target.style.color = '#d4b347';
                  e.target.style.fontSize = '1.2rem';
                  e.target.style.fontWeight = '600';
                  e.target.innerHTML = `<div>${currentElevator.name}</div>`;
                }}
              />
              <div className="comm-model-badge">
                {currentElevator.name.replace('Capricorn ', '')}
              </div>
            </div>

            {/* Model Details */}
            <div className="comm-model-details">
              <h3 className="comm-model-name">
                {currentElevator.name}
              </h3>
              
              <h4 className="comm-model-subtitle">
                {currentElevator.subtitle}
              </h4>
              
              <p className="comm-model-description">
                {currentElevator.description}
              </p>

              {/* Key Features */}
              <div className="comm-features">
                <h5 className="comm-features-title">
                  Key Features:
                </h5>
                <div className="comm-features-grid">
                  {currentElevator.features.map((feature, index) => (
                    <div key={index} className="comm-feature-item">
                      <Check size={16} className="comm-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="comm-model-cta">
                <Link to="/contact" className="comm-model-btn-primary">
                  Request Quote
                  <ArrowRight size={16} />
                </Link>
                
                <button className="comm-model-btn-secondary">
                  View Specifications
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="comm-specifications">
            <h3 className="comm-specifications-title">
              Technical Specifications
            </h3>
            
            <div className="comm-specifications-grid">
              {Object.entries(currentElevator.specifications).map(([key, value]) => (
                <div key={key} className="comm-spec-item">
                  <div className="comm-spec-label">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="comm-spec-value">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="comm-applications-section">
        <div className="applications-container">
          <div className="applications-header">
            <h2 className="applications-title">Perfect for Any Commercial Setting</h2>
            <p className="applications-subtitle">
              Our commercial elevators are designed to serve various business environments
            </p>
          </div>

          <div className="applications-grid">
            <div className="application-card">
              <h3>Office Buildings</h3>
              <p>High-rise corporate buildings and business centers requiring efficient vertical transportation.</p>
            </div>
            <div className="application-card">
              <h3>Retail Centers</h3>
              <p>Shopping malls and retail complexes with heavy foot traffic and accessibility requirements.</p>
            </div>
            <div className="application-card">
              <h3>Hotels & Hospitality</h3>
              <p>Luxury hotels and resorts where style meets functionality for guest convenience.</p>
            </div>
            <div className="application-card">
              <h3>Healthcare Facilities</h3>
              <p>Hospitals and medical centers requiring reliable, safe, and accessible transportation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="comm-cta-section">
        <div className="comm-cta-container">
          <h2 className="comm-cta-title">
            Ready to Upgrade Your Building?
          </h2>
          <p className="comm-cta-description">
            Transform your commercial space with our professional elevator solutions. 
            Our experts will help you choose the perfect system for your business needs.
          </p>
          <div className="comm-cta-buttons">
            <Link to="/contact" className="comm-cta-btn-primary">
              <MessageSquare size={18} />
              Get Professional Quote
            </Link>
            <a href="tel:+919876543210" className="comm-cta-btn-secondary">
              <Phone size={18} />
              Call Sales Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;