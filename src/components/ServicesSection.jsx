import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Star, Palette, Building, Monitor, Zap, DoorOpen, Wrench } from 'lucide-react';
// Import main service images
import interiorFinishesMainImage from '../assets/i.jpeg';
import flooringSolutionsMainImage from '../assets/maa.jpeg';
import controlSystemsMainImage from '../assets/touch.png';
import lightingDesignMainImage from '../assets/bul.jpeg';
import multipleDoorsMainImage from '../assets/multiple.jpeg';
import doorTypesMainImage from '../assets/door.png';

// Import Interior Finishes feature images (4 images)
import woodenPanelImage from '../assets/wooden.png';
import stainlessSteelImage from '../assets/steel.jpeg';
import naturalStoneImage from '../assets/with1.jpeg';
import glassPanelsImage from '../assets/glass.jpeg';

// Import Flooring Solutions feature images (4 images)
import naturalStoneFloorImage from '../assets/with1.jpeg';
import premiumVinylImage from '../assets/with1.jpeg';
import luxuryCarpetImage from '../assets/carpet.jpeg';
import antiSlipSurfaceImage from '../assets/nonslip.jpeg';

// Import Control Systems feature images (3 images)
import buttonControlImage from '../assets/button.jpeg';
import touchPanelImage from '../assets/touch.jpeg';
import lcdDisplayImage from '../assets/lcd.jpg';

// Import Lighting Design feature images (4 images)
import ledStripsImage from '../assets/strips.jpeg';
import moodLightingImage from '../assets/mood.png';

import emergencyLedImage from '../assets/lcs.jpeg';

// Import Multiple Door Access feature images (4 images)
import frontDoorEntryImage from '../assets/front.png';
import sideDoorAccessImage from '../assets/side.png';
import dualDoorSystemImage from '../assets/double.png';
// Import Door Types feature images (4 images)
import fullVisionDoorImage from '../assets/full.jpeg';
import framelessDoorImage from '../assets/frameless.png';
import noVisionDoorImage from '../assets/no.png';
import automaticSwingDoorImage from '../assets/swing.jpeg';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('interior-finishes');
  const [servicesVisible, setServicesVisible] = useState(false);
  const servicesRef = useRef(null);

  const services = [
    {
      id: 'interior-finishes',
      title: 'Interior Finishes',
      subtitle: 'Premium wall panels, ceilings, and architectural details',
      icon: <Palette size={24} />,
      image: interiorFinishesMainImage,
      description: 'Transform your elevator interior with premium finishes including luxurious wood paneling, sophisticated stainless steel, elegant natural stone, and modern glass panels.',
      features: [
        { name: 'Wooden Panel', image: woodenPanelImage },
        { name: 'Stainless Steel', image: stainlessSteelImage },
        { name: 'Glass Panels', image: glassPanelsImage }
      ],
      highlight: 'Premium Materials'
    },
    {
      id: 'flooring-solutions',
      title: 'Flooring Solutions',
      subtitle: 'Durable and elegant flooring options for every style',
      icon: <Building size={24} />,
      image: flooringSolutionsMainImage,
      description: 'Premium flooring solutions that combine durability with aesthetic appeal, featuring natural stone, luxury vinyl, carpeting, and anti-slip surfaces for maximum safety.',
      features: [
        { name: 'Luxury Carpet', image: luxuryCarpetImage },
        { name: 'Anti-slip Surface', image: antiSlipSurfaceImage }
      ],
      highlight: 'Safety First'
    },
    {
      id: 'control-systems',
      title: 'Control Systems',
      subtitle: 'Three types of advanced control systems',
      icon: <Monitor size={24} />,
      image: controlSystemsMainImage,
      description: 'Choose from three advanced control system types: traditional button controls, modern touch panels, and LCD display systems. Each offers unique advantages for different applications and user preferences.',
      features: [
        { name: 'Button Control', image: buttonControlImage },
        { name: 'Touch Panel', image: touchPanelImage },
        { name: 'LCD Display', image: lcdDisplayImage }
      ],
      highlight: 'Smart Technology'
    },
    {
      id: 'lighting-design',
      title: 'Lighting Design',
      subtitle: 'Advanced LED systems with mood and energy efficiency',
      icon: <Zap size={24} />,
      image: lightingDesignMainImage,
      description: 'Create the perfect ambiance with our advanced lighting systems including LED strips, mood lighting, spotlights, and emergency illumination for safety and aesthetic appeal.',
      features: [
        { name: 'LED Strips', image: ledStripsImage },
        { name: 'Mood Lighting', image: moodLightingImage },
        
        { name: 'Emergency LED', image: emergencyLedImage }
      ],
      highlight: 'Energy Efficient'
    },
    {
      id: 'multiple-door-access',
      title: 'Multiple Door Access',
      subtitle: 'Flexible entry and exit options from any side',
      icon: <DoorOpen size={24} />,
      image: multipleDoorsMainImage,
      description: 'Revolutionary multiple door access system allows entry and exit from any side of the elevator. Perfect for busy commercial spaces, hospitals, and high-traffic areas where flexible access is essential.',
      features: [
        { name: 'Front Door Entry', image: frontDoorEntryImage },
    
        { name: 'Side Door Access', image: sideDoorAccessImage },
        { name: 'Dual Door System', image: dualDoorSystemImage }
      ],
      highlight: 'Flexible Access'
    },
    {
      id: 'door-types',
      title: 'Door Types',
      subtitle: 'Various door styles for different aesthetic preferences',
      icon: <Wrench size={24} />,
      image: doorTypesMainImage,
      description: 'Choose from our comprehensive range of door types including full vision doors for maximum visibility, frameless doors for modern aesthetics, no vision doors for privacy, and automatic swing doors for accessibility.',
      features: [
        { name: 'Full Vision Door', image: fullVisionDoorImage },
        { name: 'Frameless Door', image: framelessDoorImage },
        { name: 'No Vision Door', image: noVisionDoorImage },
        { name: 'Automatic Swing Door', image: automaticSwingDoorImage }
      ],
      highlight: 'Design Flexibility'
    }
  ];

  // Get current service for display
  const currentService = services.find(service => service.id === activeService);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => servicesObserver.disconnect();
  }, []);

  return (
    <section
      ref={servicesRef}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 75%)',
        color: 'white',
        padding: '75px 0',
        position: 'relative',
        overflow: 'hidden',
        opacity: servicesVisible ? 1 : 0,
        transform: servicesVisible ? 'translateY(0)' : 'translateY(30px)',
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
              Customizations
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
                      e.currentTarget.style.borderColor = 'rgba(212, 179, 71, 0.4)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 179, 71, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
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
              background: '#333'
            }}>
              <img
                src={currentService?.image}
                alt={currentService?.title || 'Service'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  filter: 'brightness(0.8)'
                }}
                onError={(e) => {
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
                  Available Options:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: currentService?.features?.length === 3 ? 'repeat(3, 1fr)' : currentService?.features?.length === 4 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
                  gap: '12px',
                  maxWidth: currentService?.features?.length === 4 ? '80%' : '100%'
                }}>
                  {(currentService?.features || []).map((feature, index) => (
                    <div key={index} style={{
                      position: 'relative',
                      height: '160px', // Increased from 120px
                      background: 'rgba(212, 179, 71, 0.05)',
                      border: '1px solid rgba(212, 179, 71, 0.2)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 179, 71, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.display = 'flex';
                          e.target.parentElement.style.alignItems = 'center';
                          e.target.parentElement.style.justifyContent = 'center';
                          e.target.parentElement.innerHTML = `<div style="color: #666; font-size: 0.9rem; text-align: center;">${feature.name}</div>`;
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        padding: '15px 10px 10px',
                        color: 'white'
                      }}>
                        <span style={{
                          fontSize: '0.8rem',
                          color: 'rgba(255, 255, 255, 0.9)',
                          textAlign: 'center',
                          fontWeight: '500',
                          display: 'block'
                        }}>
                          {feature.name}
                        </span>
                      </div>
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
      </div>
    </section>
  );
};

export default ServicesSection;