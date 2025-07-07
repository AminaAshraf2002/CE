import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Zap, Shield, Settings, Award, Info, Star, Building } from 'lucide-react';
import './TechnicalSpecifications.css';

const TechnicalSpecifications = () => {
  const [expandedSection, setExpandedSection] = useState('configuration');
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  // Direct specifications without model selection

  const specifications = {
    configuration: {
      title: "Detailed Configuration",
      icon: <Settings size={20} />,
      specs: [
        { label: "Design", value: "Tailor Made" },
        { label: "Elevator Type", value: "MRL Gearless Traction Rope Driven" },
        { label: "No of Stops", value: "Upto G+15" },
        { label: "Rated Load", value: "Upto 24 Pax / 1632 kg" },
        { label: "Maximum Speed", value: "Upto 2 m/s" },
        { label: "Minimum Floor Height", value: "2.4 m" },
        { label: "Drive System", value: "AC VVVF (Variable Voltage Variable Frequency)" },
        { label: "Control System", value: "Microprocessor-based fully automatic control" }
      ]
    },
    cabin: {
      title: "Cabin Specifications", 
      icon: <Award size={20} />,
      specs: [
        { label: "Interior Walls", value: "Premium stainless steel with elegant silver and rose gold finish, LED lighting strips for modern look" },
        { label: "Cabin Doors", value: "Beautiful glass doors with rose gold frame for a luxurious appearance" },
        { label: "Door Operation", value: "Automatic doors that open from the center for easy access" },
        { label: "Door Size", value: "Wide opening of 700mm x 2000mm for comfortable entry and exit" },
        { label: "Control Buttons", value: "Modern touch-sensitive buttons that respond to gentle touch" },
        { label: "Ceiling Design", value: "Stylish false ceiling with bright LED lights and ventilation fan" },
        { label: "Floor Finish", value: "Ready for your choice of marble or granite flooring" },
        { label: "Safety Handrail", value: "One handrail provided for passenger support and safety" }
      ]
    },
    safety: {
      title: "Safety Standards & Compliance",
      icon: <Shield size={20} />,
      specs: [
        { label: "International Safety Standards", value: "Meets European (EN), American (ASME), and International (ISO) safety requirements for maximum protection" },
        { label: "Global Certification", value: "CE certified ensuring compliance with worldwide health, safety, and environmental standards" },
        { label: "Emergency Stop", value: "Red emergency button instantly stops the elevator in any dangerous situation" },
        { label: "Emergency Communication", value: "Built-in alarm system to call for help during emergencies" },
        { label: "Emergency Lighting", value: "Automatic backup lights turn on during power failures for passenger safety" },
        { label: "Power Failure Protection", value: "Backup system automatically brings elevator to nearest floor during power cuts" },
        { label: "Speed Safety Control", value: "Automatic system prevents elevator from going too fast for passenger safety" },
        { label: "Weight Protection", value: "Smart sensor detects overloading and prevents operation until weight is reduced" },
        { label: "Fall Prevention", value: "Multiple safety systems prevent elevator from falling even if cables break" },
        { label: "Smooth Landing System", value: "Special buffers ensure gentle stops and prevent hard impacts" },
        { label: "Fire Safety Mode", value: "Special emergency mode allows firefighters to control elevator during emergencies" }
      ]
    },
    comfort: {
      title: "Ride Quality & Passenger Comfort",
      icon: <Zap size={20} />,
      specs: [
        { label: "Smart Door Safety", value: "Invisible sensors prevent doors from closing if someone is in the way" },
        { label: "Secure Door Locks", value: "Doors automatically lock and only open when elevator stops safely at floors" },
        { label: "Quiet Door Operation", value: "Doors open and close smoothly without noise for peaceful rides" },
        { label: "Double Door Protection", value: "Two-layer door system provides extra safety for all passengers" },
        { label: "Smooth Start & Stop", value: "No jerky movements - elevator starts and stops gently like a luxury car" },
        { label: "Stable Ride System", value: "Advanced technology ensures steady, comfortable rides without shaking" },
        { label: "Fresh Air Circulation", value: "Built-in fan keeps air fresh and comfortable inside the cabin" },
        { label: "Silent Operation", value: "Specially designed to run quietly without disturbing building occupants" }
      ]
    },
    smart: {
      title: "Control & Smart Features", 
      icon: <Info size={20} />,
      specs: [
        { label: "Easy Control Panel", value: "Simple, user-friendly buttons that anyone can operate without confusion" },
        { label: "Voice Announcements", value: "Clear voice tells you which floor you're on and where you're going" },
        { label: "Emergency Communication", value: "Direct phone line to building security or management for help" },
        { label: "Smart Button Protection", value: "Prevents mischievous button pressing that could disrupt normal operation" },
        { label: "Maintenance Mode", value: "Special mode allows technicians to safely service the elevator" },
        { label: "Gentle Movement System", value: "Elevator accelerates and slows down gradually for maximum comfort" },
        { label: "Future-Ready Wiring", value: "Pre-installed cables for adding security cameras or music system later" }
      ]
    }
  };

  return (
    <section ref={sectionRef} className="tech-specs-section">
      {/* Background Pattern */}
      <div className="tech-specs-bg-pattern" />
      
      <div className="tech-specs-container">
        {/* Section Header */}
        <div className="tech-specs-header">
          <div className="tech-specs-badge">
            Detailed Confirmation
          </div>
          <h2 className="tech-specs-title">
            Technical <span className="highlight">Specifications</span>
          </h2>
          <p className="tech-specs-subtitle">
            Comprehensive technical details and specifications for our premium elevator solutions. 
            Explore the complete feature set and capabilities.
          </p>
        </div>

        {/* Specifications Display */}
        <div className="specs-layout">
          {/* Navigation */}
          <div className="specs-navigation">
            <h4 className="nav-title">Specification Categories</h4>
            {Object.entries(specifications).map(([key, section]) => (
              <button
                key={key}
                className={`nav-button ${expandedSection === key ? 'active' : ''}`}
                onClick={() => setExpandedSection(key)}
              >
                <div className="nav-icon">
                  {section.icon}
                </div>
                <span className="nav-text">{section.title}</span>
                <ChevronRight 
                  size={14} 
                  className={`nav-arrow ${expandedSection === key ? 'expanded' : ''}`}
                />
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="specs-content">
            {specifications[expandedSection] && (
              <div className="content-wrapper">
                <div className="content-header">
                  <div className="content-icon">
                    {specifications[expandedSection].icon}
                  </div>
                  <h3 className="content-title">
                    {specifications[expandedSection].title}
                  </h3>
                </div>

                <div className="specs-grid">
                  {specifications[expandedSection].specs.map((spec, index) => (
                    <div key={index} className="spec-item">
                      <div className="spec-label">{spec.label}</div>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Experience Excellence?</h3>
            <p className="cta-description">
              Get detailed quotation and customization options for our elevator solutions
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <Building size={16} />
                Request Quote
              </button>
              <button className="cta-btn secondary">
                <Info size={16} />
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TechnicalSpecifications;