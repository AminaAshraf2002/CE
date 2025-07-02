import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight, CheckCircle, Building, Home, Zap, Settings, Shield } from 'lucide-react';
import './ShaftSelectionSection.css';

const ShaftSelectionSection = () => {
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

  const elevatorOptions = {
    yes: {
      title: "Traditional Elevator Solutions",
      subtitle: "Perfect for existing shafts with full customization",
      options: [
        {
          id: 'hydraulic',
          title: 'Hydraulic Elevator',
          description: 'Smooth, reliable operation with multiple door configurations and premium customization options.',
          features: [
            'Multiple door openings possible',
            'Silver, Gold, Rose Gold finishes',
            'Marble & wooden textures',
            'Custom ceiling with CE Logo',
            'Premium interior customization'
          ],
          icon: <Building size={32} />,
          image: '/api/placeholder/300/200'
        },
        {
          id: 'traction',
          title: 'Traction MRL Elevator',
          description: 'Energy-efficient machine room-less design with advanced control systems and luxury finishes.',
          features: [
            'No machine room required',
            'Energy efficient operation',
            'Smart control systems', 
            'Any color powder coating',
            'Advanced safety features'
          ],
          icon: <Zap size={32} />,
          image: '/api/placeholder/300/200'
        }
      ]
    },
    no: {
      title: "Shaft-Free Solutions",
      subtitle: "Innovative elevators with minimal structural requirements",
      options: [
        {
          id: 'structure',
          title: 'Elevator with Structure',
          description: 'Self-supporting elevator with integrated framework requiring minimal modifications.',
          features: [
            'No shaft required',
            'Self-supporting structure',
            'Head room: Only 2.8m required',
            'Pit: Just 15cm needed',
            'Quick 2-3 day installation'
          ],
          icon: <Shield size={32} />,
          image: '/api/placeholder/300/200'
        },
        {
          id: 'wall-mounted',
          title: 'Wall Mounted Elevator',
          description: 'Space-saving wall-mounted design with royal customization options.',
          features: [
            'Wall mounted design',
            'Minimal home modifications',
            'Same customization as traditional',
            'Royal finish options available',
            'Compact footprint'
          ],
          icon: <Home size={32} />,
          image: '/api/placeholder/300/200'
        }
      ]
    }
  };

  const services = {
    warranty: '2 years free AMC included',
    motorWarranty: 'Motor and corrosion warranty for 10 years',
    specifications: 'All current square lift specifications available'
  };

  return (
    <section 
      ref={sectionRef}
      className={`shaft-selection-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="shaft-bg-pattern" />
      
      <div className="shaft-container">
        {/* Section Header */}
        <div className="shaft-header">
          <div className="shaft-badge">Find Your Perfect Solution</div>
          <h2 className="shaft-title">
            Choose Your <span className="highlight">Elevator Type</span>
          </h2>
          <p className="shaft-subtitle">
            Let us guide you to the perfect elevator solution based on your specific requirements and space constraints.
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="flowchart-container">
          {/* Main Question */}
          <div className="question-box">
            <div className="question-icon">?</div>
            <h3 className="question-text">Do You Have a Shaft?</h3>
            <p className="question-subtext">
              This will help us recommend the perfect elevator solution for you
            </p>
          </div>

          {/* Arrow */}
          <div className="arrow-down">
            <ArrowDown size={40} />
          </div>

          {/* Yes/No Options */}
          <div className="options-container">
            {/* YES Option */}
            <div 
              className={`option-button ${selectedOption === 'yes' ? 'selected' : ''}`}
              onClick={() => setSelectedOption('yes')}
            >
              <div className="option-icon yes">
                <CheckCircle size={40} />
              </div>
              <h3 className="option-title yes">YES</h3>
              <p className="option-description">
                I have an existing shaft or space for traditional elevator installation
              </p>
            </div>

            {/* NO Option */}
            <div 
              className={`option-button ${selectedOption === 'no' ? 'selected' : ''}`}
              onClick={() => setSelectedOption('no')}
            >
              <div className="option-icon no">✕</div>
              <h3 className="option-title no">NO</h3>
              <p className="option-description">
                I need a shaft-free solution with minimal structural modifications
              </p>
            </div>
          </div>
        </div>

        {/* Selected Option Details */}
        {selectedOption && (
          <div className="selected-details">
            <div className="details-header">
              <h3 className="details-title">
                {elevatorOptions[selectedOption].title}
              </h3>
              <p className="details-subtitle">
                {elevatorOptions[selectedOption].subtitle}
              </p>
            </div>

            {/* Elevator Options Grid */}
            <div className="elevator-options-grid">
              {elevatorOptions[selectedOption].options.map((option) => (
                <div key={option.id} className="elevator-option-card">
                  <div className="card-header">
                    <div className="card-icon">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="card-title">{option.title}</h4>
                    </div>
                  </div>

                  <p className="card-description">{option.description}</p>

                  <div className="features-section">
                    <h5 className="features-title">Key Features:</h5>
                    <ul className="features-list">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <div className="feature-bullet" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  
                </div>
              ))}
            </div>

            {/* Services Info */}
            <div className="services-info">
              <h4 className="services-title">Included Services</h4>
              <div className="services-grid">
                <div className="service-item">
                  <p className="service-text">{services.warranty}</p>
                </div>
                <div className="service-item">
                  <p className="service-text">{services.motorWarranty}</p>
                </div>
                <div className="service-item">
                  <p className="service-text">{services.specifications}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShaftSelectionSection;