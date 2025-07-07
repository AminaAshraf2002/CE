import React, { useState, useEffect, useRef } from 'react';
import { Building, Home, Zap, Settings, Shield, CheckCircle, Star, Award, Users, Eye } from 'lucide-react';

// Import elevator images for WITH SHAFT
import withShaft1 from '../assets/5.jpg';
import withShaft2 from '../assets/2-1.jpg';
import withShaft3 from '../assets/with1.jpeg';
import withShaft4 from '../assets/with.jpg';

// Import elevator images for WITHOUT SHAFT
import withoutShaft1 from '../assets/without.jpg';
import withoutShaft2 from '../assets/out.jpeg';
import withoutShaft3 from '../assets/out1.jpeg';
import withoutShaft4 from '../assets/out3.jpeg';

import './ShaftSelection.css';

const ShaftSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Separate image arrays for different options
  const withShaftImages = [
    {
      src: withShaft1
     
    },
    {
      src: withShaft2
   
    },
    {
      src: withShaft3
    },
    {
      src: withShaft4
    }
  ];

  const withoutShaftImages = [
    {
      src: withoutShaft1
    },
    {
      src: withoutShaft2
    },
    {
      src: withoutShaft3
    },
    {
      src: withoutShaft4
    }
  ];

  // Get current images based on selected option
  const getCurrentImages = () => {
    if (selectedOption === 'with-shaft') return withShaftImages;
    if (selectedOption === 'without-shaft') return withoutShaftImages;
    return [];
  };

  const currentImages = getCurrentImages();

  const withShaftFeatures = [
    {
      icon: <Building size={24} />,
      title: 'Upto G+15 Floor',
      description: 'Suitable for high-rise buildings with multi-floor capacity'
    },
    {
      icon: <Users size={24} />,
      title: 'Upto 24 Passenger Capacity',
      description: 'High capacity elevators for busy commercial and residential buildings'
    },
    {
      icon: <Settings size={24} />,
      title: 'Customisable Cabin Size',
      description: 'Tailor-made cabin dimensions to fit your specific requirements'
    },
    {
      icon: <Star size={24} />,
      title: 'Tailor Made Designs',
      description: 'Bespoke elevator designs crafted to match your architectural vision'
    }
  ];

  const withoutShaftFeatures = [
    {
      icon: <Eye size={24} />,
      title: '3 Sides View Panoramic Glass Shaft',
      description: 'Stunning 360-degree views with transparent glass shaft construction'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'No Pit Required',
      description: 'Easy installation without the need for excavation or pit construction'
    },
    {
      icon: <Zap size={24} />,
      title: 'Minimum Overhead Space of Only 2.8m',
      description: 'Compact design requiring minimal ceiling height clearance'
    },
    {
      icon: <Home size={24} />,
      title: 'Upto G+4',
      description: 'Perfect for low to mid-rise buildings up to 4 floors above ground'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`shaft-selection-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="shaft-bg-pattern" />
      
      <div className="shaft-container">
        {/* Section Header */}
        <div className="shaft-header">
          <div className="shaft-badge">Do you have Shaft?</div>
          <h2 className="shaft-title">
            Build With or <span className="highlight">Without Shaft</span>
          </h2>
          {/* <p className="shaft-subtitle">
            Select your preferred installation type and explore our premium elevator solutions
          </p> */}
        </div>

        {/* Main Selection Tabs */}
        <div className="selection-tabs">
          <div 
            className={`selection-tab ${selectedOption === 'with-shaft' ? 'active' : ''}`}
            onClick={() => setSelectedOption('with-shaft')}
          >
            <div className="tab-icon">
              <Building size={32} />
            </div>
            <h3 className="tab-title">With Shaft</h3>
          </div>

          <div 
            className={`selection-tab ${selectedOption === 'without-shaft' ? 'active' : ''}`}
            onClick={() => setSelectedOption('without-shaft')}
          >
            <div className="tab-icon">
              <Home size={32} />
            </div>
            <h3 className="tab-title">Without Shaft</h3>
          </div>
        </div>

        {/* Content Based on Selection */}
        {selectedOption && (
          <div className="selection-content">
            {/* Image Cards Grid - No Slider */}
            <div className="image-cards-container">
              
              
              <div className="image-cards-grid">
                {currentImages.map((elevator, index) => (
                  <div key={index} className="image-card">
                    <img 
                      src={elevator.src} 
                      alt={elevator.title}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/2a2a2a/d4b347?text=${elevator.title}`;
                      }}
                    />
                    <div className="card-overlay">
                      <h4>{elevator.title}</h4>
                      <p>{elevator.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid with Icons on Top Center */}
            <div className="features-section">
              <h3 className="features-title">Key Features</h3>
              <div className="features-grid-top-icons">
                {(selectedOption === 'with-shaft' ? withShaftFeatures : withoutShaftFeatures).map((feature, index) => (
                  <div key={index} className="feature-card-top-icon">
                    <div className="feature-icon-top">
                      {feature.icon}
                    </div>
                    <div className="feature-content-center">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShaftSelection;