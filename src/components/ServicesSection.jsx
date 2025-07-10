import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Star, Palette, Building, Monitor, Zap, DoorOpen, Wrench } from 'lucide-react';
import './ServicesSection.css'; // Import the CSS file

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
import woodImage from '../assets/woo.jpg';
import glassPanelsImage from '../assets/glass.jpeg';

// Import Flooring Solutions feature images (4 images)
import graniteImage from '../assets/granite.jpg';
import marblelImage from '../assets/floorm.jpg';
import luxuryCarpetImage from '../assets/carpet.jpeg';
import antiSlipSurfaceImage from '../assets/nonslip.jpeg';

// Import Control Systems feature images (3 images)
import buttonControlImage from '../assets/button.jpeg';
import touchPanelImage from '../assets/touch.jpeg';
import lcdDisplayImage from '../assets/tab.jpeg';

// Import Lighting Design feature images (4 images)
import ledStripsImage from '../assets/class.jpeg';
import moodLightingImage from '../assets/mood.png';

// Import Multiple Door Access feature images (4 images)
import frontDoorEntryImage from '../assets/front.png';
import sideDoorAccessImage from '../assets/adjacent.jpeg';
import dualDoorSystemImage from '../assets/double.png';

// Import Door Types feature images (4 images)
import fullVisionDoorImage from '../assets/full.jpeg';
import framelessDoorImage from '../assets/frameless.png';
import noVisionDoorImage from '../assets/no.png';
import automaticSwingDoorImage from '../assets/swing.jpeg';

// Import Steel Color images (6 images)
import silverSteelImage from '../assets/silver.jpg';
import roseGoldSteelImage from '../assets/rose.jpg';
import goldSteelImage from '../assets/gold.jpg';
import bronzeSteelImage from '../assets/bro.jpg';
import blackSteelImage from '../assets/black.jpg';
import blueSteelImage from '../assets/blue.jpg';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('interior-finishes');
  const [servicesVisible, setServicesVisible] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const servicesRef = useRef(null);

  // Steel color options
  const steelColors = [
    {
      name: 'Silver',
      color: '#C0C0C0',
      gradient: 'linear-gradient(135deg, #C0C0C0, #E8E8E8)',
      image: silverSteelImage
    },
    {
      name: 'Rose Gold',
      color: '#E8B4A0',
      gradient: 'linear-gradient(135deg, #E8B4A0, #F5D5C8)',
      image: roseGoldSteelImage
    },
    {
      name: 'Gold',
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #FFD700, #FFF3A0)',
      image: goldSteelImage
    },
    {
      name: 'Bronze',
      color: '#CD7F32',
      gradient: 'linear-gradient(135deg, #CD7F32, #E6A85C)',
      image: bronzeSteelImage
    },
    {
      name: 'Black',
      color: '#2C2C2C',
      gradient: 'linear-gradient(135deg, #2C2C2C, #4A4A4A)',
      image: blackSteelImage
    },
    {
      name: 'Blue',
      color: '#4169E1',
      gradient: 'linear-gradient(135deg, #4169E1, #87CEEB)',
      image: blueSteelImage
    }
  ];

  const services = [
    {
      id: 'interior-finishes',
      title: 'Interior Finishes',
      subtitle: 'Premium wall panels, ceilings, and architectural details',
      icon: <Palette size={24} />,
      image: interiorFinishesMainImage,
      description: 'Transform your elevator interior with premium finishes including luxurious wood paneling, sophisticated stainless steel, elegant natural stone, and modern glass panels.',
      features: [
        { name: 'Marble Panel', image: woodenPanelImage, hasColorOptions: false },
        { name: 'Wooden Panel', image: woodImage, hasColorOptions: false },
        { name: 'Stainless Steel', image: stainlessSteelImage, hasColorOptions: true, colorOptions: steelColors },
        { name: 'Glass Panels', image: glassPanelsImage, hasColorOptions: false }
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
        { name: 'Luxury Carpet', image: luxuryCarpetImage, hasColorOptions: false },
        { name: 'Anti-slip Surface', image: antiSlipSurfaceImage, hasColorOptions: false },
        { name: 'Marble', image: marblelImage, hasColorOptions: false },
        { name: 'Granite', image: graniteImage, hasColorOptions: false }
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
        { name: 'Button Control', image: buttonControlImage, hasColorOptions: false },
        { name: 'Touch Panel', image: touchPanelImage, hasColorOptions: false },
        { name: 'LCD Display', image: lcdDisplayImage, hasColorOptions: false }
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
        { name: 'LED Strips', image: ledStripsImage, hasColorOptions: false },
        { name: 'Mood Lighting', image: moodLightingImage, hasColorOptions: false },
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
        { name: 'Front Door Entry', image: frontDoorEntryImage, hasColorOptions: false },
        { name: 'Adjacent Access', image: sideDoorAccessImage, hasColorOptions: false },
        { name: 'Opposite Access', image: dualDoorSystemImage, hasColorOptions: false }
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
        { name: 'Full Vision Door', image: fullVisionDoorImage, hasColorOptions: false },
        { name: 'Frameless Door', image: framelessDoorImage, hasColorOptions: false },
        { name: 'No Vision Door', image: noVisionDoorImage, hasColorOptions: false },
        { name: 'Automatic Swing Door', image: automaticSwingDoorImage, hasColorOptions: false }
      ],
      highlight: 'Design Flexibility'
    }
  ];

  // Initialize selectedColors with default values
  useEffect(() => {
    const initialColors = {};
    services.forEach(service => {
      service.features.forEach(feature => {
        if (feature.hasColorOptions && feature.colorOptions) {
          const featureKey = `${service.id}-${feature.name}`;
          initialColors[featureKey] = feature.colorOptions[0].name; // Default to first color
        }
      });
    });
    setSelectedColors(initialColors);
  }, []);

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

  const handleFeatureClick = (feature, serviceId) => {
    if (feature.hasColorOptions && feature.colorOptions) {
      const featureKey = `${serviceId}-${feature.name}`;
      setShowColorOptions(prev => ({
        ...prev,
        [featureKey]: !prev[featureKey]
      }));
    }
  };

  const handleColorSelect = (colorName, feature, serviceId) => {
    const featureKey = `${serviceId}-${feature.name}`;
    setSelectedColors(prev => ({
      ...prev,
      [featureKey]: colorName
    }));

    // Force re-render to ensure background updates
    setTimeout(() => {
      const selectedColor = feature.colorOptions.find(color => color.name === colorName);
      if (selectedColor) {
        console.log(`Selected color ${colorName} for ${feature.name}:`, selectedColor.image);
      }
    }, 100);
  };

  const getSelectedColorImage = (feature, serviceId) => {
    if (!feature.hasColorOptions || !feature.colorOptions) return null;

    const featureKey = `${serviceId}-${feature.name}`;
    const selectedColorName = selectedColors[featureKey];
    const selectedColor = feature.colorOptions.find(color => color.name === selectedColorName);

    return selectedColor ? selectedColor.image : null;
  };

  const getBackgroundStyle = (feature, serviceId, isColorOpen) => {
    if (!feature.hasColorOptions || !isColorOpen) return {};

    const selectedColorImage = getSelectedColorImage(feature, serviceId);
    if (!selectedColorImage) return {};

    return {
      backgroundImage: `url(${selectedColorImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll'
    };
  };

  const isColorOptionsOpen = (feature, serviceId) => {
    const featureKey = `${serviceId}-${feature.name}`;
    return showColorOptions[featureKey];
  };

 // Updated JSX structure with new class names
// Replace the existing JSX in your ServicesSection component with these updated class names:

return (
  <section
    ref={servicesRef}
    className={`customization-services-section ${servicesVisible ? 'animate-in' : 'animate-out'}`}
  >
    {/* Background Pattern */}
    <div className="customization-services-bg-pattern" />

    <div className="customization-services-container">
      {/* Section Header */}
      <div className="customization-services-header">
        {/* <div className="customization-services-badge">
          Customization Services
        </div> */}
        <h2 className="customization-services-title">
          Tailored <span className="customization-services-title-highlight">Elevator Solutions</span><br />
          Built for Your Vision
        </h2>
        <p className="customization-services-description">
          Experience complete customization control. From luxurious finishes to smart technology integration,
          every detail is crafted to match your unique requirements and aesthetic preferences.
        </p>
      </div>

      {/* Main Interactive Section */}
      <div className="customization-services-main">
        {/* Left - Service Navigation */}
        <div className="customization-services-nav">
          <h3 className="customization-services-nav-title">
            Customizations
          </h3>
          <div className="customization-services-nav-list">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`customization-service-nav-item ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="customization-service-nav-icon">
                  {service.icon}
                </div>
                <div className="customization-service-nav-content">
                  <h4 className="customization-service-nav-title">
                    {service.title}
                  </h4>
                  <p className="customization-service-nav-subtitle">
                    {service.subtitle}
                  </p>
                </div>
                <div className="customization-service-nav-arrow">
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Service Details */}
        <div className="customization-service-details">
          <div className="customization-service-image-container">
            <img
              src={currentService?.image}
              alt={currentService?.title || 'Service'}
              className="customization-service-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.display = 'flex';
                e.target.parentElement.style.alignItems = 'center';
                e.target.parentElement.style.justifyContent = 'center';
                e.target.parentElement.innerHTML = '<div style="color: #666; font-size: 1rem;">Service Image</div>';
              }}
            />
            <div className="customization-service-image-overlay" />
            <div className="customization-service-image-badge">
              <Star size={16} />
              <span>{currentService?.highlight || 'Premium'}</span>
            </div>
          </div>

          <div className="customization-service-details-card">
            <div className="customization-service-details-header">
              <div className="customization-service-details-icon">
                {currentService?.icon}
              </div>
              <div>
                <h3 className="customization-service-details-title">
                  {currentService?.title || 'Service Title'}
                </h3>
                <p className="customization-service-details-subtitle">
                  {currentService?.subtitle || 'Service subtitle'}
                </p>
              </div>
            </div>

            <p className="customization-service-details-description">
              {currentService?.description || 'Service description goes here.'}
            </p>

            <div className="customization-features-section">
              <h4 className="customization-features-title">
                Available Options:
              </h4>
              <div className="customization-features-grid">
                {(currentService?.features || []).map((feature, index) => {
                  const featureKey = `${currentService.id}-${feature.name}`;
                  const isColorOpen = isColorOptionsOpen(feature, currentService.id);
                  const selectedColorImage = getSelectedColorImage(feature, currentService.id);
                  
                  return (
                    <div 
                      key={index} 
                      className={`customization-feature-card ${feature.hasColorOptions ? 'has-color-options' : ''} ${isColorOpen ? 'color-options-open' : ''} ${selectedColorImage && isColorOpen ? 'with-background' : ''}`}
                      onClick={() => handleFeatureClick(feature, currentService.id)}
                      style={getBackgroundStyle(feature, currentService.id, isColorOpen)}
                    >
                      {/* Main Feature Image or Color Options */}
                      {!isColorOpen ? (
                        <>
                          <img 
                            src={feature.image} 
                            alt={feature.name}
                            className="customization-feature-image"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.style.display = 'flex';
                              e.target.parentElement.style.alignItems = 'center';
                              e.target.parentElement.style.justifyContent = 'center';
                              e.target.parentElement.innerHTML = `<div style="color: #666; font-size: 0.9rem; text-align: center;">${feature.name}</div>`;
                            }}
                          />
                          <div className="customization-feature-overlay">
                            <span className="customization-feature-name">
                              {feature.name}
                              {feature.hasColorOptions && (
                                <span className="customization-feature-color-hint">
                                  Click for colors
                                </span>
                              )}
                            </span>
                          </div>
                          {feature.hasColorOptions && (
                            <div className="customization-feature-color-count">
                              {feature.colorOptions?.length || 6}
                            </div>
                          )}
                        </>
                      ) : (
                        /* Color Options Grid */
                        <div className="customization-color-options-container">
                          <div className="customization-color-options-title">
                            Steel Colors
                          </div>
                          <div className="customization-color-options-grid">
                            {(feature.colorOptions || []).map((color, colorIndex) => {
                              const isSelected = selectedColors[featureKey] === color.name;
                              
                              return (
                                <div
                                  key={colorIndex}
                                  className={`customization-color-option ${isSelected ? 'selected' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleColorSelect(color.name, feature, currentService.id);
                                  }}
                                >
                                  <div className="customization-color-swatch">
                                    <img
                                      src={color.image}
                                      alt={`${color.name} Steel`}
                                      className="customization-color-swatch-image"
                                      onError={(e) => {
                                        // Fallback to gradient if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = color.gradient;
                                      }}
                                    />
                                    {isSelected && (
                                      <div className="customization-color-selected-indicator">
                                        ✓
                                      </div>
                                    )}
                                  </div>
                                  <span className="customization-color-name">
                                    {color.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="customization-color-selection-info">
                            <div className="customization-color-selection-label">
                              Selected: <span className="customization-color-selection-value">{selectedColors[featureKey] || 'Silver'}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default ServicesSection;