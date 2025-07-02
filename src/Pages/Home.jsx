import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, ArrowRight, Phone, Mail, MapPin, Play, X, Settings, Shield, Zap, Star, Volume2, Wrench, Monitor, ChevronRight, Users, Heart, Globe, Building, Award, Clock, Send, User, MessageSquare, CheckCircle, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShaftSelectionSection from '../components/ShaftSelectionSection'; // Adjust path as needed
import TechnicalSpecifications from'../components/TechnicalSpecifications';
import './Home.css';

// Import assets
import bannerVideo from '../assets/banner.mp4';
import commercialImage from '../assets/commercial.jpg';
import residentialImage from '../assets/residential.jpg';
import elevatorHotspotImage from '../assets/hotspot.png';
import aboutImage from '../assets/about.jpg';
import worldMapImage from '../assets/map.png';
import contactElevatorImage from '../assets/homecon.jpg';
import indiaFlag from '../assets/India.png';
import uaeFlag from '../assets/uae.png';
import africaFlag from '../assets/Africa.png';
import saudiFlag from '../assets/Saudi.png';
import qatarFlag from '../assets/Qatar.png';

// Import services images
import interiorFinishesImage from '../assets/luxuary.jpeg';
import flooringSolutionsImage from '../assets/floor.jpeg';
import controlSystemsImage from '../assets/touch.png';
import lightingDesignImage from '../assets/light.jpeg';
import safetySystemsImage from '../assets/safety.jpeg';
import maintenanceServicesImage from '../assets/maintaince.png';

// Import timeline step images
import bookingConsultationImage from '../assets/booking.jpg';
import siteVisitImage from '../assets/technical.jpg';
import designApprovalImage from '../assets/design.jpg';
import customerSupportImage from '../assets/customer.jpg';
import manufacturingImage from '../assets/manufacture.jpg';
import preInstallationImage from '../assets/pre.jpg';
import installationImage from '../assets/delivery.jpg';
import testingImage from '../assets/testing.jpg';
import ongoingSupportImage from '../assets/ongoing.jpg';

const Home = () => {
  // All States
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [activeService, setActiveService] = useState('interior-finishes');
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [pveHotspotVisible, setPveHotspotVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [globalVisible, setGlobalVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
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
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // All Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const pveHotspotRef = useRef(null);
  const journeyRef = useRef(null);
  const aboutRef = useRef(null);
  const globalRef = useRef(null);
  const contactRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroButtonsRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // All Data Arrays
  const services = [
    {
      id: 'interior-finishes',
      title: 'Interior Finishes',
      subtitle: 'Premium wall panels, ceilings, and architectural details',
      icon: <Palette size={24} />,
      image: interiorFinishesImage,
      description: 'Transform your elevator interior with premium finishes including luxurious wood paneling, sophisticated stainless steel, elegant natural stone, and modern glass panels.',
      features: ['Wood Paneling', 'Stainless Steel', 'Natural Stone', 'Glass Panels', 'Custom Textures', 'LED Integration'],
      highlight: 'Premium Materials'
    },
    {
      id: 'flooring-solutions',
      title: 'Flooring Solutions',
      subtitle: 'Durable and elegant flooring options for every style',
      icon: <Building size={24} />,
      image: flooringSolutionsImage,
      description: 'Premium flooring solutions that combine durability with aesthetic appeal, featuring natural stone, luxury vinyl, carpeting, and anti-slip surfaces for maximum safety.',
      features: ['Natural Stone', 'Premium Vinyl', 'Luxury Carpet', 'Anti-slip Surface', 'Easy Maintenance', 'Custom Patterns'],
      highlight: 'Safety First'
    },
    {
      id: 'control-systems',
      title: 'Control Systems',
      subtitle: 'Smart controls and button customization options',
      icon: <Monitor size={24} />,
      image: controlSystemsImage,
      description: 'Advanced control systems featuring touch controls, LED buttons, voice command integration, and smart app connectivity for the ultimate user experience.',
      features: ['Touch Controls', 'LED Buttons', 'Voice Command', 'App Integration', 'Biometric Access', 'Emergency Systems'],
      highlight: 'Smart Technology'
    },
    {
      id: 'lighting-design',
      title: 'Lighting Design',
      subtitle: 'Advanced LED systems with mood and energy efficiency',
      icon: <Zap size={24} />,
      image: lightingDesignImage,
      description: 'Create the perfect ambiance with our advanced lighting systems including LED strips, mood lighting, spotlights, and emergency illumination.',
      features: ['LED Strips', 'Mood Lighting', 'Spotlights', 'Emergency LED', 'Color Changing', 'Motion Sensors'],
      highlight: 'Energy Efficient'
    },
    {
      id: 'safety-systems',
      title: 'Safety Systems',
      subtitle: 'Advanced safety features and emergency systems',
      icon: <Shield size={24} />,
      image: safetySystemsImage,
      description: 'Comprehensive safety solutions including emergency communication, backup power systems, fire safety integration, and advanced monitoring.',
      features: ['Emergency Phone', 'Backup Power', 'Fire Safety', '24/7 Monitoring', 'Auto Rescue', 'Earthquake Detection'],
      highlight: 'Total Protection'
    },
    {
      id: 'maintenance',
      title: 'Maintenance Services',
      subtitle: 'Comprehensive maintenance and support programs',
      icon: <Wrench size={24} />,
      image: maintenanceServicesImage,
      description: 'Ensure optimal performance with our comprehensive maintenance programs including preventive care, emergency response, and performance optimization.',
      features: ['Preventive Care', 'Emergency Response', '24/7 Support', 'Performance Reports', 'Spare Parts', 'Modernization'],
      highlight: 'Lifetime Support'
    }
  ];

  const serviceOptions = [
    {
      id: 'design-consultation',
      title: 'Design Consultation',
      icon: <Palette size={32} />,
      description: 'Work with our designers to create the perfect elevator interior that matches your building\'s aesthetic.',
      features: ['3D Visualization', 'Color Matching', 'Material Samples', 'Custom Design']
    },
    {
      id: 'smart-technology',
      title: 'Smart Technology',
      icon: <Monitor size={32} />,
      description: 'Integrate cutting-edge technology for enhanced user experience and building management.',
      features: ['IoT Integration', 'Remote Monitoring', 'Energy Tracking', 'Predictive Analytics']
    },
    {
      id: 'accessibility',
      title: 'Accessibility Features',
      icon: <Users size={32} />,
      description: 'Ensure compliance and comfort with comprehensive accessibility solutions.',
      features: ['ADA Compliant', 'Braille Buttons', 'Audio Announcements', 'Wheelchair Access']
    },
    {
      id: 'premium-support',
      title: 'Premium Support',
      icon: <Award size={32} />,
      description: 'Advanced safety features and emergency systems for peace of mind.',
      features: ['Priority Service', '24/7 Hotline', 'Expert Technicians', 'Warranty Extension']
    }
  ];

  const locations = [
    { id: 'india', name: 'India', city: 'Mumbai', x: 72, y: 45, flag: '🇮🇳', flagImage: indiaFlag, offices: 5, projects: 250, code: 'IN' },
    { id: 'uae', name: 'UAE', city: 'Dubai', x: 65, y: 40, flag: '🇦🇪', flagImage: uaeFlag, offices: 2, projects: 80, code: 'AE' },
    { id: 'south-africa', name: 'South Africa', city: 'Cape Town', x: 55, y: 70, flag: '🇿🇦', flagImage: africaFlag, offices: 1, projects: 35, code: 'ZA' },
    { id: 'saudi-arabia', name: 'Saudi Arabia', city: 'Riyadh', x: 60, y: 40, flag: '🇸🇦', flagImage: saudiFlag, offices: 1, projects: 40, code: 'SA' },
    { id: 'qatar', name: 'Qatar', city: 'Doha', x: 62, y: 42, flag: '🇶🇦', flagImage: qatarFlag, offices: 1, projects: 25, code: 'QA' }
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+971 50 123 4567'],
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
      details: ['Mumbai, India', 'Dubai, UAE'],
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

  const timelineSteps = [
    {
      id: 'booking-consultation',
      image: bookingConsultationImage,
      title: 'Booking & Initial Consultation',
      subtitle: 'The client books the lift, initiating the process.',
      description: 'Begin your elevator journey with us through a simple booking process that connects you with our expert team for comprehensive consultation and project initiation.',
      icon: <Users size={20} />,
      link: '/contact',
      buttonText: 'Start Your Journey'
    },
    {
      id: 'site-visit',
      image: siteVisitImage,
      title: 'Technical Site Visit',
      subtitle: 'Our experts visit the site to assess feasibility and requirements.',
      description: 'Our certified technical specialists conduct a thorough on-site evaluation to assess structural requirements, space constraints, and technical feasibility for optimal elevator installation.',
      icon: <Settings size={20} />,
      link: '/technical-assessment',
      buttonText: 'Learn About Assessment'
    },
    {
      id: 'design-approval',
      image: designApprovalImage,
      title: 'Design & Approval',
      subtitle: 'A detailed drawing of the site and lift is created and shared for client approval.',
      description: 'Our design team creates comprehensive technical drawings and 3D visualizations, ensuring every detail meets your requirements and receives your complete approval before proceeding.',
      icon: <Monitor size={20} />,
      link: '/design-process',
      buttonText: 'View Design Process'
    },
    {
      id: 'customer-support',
      image: customerSupportImage,
      title: 'Dedicated Customer Support',
      subtitle: 'From order placement, our support team stays in touch to provide updates and assistance.',
      description: 'Experience personalized support throughout your journey with dedicated account managers who provide regular updates, answer questions, and ensure seamless communication at every stage.',
      icon: <Phone size={20} />,
      link: '/customer-support',
      buttonText: 'Contact Support'
    },
    {
      id: 'manufacturing',
      image: manufacturingImage,
      title: 'Manufacturing Begins',
      subtitle: 'The lift is manufactured with precision based on approved designs.',
      description: 'Your elevator enters our state-of-the-art manufacturing facility where skilled craftsmen build your lift with precision engineering, quality materials, and rigorous quality control standards.',
      icon: <Building size={20} />,
      link: '/manufacturing',
      buttonText: 'View Manufacturing'
    },
    {
      id: 'pre-installation',
      image: preInstallationImage,
      title: 'Pre-Installation Technical Visit',
      subtitle: 'Another site visit ensures readiness before installation.',
      description: 'Our technical team conducts a final pre-installation inspection to verify site readiness, confirm measurements, and ensure all preparations are complete for smooth installation.',
      icon: <Shield size={20} />,
      link: '/pre-installation',
      buttonText: 'Learn More'
    },
    {
      id: 'installation',
      image: installationImage,
      title: 'Delivery & Installation',
      subtitle: 'The lift will be delivered within 3 months of order placement, and installation takes 10-20 days.',
      description: 'Experience professional installation by our certified technicians who ensure precise setup, thorough testing, and complete commissioning of your new elevator system.',
      icon: <Wrench size={20} />,
      link: '/installation',
      buttonText: 'Installation Details'
    },
    {
      id: 'testing',
      image: testingImage,
      title: 'Testing & Commissioning',
      subtitle: 'A thorough quality check is conducted to ensure smooth and safe operation.',
      description: 'Comprehensive testing and commissioning ensure your elevator meets all safety standards, operates smoothly, and performs optimally before final handover and certification.',
      icon: <Award size={20} />,
      link: '/testing',
      buttonText: 'Testing Process'
    },
    {
      id: 'ongoing-support',
      image: ongoingSupportImage,
      title: 'Ongoing CRM Support',
      subtitle: 'Regular technical visits every 2 months ensure optimal performance and long-term reliability.',
      description: 'Enjoy peace of mind with our comprehensive maintenance program featuring regular service visits, 24/7 support, and proactive care to ensure your elevator\'s optimal performance for years to come.',
      icon: <Heart size={20} />,
      link: '/support',
      buttonText: 'Support Services'
    }
  ];

  const pveHotspots = [
    {
      id: 'smart-control',
      x: 15,
      y: 15,
      icon: <Monitor size={16} />,
      title: 'Smart Control Panel',
      subtitle: 'Advanced Digital Interface',
      description: 'Easily plugged into 220v outlet from top of the unit with touch screen control and energy monitoring capabilities.',
      features: ['Touch Screen Interface', 'Energy Consumption Display', 'Remote Monitoring', 'Emergency Communication'],
      specs: { 'Power Input': '220V Standard', 'Response Time': '< 0.5 seconds', 'Display': '7" Color LCD', 'Connectivity': 'WiFi Ready' }
    },
    {
      id: 'safety-system',
      x: 85,
      y: 25,
      icon: <Shield size={16} />,
      title: 'Safety Lock System',
      subtitle: 'Multi-Layer Protection',
      description: 'Self-supporting elevator does not require a shaft, pit or dedicated machine room with advanced safety mechanisms.',
      features: ['Emergency Brake System', 'Door Safety Sensors', 'Backup Power Supply', 'Anti-Fall Protection'],
      specs: { 'Safety Rating': 'EN 81-41', 'Backup Duration': '30 minutes', 'Load Capacity': '400 kg', 'Speed': '0.15 m/s' }
    },
    {
      id: 'installation',
      x: 50,
      y: 70,
      icon: <Wrench size={16} />,
      title: 'Quick Installation',
      subtitle: 'Minimal Home Modifications',
      description: 'Rests on the existing ground floor with minimal home modifications required for fast and easy installation.',
      features: ['No Shaft Required', 'No Pit Needed', 'Ground Floor Mount', '2-3 Days Installation'],
      specs: { 'Installation Time': '2-3 days', 'Modifications': 'Minimal', 'Foundation': 'Existing Floor', 'Ceiling Height': '2.5-3.5m' }
    },
    {
      id: 'vacuum-system',
      x: 50,
      y: 45,
      icon: <Zap size={16} />,
      title: 'Vacuum Technology',
      subtitle: 'Energy Efficient Operation',
      description: 'Our vacuum elevator is the best lift solution for your project with smooth and quiet operation technology.',
      features: ['Pneumatic Drive System', 'Energy Efficient', 'Smooth Operation', 'Eco-Friendly Design'],
      specs: { 'Drive System': 'Pneumatic', 'Energy Usage': 'Low Consumption', 'Noise Level': '< 55 dB', 'Efficiency': '90%+' }
    },
    {
      id: 'space-saving',
      x: 20,
      y: 85,
      icon: <Star size={16} />,
      title: 'Space Saving Design',
      subtitle: 'Compact Footprint',
      description: 'Learn how you can save money and space by installing a Capricorn home elevator in as little as 2-3 days.',
      features: ['Compact Design', 'Space Optimization', 'Flexible Positioning', 'Architectural Integration'],
      specs: { 'Footprint': '1.2m diameter', 'Height': 'Up to 13.5m', 'Floors': '2-5 levels', 'Space Saved': '60% vs traditional' }
    },
    {
      id: 'maintenance',
      x: 80,
      y: 80,
      icon: <Settings size={16} />,
      title: 'Low Maintenance',
      subtitle: 'Reliable Performance',
      description: 'Advanced diagnostics and minimal maintenance requirements ensure long-lasting reliable performance for years.',
      features: ['Self-Diagnostic System', 'Predictive Maintenance', 'Remote Monitoring', 'Annual Service Only'],
      specs: { 'Service Interval': 'Annual', 'Warranty': '2 years', 'Lifespan': '20+ years', 'Monitoring': '24/7 Remote' }
    }
  ];

  const products = [
    {
      id: 'residential',
      title: 'Residential Elevators',
      subtitle: 'Luxury, Accessibility, and Innovation',
      image: residentialImage,
      description: "Our hydraulic and Machine-Room-Less (MRL) elevators provide smooth, quiet operation and energy-efficient, space-saving designs for modern homes.",
      buttonText: "Read More"
    },
    {
      id: 'commercial',
      title: 'Commercial Elevators',
      subtitle: 'Efficient Solution for Business Spaces.',
      image: commercialImage,
      description: "From luxurious residential lifts to high-performance commercial and industrial elevators, we offer reliable, efficient, and space-saving solutions for all types of buildings.",
      buttonText: "Read More"
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
    const targets = { countries: 5, offices: 7, projects: 550, clients: 1200 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setGlobalStats({
        countries: Math.floor(targets.countries * progress),
        offices: Math.floor(targets.offices * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setGlobalStats(targets);
      }
    }, stepDuration);
  };

  const handleLocationEnter = (locationId) => setActiveLocation(locationId);
  const handleLocationLeave = () => setActiveLocation(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleTitleMouseEnter = (productId) => setHoveredProduct(productId);
  const handleTitleMouseLeave = () => setHoveredProduct(null);
  const handlePveHotspotEnter = (hotspotId) => setActiveHotspot(hotspotId);
  const handlePveHotspotLeave = () => setActiveHotspot(null);

  // Get current service for display
  const currentService = services.find(service => service.id === activeService);

  // UseEffect for all observers and animations
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, mirror: false });

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

    const servicesObserver = createObserver(servicesRef, setServicesVisible);
    const pveObserver = createObserver(pveHotspotRef, setPveHotspotVisible);
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

    [servicesObserver, pveObserver, aboutObserver, globalObserver, contactObserver].forEach((observer, index) => {
      const refs = [servicesRef, pveHotspotRef, aboutRef, globalRef, contactRef];
      if (refs[index].current) observer.observe(refs[index].current);
    });

    if (journeyRef.current) journeyObserver.observe(journeyRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      [servicesObserver, pveObserver, journeyObserver, aboutObserver, globalObserver, contactObserver].forEach(obs => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <span className="hero-subtitle">Your Trusted Elevator Partner</span>
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
          <p className="hero-welcome" ref={heroButtonsRef}>
            <strong>Welcome to Capricorn Elevators!</strong>
          </p>
          <div className="hero-buttons">
            <Link to="/products"><button className="btn-primary-large">Explore Collection</button></Link>
            <Link to="/contact"><button className="btn-secondary-large">Get Quote</button></Link>
          </div>
        </div>

        <div className="scroll-indicator"><ChevronDown size={28} /></div>
      </section>

      {/* Featured Products Section */}
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

          <div className="elite-products-container">
            <div className={`elite-products-wrapper ${hoveredProduct ? 'has-active' : ''}`}>

              {/* Residential Product */}
              <div className={`elite-product-item left ${hoveredProduct === 'residential' ? 'active' : ''}`}>
                <div className="elite-product-image">
                  <img src={products[0].image} alt={products[0].title} />
                </div>
                <div className="elite-product-label" onMouseEnter={() => handleTitleMouseEnter('residential')} onMouseLeave={handleTitleMouseLeave}>
                  <h4>Home Lift</h4>
                </div>
              </div>

              {/* Commercial Product */}
              <div className={`elite-product-item right ${hoveredProduct === 'commercial' ? 'active' : ''}`}>
                <div className="elite-product-image">
                  <img src={products[1].image} alt={products[1].title} />
                </div>
                <div className="elite-product-label" onMouseEnter={() => handleTitleMouseEnter('commercial')} onMouseLeave={handleTitleMouseLeave}>
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
                  <div className="elite-read-more-section">
                    <Link to="/residential-elevators" className="elite-read-more-btn">
                      {products[0].buttonText}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Commercial Content */}
              <div className={`elite-product-content ${hoveredProduct === 'commercial' ? 'active' : ''}`}>
                <div className="elite-content-inner">
                  <h3 className="elite-content-title">{products[1].title}</h3>
                  <h4 className="elite-content-subtitle-gold">{products[1].subtitle}</h4>
                  <p className="elite-content-description">{products[1].description}</p>
                  <div className="elite-read-more-section">
                    <Link to="/commercial-elevators" className="elite-read-more-btn">
                      {products[1].buttonText}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShaftSelectionSection />
      <TechnicalSpecifications />

      {/* Services Section - FIXED VERSION */}
      <section
        ref={servicesRef}
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 75%)',
          color: 'white',
          padding: '75px 0',
          position: 'relative',
          overflow: 'hidden',
          opacity: 1, // Force visible for debugging
          transform: 'translateY(0)', // Force visible for debugging
          transition: 'all 1s ease-out'
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(212, 179, 71, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(212, 179, 71, 0.03) 0%, transparent 50%)
          `,
          opacity: 0.8
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(212, 179, 71, 0.15)',
              border: '1px solid rgba(212, 179, 71, 0.4)',
              borderRadius: '25px',
              fontSize: '0.70rem',
              fontWeight: '600',
              color: '#d4b347',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px'
            }}>
              Customization Services
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '15px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Tailored <span style={{ color: '#d4b347', fontWeight: '800' }}>Elevator Solutions</span><br />
              Built for Your Vision
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Experience complete customization control. From luxurious finishes to smart technology integration,
              every detail is crafted to match your unique requirements and aesthetic preferences.
            </p>
          </div>

          {/* Main Interactive Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '400px 1fr' : '1fr',
            gap: '60px',
            marginBottom: '80px'
          }}>
            {/* Left - Service Navigation */}
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#d4b347',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Our Services
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}>
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px',
                      background: activeService === service.id
                        ? 'linear-gradient(135deg, rgba(212, 179, 71, 0.1), rgba(240, 212, 130, 0.05))'
                        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.8))',
                      border: activeService === service.id
                        ? '2px solid #d4b347'
                        : '2px solid rgba(212, 179, 71, 0.2)',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      transform: activeService === service.id ? 'translateX(10px)' : 'translateX(0)',
                      boxShadow: activeService === service.id ? '0 15px 40px rgba(212, 179, 71, 0.3)' : 'none'
                    }}
                    onClick={() => setActiveService(service.id)}
                    onMouseEnter={(e) => {
                      if (activeService !== service.id) {
                        e.target.style.borderColor = 'rgba(212, 179, 71, 0.4)';
                        e.target.style.transform = 'translateX(5px)';
                        e.target.style.boxShadow = '0 10px 30px rgba(212, 179, 71, 0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeService !== service.id) {
                        e.target.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                        e.target.style.transform = 'translateX(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      {service.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: activeService === service.id ? '#d4b347' : 'white',
                        marginBottom: '5px',
                        transition: 'all 0.3s ease'
                      }}>
                        {service.title}
                      </h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: activeService === service.id ? 'rgba(212, 179, 71, 0.9)' : 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.4',
                        transition: 'all 0.3s ease'
                      }}>
                        {service.subtitle}
                      </p>
                    </div>
                    <div style={{
                      color: activeService === service.id ? '#d4b347' : 'rgba(255, 255, 255, 0.5)',
                      transition: 'all 0.3s ease',
                      transform: activeService === service.id ? 'translateX(5px)' : 'translateX(0)'
                    }}>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Service Details */}
            <div>
              <div style={{
                position: 'relative',
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '30px',
                border: '2px solid rgba(212, 179, 71, 0.3)',
                transition: 'all 0.4s ease',
                background: '#333' // Fallback background
              }}>
                <img
                  src={currentService?.image || '/api/placeholder/400/300'}
                  alt={currentService?.title || 'Service'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    filter: 'brightness(0.8)'
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = '<div style="color: #666; font-size: 1rem;">Service Image</div>';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(26, 26, 26, 0.95))',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid #d4b347',
                  borderRadius: '25px',
                  padding: '8px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#d4b347',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  <Star size={16} />
                  <span>{currentService?.highlight || 'Premium'}</span>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.9))',
                border: '2px solid rgba(212, 179, 71, 0.3)',
                borderRadius: '20px',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    {currentService?.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#d4b347',
                      marginBottom: '5px'
                    }}>
                      {currentService?.title || 'Service Title'}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'rgba(212, 179, 71, 0.8)',
                      fontWeight: '500'
                    }}>
                      {currentService?.subtitle || 'Service subtitle'}
                    </p>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '25px'
                }}>
                  {currentService?.description || 'Service description goes here.'}
                </p>

                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#f0d482',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Key Features:
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    {(currentService?.features || ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']).map((feature, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: '8px',
                        background: 'rgba(212, 179, 71, 0.05)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: '#d4b347',
                          borderRadius: '50%',
                          flexShrink: 0
                        }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="/services" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 25px',
                  background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  Learn More
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div style={{ marginBottom: '80px' }}>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#d4b347',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Additional Services
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {serviceOptions.map((option, index) => (
                <div
                  key={option.id}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.9))',
                    border: '2px solid rgba(212, 179, 71, 0.2)',
                    borderRadius: '20px',
                    padding: '30px',
                    textAlign: 'center',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#d4b347';
                    e.target.style.transform = 'translateY(-10px)';
                    e.target.style.boxShadow = '0 20px 50px rgba(212, 179, 71, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    color: '#000',
                    transition: 'all 0.3s ease'
                  }}>
                    {option.icon}
                  </div>
                  <h4 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.2rem',
                    color: '#d4b347',
                    marginBottom: '10px'
                  }}>
                    {option.title}
                  </h4>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {option.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    {option.features.map((feature, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(212, 179, 71, 0.2)',
                        color: '#d4b347',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: '1px solid rgba(212, 179, 71, 0.3)',
                        transition: 'all 0.3s ease'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </section>
      {/* PVE Style Interactive Hotspot Section */}
      <section ref={pveHotspotRef} className="pve-hotspot-section">
        <div className="pve-bg-pattern" />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`pve-section-header ${pveHotspotVisible ? 'visible' : ''}`}>
            <div className="pve-badge">Innovation & Technology</div>
            <h2 className="pve-main-title">
              Looking for a <span className="highlight">Quick-to-Install</span><br />
              Residential Elevator?
            </h2>
            <p className="pve-subtitle">
              Our Capricorn elevator is the best lift solution for your project.
              Learn how you can save money and space by installing a home elevator in as little as 2-3 days.
            </p>
          </div>

          <div className={`pve-main-content ${pveHotspotVisible ? 'visible' : ''}`}>
            <div className="pve-elevator-section">
              <div className="pve-elevator-container">
                <div className="pve-elevator-image" style={{ backgroundImage: `url(${elevatorHotspotImage})` }} />
                <div className="pve-elevator-overlay" />
                {pveHotspots.map((hotspot, index) => (
                  <div key={hotspot.id} className={`pve-hotspot ${activeHotspot === hotspot.id ? 'active' : ''}`}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onMouseEnter={() => handlePveHotspotEnter(hotspot.id)}
                    onMouseLeave={handlePveHotspotLeave}>
                    <div className="pve-hotspot-dot" />
                    <div className="pve-hotspot-number">{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="pve-feature-panel">
                {activeHotspot ? (
                  (() => {
                    const feature = pveHotspots.find(h => h.id === activeHotspot);
                    return (
                      <div className="pve-feature-content">
                        <div className="pve-feature-header">
                          <h3 className="pve-feature-title">{feature.title}</h3>
                          <h4 className="pve-feature-subtitle">{feature.subtitle}</h4>
                        </div>
                        <p className="pve-feature-description">{feature.description}</p>
                        <div className="pve-feature-lists">
                          <div className="pve-feature-list">
                            <h5><Star size={14} />Key Features:</h5>
                            <ul className="pve-feature-items">
                              {feature.features.map((feat, idx) => (
                                <li key={idx} className="pve-feature-item">
                                  <div className="pve-feature-bullet" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pve-specs-list">
                            <h5><Settings size={14} />Specifications:</h5>
                            <div className="pve-specs-grid">
                              {Object.entries(feature.specs).map(([key, value]) => (
                                <div key={key} className="pve-spec-item">
                                  <span className="pve-spec-label">{key}:</span>
                                  <span className="pve-spec-value">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Link to="/contact" className="pve-cta-button">
                          Request a Quote
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    );
                  })()
                ) : (
                  <div className="pve-default-state">
                    <div className="pve-default-icon"><Monitor size={32} color="#d4b347" /></div>
                    <h3 className="pve-default-title">Explore Our Features</h3>
                    <p className="pve-default-text">
                      Hover over the numbered hotspots on the elevator to discover the advanced features and benefits of our Capricorn elevator system.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      {/* <section ref={journeyRef} className={`timeline-journey-section ${journeyVisible ? 'visible' : ''}`}>
        <div className="timeline-bg-pattern" />
        <div className="timeline-container">
          <div className="timeline-section-header">
            <div className="timeline-badge">Our Seamless Journey</div>
            <h2 className="timeline-main-title">
              Seamless Service Flow – <span className="highlight">"From Booking to Lifetime Support"</span>
            </h2>
            <p className="timeline-subtitle">
              At Capricorn, we ensure a smooth and hassle-free journey for our clients, from booking to lifelong service support.
              Our process is designed to provide precision, reliability, and continuous assistance at every stage:
            </p>
          </div>

          <div className="timeline-line" />

          <div className="timeline-steps">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="timeline-step">
                <div className="timeline-step-image">
                  <img src={step.image} alt={step.title} className="step-image" />
                </div>
                <div className="timeline-step-content">
                  <div className="timeline-connector" />
                  <div className="timeline-content-header">
                    <h3 className="timeline-content-title">{step.title}</h3>
                    <h4 className="timeline-content-subtitle">{step.subtitle}</h4>
                  </div>
                  <p className="timeline-content-description">{step.description}</p>
                  <Link to={step.link} className="timeline-cta-button">
                    {step.buttonText}
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="timeline-step-circle">
                  <div className="timeline-step-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="timeline-step-icon">{step.icon}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-bottom-message">
            <p>
              With Capricorn, <span className="highlight-text">you're not just purchasing a lift—you're investing</span> in lifetime
              safety, efficiency, and unmatched service excellence.
            </p>
          </div>
        </div>
      </section> */}

      {/* About Us Section */}
      <section ref={aboutRef} className={`about-section ${aboutVisible ? 'visible' : ''}`}>
        <div className="about-bg-pattern" />
        <div className="about-container">
          <div className="about-header">
            <div className="about-badge">Who We Are</div>
            <h2 className="about-title">
              Delivering Top-Quality<br />
              <span className="highlight">Elevators for Every Need</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-image-section">
              <div className="about-image-container">
                <img src={aboutImage} alt="Capricorn Elevators - Modern Glass Elevator" className="about-main-image" />
                <div className="floating-badge">
                  <div className="badge-content">
                    <div className="badge-icon"><Shield size={24} /></div>
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

            <div className="about-text-section">
              <div className="about-description">
                <p>
                  Capricorn Elevators is a global leader in designing and manufacturing premium Residential
                  and Commercial Elevators. With cutting-edge manufacturing facilities in India and the UAE,
                  and operations spanning 9 countries, we deliver excellence in safety, efficiency, and design.
                </p>
                <p>
                  Our commitment to innovation and quality sets industry benchmarks, making us a trusted
                  name worldwide.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{animatedStats.experience}+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{animatedStats.installations}+</div>
                  <div className="stat-label">Installations</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{animatedStats.countries}</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{animatedStats.satisfaction}%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>

              <div className="about-cta">
                <Link to="/about" className="find-out-more-btn">
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
              From India to the UAE, and across 9 countries worldwide, we deliver premium elevator solutions
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
                    style={{ left: `${location.x}%`, top: `${location.y}%`, animationDelay: `${index * 0.2}s` }}
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
              <div className="stats-header"><h3>Our Global Impact</h3></div>
              <div className="stats-grid">
                <div className="global-stat-card">
                  <div className="stat-icon"><Globe size={24} /></div>
                  <div className="stat-number">{globalStats.countries}</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="global-stat-card">
                  <div className="stat-icon"><Building size={24} /></div>
                  <div className="stat-number">{globalStats.offices}</div>
                  <div className="stat-label">Offices</div>
                </div>
                <div className="global-stat-card">
                  <div className="stat-icon"><Award size={24} /></div>
                  <div className="stat-number">{globalStats.projects}+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="global-stat-card">
                  <div className="stat-icon"><Users size={24} /></div>
                  <div className="stat-number">{globalStats.clients}+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="countries-row">
            <div className="countries-header"><h3>Our Global Network</h3></div>
            <div className="flags-container">
              {locations.map((location, index) => (
                <div key={location.id} className="flag-item" style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => handleLocationEnter(location.id)} onMouseLeave={handleLocationLeave}>
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

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="input-wrapper">
                          <Phone size={18} className="input-icon" />
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <div className="input-wrapper">
                          <Building size={18} className="input-icon" />
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter company name" />
                        </div>
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

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <div className="textarea-wrapper">
                        <MessageSquare size={18} className="textarea-icon" />
                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Tell us about your project requirements..."></textarea>
                      </div>
                    </div>

                    <button type="submit" className="submit-button" disabled={isSubmitting}>
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
              <div className="elevator-showcase">
                <div className="elevator-image-container">
                  <img src={contactElevatorImage} alt="Modern Capricorn Elevator" className="elevator-image" />
                  <div className="elevator-overlay"></div>
                  <div className="elevator-badge">
                    <div className="badge-content">
                      <div className="badge-icon"><CheckCircle size={20} /></div>
                      <div className="badge-text">
                        <span className="badge-title">TRUSTED</span>
                        <span className="badge-subtitle">WORLDWIDE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

              <div className="contact-cta">
                <h3>Need Immediate Assistance?</h3>
                <p>Our elevator experts are ready to help you find the perfect solution.</p>
                <div className="cta-buttons">
                  <a href="tel:+919876543210" className="cta-button primary">
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a href="mailto:info@capricornelevators.com" className="cta-button secondary">
                    <Mail size={16} />
                    Email Us
                  </a>
                </div>
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