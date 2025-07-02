import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, ArrowRight, Phone, Mail, MapPin, Play, X, Settings, Shield, Zap, Star, Volume2, Wrench, Monitor, ChevronRight, Users, Heart, Globe, Building, Award, Clock, Send, User, MessageSquare, CheckCircle, Palette, Target, Eye, Lightbulb, Factory, Truck, Headphones, Medal, Badge } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

// Import assets (you'll need to add these to your assets folder)
import aboutHeroVideo from '../assets/about.mp4'; // Main hero video
import aboutBannerImage from '../assets/aboutus.png'; // Center banner image
import whoWeAreImage from '../assets/who.jpeg';
import missionImage from '../assets/miss.jpeg';
import visionImage from '../assets/vission.jpeg';
import whyChooseUsImage from '../assets/choose.jpeg';
import certificationImage1 from '../assets/one.jpeg';
import certificationImage2 from '../assets/two.jpeg';
import certificationImage3 from '../assets/three.jpeg';
import certificationImage4 from '../assets/four.jpeg';

const About = () => {
  // States
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [whoWeAreVisible, setWhoWeAreVisible] = useState(false);
  const [missionVisionVisible, setMissionVisionVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [certificationsVisible, setCertificationsVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  
  // Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const missionVisionRef = useRef(null);
  const whyChooseRef = useRef(null);
  const certificationsRef = useRef(null);
  const bannerRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Data arrays
  const missionVisionData = {
    'who-we-are': {
      title: 'Who We Are',
      subtitle: 'Leaders in Vertical Transportation',
      icon: <Users size={32} />,
      image: whoWeAreImage,
      description: 'Capricorn Elevators is a global leader in designing and manufacturing premium Residential and Commercial Elevators. With cutting-edge manufacturing facilities in India and the UAE, and operations spanning 9 countries, we deliver excellence in safety, efficiency, and design.',
      points: [
        'Global presence across 9 countries',
        '25+ years of industry experience',
        'State-of-the-art manufacturing facilities',
        'Committed to innovation and quality',
        'Trusted by thousands of customers worldwide'
      ]
    },
    'mission': {
      title: 'Our Mission',
      subtitle: 'Elevating Lives Through Innovation',
      icon: <Target size={32} />,
      image: missionImage,
      description: 'To provide safe, reliable, and innovative elevator solutions that enhance the quality of life for people worldwide. We strive to exceed customer expectations through superior engineering, exceptional service, and sustainable practices.',
      points: [
        'Deliver world-class elevator solutions',
        'Ensure highest safety standards',
        'Foster innovation and technological advancement',
        'Provide exceptional customer service',
        'Promote sustainable and eco-friendly practices'
      ]
    },
    'vision': {
      title: 'Our Vision',
      subtitle: 'Shaping the Future of Vertical Mobility',
      icon: <Eye size={32} />,
      image: visionImage,
      description: 'To be the world\'s most trusted and innovative elevator company, setting new standards in vertical transportation technology while creating sustainable value for our customers, employees, and communities.',
      points: [
        'Lead global elevator innovation',
        'Set industry safety benchmarks',
        'Expand to emerging markets',
        'Achieve carbon-neutral operations',
        'Build lasting customer relationships'
      ]
    }
  };

  const whyChooseUsReasons = [
    {
      icon: <Shield size={24} />,
      title: 'Safety First',
      description: 'Our elevators meet and exceed international safety standards with advanced safety systems and regular maintenance protocols.',
      stats: '99.9% Safety Record'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Excellence',
      description: 'Premium materials, precision engineering, and rigorous quality control ensure long-lasting, reliable performance.',
      stats: '25+ Years Experience'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Expert Installation',
      description: 'Our certified technicians ensure professional installation with minimal disruption and maximum efficiency.',
      stats: '500+ Installations'
    },
    {
      icon: <Headphones size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency services ensure your elevators are always running smoothly.',
      stats: '24/7 Availability'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'Cutting-edge technology and smart features that enhance user experience and energy efficiency.',
      stats: '50+ Patents'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Presence',
      description: 'International expertise with local support, ensuring world-class service wherever you are.',
      stats: '9 Countries'
    }
  ];

  const certifications = [
    {
      image: certificationImage1,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description: 'Certified for maintaining highest quality standards in manufacturing and service delivery.',
      validUntil: '2025'
    },
    {
      image: certificationImage2,
      title: 'CE Certification',
      subtitle: 'European Conformity',
      description: 'Meets European safety, health, and environmental protection standards for elevator systems.',
      validUntil: '2024'
    },
    {
      image: certificationImage3,
      title: 'EN 81-20/50',
      subtitle: 'Safety Standards',
      description: 'Compliant with latest European safety standards for passenger and goods elevators.',
      validUntil: '2026'
    },
    {
      image: certificationImage4,
      title: 'ASME A17.1',
      subtitle: 'North American Standards',
      description: 'Certified for North American elevator safety code compliance and installation standards.',
      validUntil: '2025'
    }
  ];

  // Helper functions
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // UseEffect for animations and observers
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, mirror: false });

    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }

    // GSAP animations
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.about-hero-content', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    // Intersection Observers
    const createObserver = (ref, setState, callback) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
          if (callback) callback();
        }
      }, { threshold: 0.3 });
    };

    const heroObserver = createObserver(heroRef, setHeroVisible);
    const whoWeAreObserver = createObserver(whoWeAreRef, setWhoWeAreVisible);
    const missionVisionObserver = createObserver(missionVisionRef, setMissionVisionVisible);
    const whyChooseObserver = createObserver(whyChooseRef, setWhyChooseVisible);
    const certificationsObserver = createObserver(certificationsRef, setCertificationsVisible);
    const bannerObserver = createObserver(bannerRef, setBannerVisible);

    const observers = [heroObserver, whoWeAreObserver, missionVisionObserver, whyChooseObserver, certificationsObserver, bannerObserver];
    const refs = [heroRef, whoWeAreRef, missionVisionRef, whyChooseRef, certificationsRef, bannerRef];

    refs.forEach((ref, index) => {
      if (ref.current) observers[index].observe(ref.current);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentData = missionVisionData[activeTab];

  return (
    <div className="about-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className={`about-hero-section ${heroVisible ? 'visible' : ''}`}>
        <div className="about-video-container">
          <video ref={videoRef} className="about-hero-video" autoPlay muted loop playsInline>
            <source src={aboutHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about-video-overlay"></div>
        </div>

        <div className="about-hero-content" style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}>
          <div className="about-hero-badge">
            <span className="about-hero-subtitle">About Capricorn Elevators</span>
          </div>
          <h1 className="about-hero-title">
            <span className="title-line-1">Elevating Standards</span>
            <span className="title-line-2">Since 1999</span>
          </h1>
          <p className="about-hero-description">
            With over 25 years of excellence in vertical transportation, we are committed to 
            delivering premium elevator solutions that combine safety, innovation, and reliability 
            across 9 countries worldwide.
          </p>
          <div className="about-hero-stats">
            <div className="hero-stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Installations</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">9</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator-about">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Mission, Vision & Who We Are Section */}
      <section ref={missionVisionRef} className={`mission-vision-section ${missionVisionVisible ? 'visible' : ''}`}>
        <div className="mission-vision-bg-pattern" />
        <div className="mission-vision-container">
          <div className="mission-vision-header">
            <div className="mission-vision-badge">Our Foundation</div>
            <h2 className="mission-vision-title">
              Building Tomorrow's <span className="highlight">Vertical Solutions</span>
            </h2>
            <p className="mission-vision-subtitle">
              Discover the principles, vision, and passion that drive our commitment to excellence 
              in elevator technology and customer service.
            </p>
          </div>

          <div className="mission-vision-content">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              {Object.keys(missionVisionData).map((key) => (
                <button
                  key={key}
                  className={`tab-button ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <div className="tab-icon">{missionVisionData[key].icon}</div>
                  <span className="tab-text">{missionVisionData[key].title}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="tab-content">
              <div className="tab-content-inner">
                <div className="content-image-section">
                  <div className="content-image-container">
                    <img src={currentData.image} alt={currentData.title} className="content-main-image" />
                    <div className="image-overlay"></div>
                    <div className="floating-badge-content">
                      <div className="badge-content-inner">
                        <div className="badge-icon-content">{currentData.icon}</div>
                        <div className="badge-text-content">
                          <span className="badge-title-content">{currentData.title}</span>
                          <span className="badge-subtitle-content">{currentData.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-text-section">
                  <h3 className="content-title">{currentData.title}</h3>
                  <h4 className="content-subtitle">{currentData.subtitle}</h4>
                  <p className="content-description">{currentData.description}</p>
                  
                  <div className="content-points">
                    <h5>Key Highlights:</h5>
                    <ul className="points-list">
                      {currentData.points.map((point, index) => (
                        <li key={index} className="point-item">
                          <div className="point-icon"><Check size={16} /></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Banner Section */}
      <section ref={bannerRef} className={`about-banner-section ${bannerVisible ? 'visible' : ''}`}>
        <div className="banner-bg-pattern" />
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-image-side">
              <div className="banner-image-container">
                <img src={aboutBannerImage} alt="Capricorn Elevators Excellence" className="banner-image" />
                <div className="banner-image-overlay"></div>
                <div className="banner-play-button" onClick={handleVideoPlay}>
                  <Play size={24} />
                </div>
              </div>
            </div>
            
            <div className="banner-text-side">
              <div className="banner-badge">Excellence in Motion</div>
              <h2 className="banner-title">
                Trusted by Thousands,
                <span className="banner-highlight"> Delivered with Precision</span>
              </h2>
              <p className="banner-description">
                From luxury residential buildings to complex commercial projects, our elevators 
                have become the preferred choice for discerning customers who value quality, 
                safety, and innovation.
              </p>
              <div className="banner-features">
                <div className="banner-feature">
                  <div className="feature-icon"><Factory size={20} /></div>
                  <span>Advanced Manufacturing</span>
                </div>
                <div className="banner-feature">
                  <div className="feature-icon"><Truck size={20} /></div>
                  <span>Global Delivery</span>
                </div>
                <div className="banner-feature">
                  <div className="feature-icon"><Settings size={20} /></div>
                  <span>Expert Installation</span>
                </div>
              </div>
              <Link to="/contact" className="banner-cta-button">
                Get Started Today
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className={`why-choose-section ${whyChooseVisible ? 'visible' : ''}`}>
        <div className="why-choose-bg-pattern" />
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div className="why-choose-badge">Why Choose Us</div>
            <h2 className="why-choose-title">
              Six Reasons to Choose <span className="highlight">Capricorn Elevators</span>
            </h2>
            <p className="why-choose-subtitle">
              Discover what sets us apart in the elevator industry and why customers worldwide 
              trust us for their vertical transportation needs.
            </p>
          </div>

          <div className="reasons-grid">
            {whyChooseUsReasons.map((reason, index) => (
              <div key={index} className="reason-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="reason-icon">{reason.icon}</div>
                <div className="reason-content">
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                  <div className="reason-stats">{reason.stats}</div>
                </div>
                <div className="reason-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className={`certifications-section ${certificationsVisible ? 'visible' : ''}`}>
        <div className="certifications-bg-pattern" />
        <div className="certifications-container">
          <div className="certifications-header">
            <div className="certifications-badge">Certifications & Standards</div>
            <h2 className="certifications-title">
              Certified Excellence in <span className="highlight">Safety & Quality</span>
            </h2>
            <p className="certifications-subtitle">
              Our commitment to quality is validated by international certifications and compliance 
              with global safety standards, ensuring peace of mind for our customers.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <div className="cert-overlay"></div>
                  <div className="cert-badge">
                    <Award size={24} />
                  </div>
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <h4 className="cert-subtitle">{cert.subtitle}</h4>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-validity">Valid until: {cert.validUntil}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;