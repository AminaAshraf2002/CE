import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Gallery.css';

// Import assets (you'll need to add these to your assets folder)
import galleryHeroVideo from '../assets/about.mp4'; // Main hero video
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
import galleryProject11 from '../assets/11.jpeg';
import galleryProject12 from '../assets/12.jpeg';
import galleryProject13 from '../assets/13.jpeg';
import galleryProject14 from '../assets/14.jpeg';
import galleryProject15 from '../assets/15.jpeg';
import galleryProject16 from '../assets/16.jpeg';
import galleryProject17 from '../assets/17.jpeg';

const Gallery = () => {
  // States
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Gallery images data - only image paths needed
  const galleryImages = [
    galleryProject1,
    galleryProject2,
    galleryProject3,
    galleryProject4,
    galleryProject5,
    galleryProject6,
    galleryProject7,
    galleryProject8,
    galleryProject9,
    galleryProject10,
    galleryProject11,
    galleryProject12,
    galleryProject13,
    galleryProject14,
    galleryProject15,
    galleryProject16,
    galleryProject17,
    
  ];

  // Effects
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, mirror: false });

    if (videoRef.current) {
      videoRef.current.play();
    }

    // GSAP animations
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.gallery-hero-content', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    // Intersection Observers
    const createObserver = (ref, setState) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
        }
      }, { threshold: 0.3 });
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
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gallery-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className={`gallery-hero-section ${heroVisible ? 'visible' : ''}`}>
        <div className="gallery-video-container">
          <video ref={videoRef} className="gallery-hero-video" autoPlay muted loop playsInline>
            <source src={galleryHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-video-overlay"></div>
        </div>

        <div className="gallery-hero-content" style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}>
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

      {/* Images Only Gallery Section */}
      <section ref={galleryRef} className={`gallery-main-section ${galleryVisible ? 'visible' : ''}`}>
        <div className="gallery-bg-pattern" />
        <div className="gallery-container">
          
          {/* Images Only Grid */}
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-item-image"
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