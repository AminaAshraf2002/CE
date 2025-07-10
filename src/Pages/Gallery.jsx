import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Gallery.css';

// Import assets
import galleryHeroVideo from '../assets/about.mp4';
import galleryProject1 from '../assets/1.jpeg';
import galleryProject2 from '../assets/2.jpeg';
import galleryProject3 from '../assets/3.jpeg';
import galleryProject4 from '../assets/4.jpeg';
import galleryProject5 from '../assets/5.jpeg';
import galleryProject6 from '../assets/6.jpeg';
import galleryProject7 from '../assets/7.jpeg';
import galleryProject8 from '../assets/8.jpeg';
import galleryProject9 from '../assets/9.jpeg';
import galleryProject10 from '../assets/10.jpeg';
import galleryProject12 from '../assets/12.jpeg';
import galleryProject15 from '../assets/15.jpeg';
import galleryProject16 from '../assets/16.jpeg';
import galleryProject17 from '../assets/17.jpeg';

const Gallery = () => {
  // States
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Gallery images data
  const galleryImages = [
    { src: galleryProject1, alt: 'Luxury Residential Elevator Installation' },
    { src: galleryProject2, alt: 'Commercial Building Elevator System' },
    { src: galleryProject3, alt: 'Modern Hospital Elevator Solution' },
    { src: galleryProject4, alt: 'Premium Office Building Elevator' },
    { src: galleryProject5, alt: 'Residential Complex Elevator Installation' },
    { src: galleryProject6, alt: 'Industrial Elevator System' },
    { src: galleryProject7, alt: 'Hotel Elevator Installation' },
    { src: galleryProject8, alt: 'Shopping Mall Elevator Solution' },
    { src: galleryProject9, alt: 'Apartment Building Elevator' },
    { src: galleryProject10, alt: 'Corporate Office Elevator' },
    { src: galleryProject12, alt: 'Luxury Home Elevator' },
    { src: galleryProject15, alt: 'Commercial Complex Elevator' },
    { src: galleryProject16, alt: 'Residential Tower Elevator' },
    { src: galleryProject17, alt: 'Premium Elevator Installation' },
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize AOS and other effects
  useEffect(() => {
    // Only initialize AOS on non-mobile devices
    if (!isMobile) {
      AOS.init({ 
        duration: 800, 
        easing: 'ease-out-cubic', 
        once: true, 
        mirror: false,
        offset: 50
      });
    } else {
      // Disable AOS on mobile
      AOS.init({ disable: true });
    }

    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }

    // GSAP animations for hero section
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.gallery-hero-content', 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Intersection Observers for section visibility
    const createObserver = (ref, setState) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
        }
      }, { threshold: 0.1, rootMargin: '50px' });
    };

    const heroObserver = createObserver(heroRef, setHeroVisible);
    const galleryObserver = createObserver(galleryRef, setGalleryVisible);

    const observers = [heroObserver, galleryObserver];
    const refs = [heroRef, galleryRef];

    refs.forEach((ref, index) => {
      if (ref.current) observers[index].observe(ref.current);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      observers.forEach(obs => obs.disconnect());
      AOS.refresh();
    };
  }, [isMobile]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle image loading errors
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.style.display = 'none';
  };

  // Handle image load success
  const handleImageLoad = (e) => {
    e.target.style.opacity = '1';
    e.target.style.visibility = 'visible';
  };

  return (
    <div className="gallery-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section 
        ref={heroRef} 
        className={`gallery-hero-section ${heroVisible ? 'visible' : ''}`}
      >
        <div className="gallery-video-container">
          <video 
            ref={videoRef} 
            className="gallery-hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
          >
            <source src={galleryHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-video-overlay"></div>
        </div>

        <div 
          className="gallery-hero-content" 
          style={{
            transform: isMobile ? 'none' : `translateY(${scrollY * -0.2}px)`,
            opacity: isMobile ? 1 : Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="gallery-hero-badge">
            <span className="gallery-hero-subtitle">Project Gallery</span>
          </div>
          <h1 className="gallery-hero-title">
            <span className="title-line-1">Our Finest</span>
            <span className="title-line-2">Installations</span>
          </h1>
          <p className="gallery-hero-description">
            Explore our portfolio of premium elevator installations across residential, 
            commercial, and specialized projects. Each project represents our commitment 
            to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="scroll-indicator-gallery">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        ref={galleryRef} 
        className={`gallery-main-section ${galleryVisible ? 'visible' : ''}`}
      >
        <div className="gallery-bg-pattern" />
        <div className="gallery-container">
          
          {/* Responsive Image Grid */}
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                data-aos={isMobile ? undefined : "fade-up"}
                data-aos-delay={isMobile ? undefined : index * 50}
                data-aos-duration={isMobile ? undefined : 600}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-item-image"
                  loading={index < 4 ? "eager" : "lazy"}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  style={{
                    opacity: 1,
                    visibility: 'visible',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;