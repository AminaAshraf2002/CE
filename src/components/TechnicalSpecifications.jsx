import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Zap, Shield, Settings, Award, Check, Info, Star, Building } from 'lucide-react';

const TechnicalSpecifications = () => {
  const [selectedModel, setSelectedModel] = useState('grandeur');
  const [expandedSection, setExpandedSection] = useState('configuration');
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  const models = {
    grandeur: {
      name: "Capricorn Grandeur 6+2",
      type: "MRL Gearless - Rope Driven",
      description: "Premium elevator solution with advanced features and luxury finishes",
      badge: "Premium"
    },
    comfort: {
      name: "Capricorn Comfort 4+1", 
      type: "Hydraulic - Oil Driven",
      description: "Reliable and smooth operation with customizable interior options",
      badge: "Popular"
    },
    essential: {
      name: "Capricorn Essential 3+1",
      type: "MRL Traction - Energy Efficient", 
      description: "Cost-effective solution with essential safety features",
      badge: "Essential"
    }
  };

  const specifications = {
    grandeur: {
      configuration: {
        title: "Detailed Configuration",
        icon: <Settings size={20} />,
        specs: [
          { label: "Model", value: "Capricorn Grandeur" },
          { label: "Quantity", value: "1" },
          { label: "No of Stops", value: "5 Stops" },
          { label: "Elevator Type", value: "MRL Gearless - Rope Driven" },
          { label: "Rated Load", value: "408 kg / 6 Pax" },
          { label: "Maximum Speed", value: "Upto 1 m/s" },
          { label: "Travel Height", value: "6000 mm" },
          { label: "Drive System", value: "AC VVVF (Variable Voltage Variable Frequency)" },
          { label: "Control System", value: "Microprocessor-based fully automatic control" }
        ]
      },
      cabin: {
        title: "Cabin Specifications", 
        icon: <Award size={20} />,
        specs: [
          { label: "Cabin Walls", value: "SS 304 Silver Hairline & Rose Gold Glossy finish. Integrated LED strips enhance aesthetics." },
          { label: "Cabin Doors", value: "SS 304 Rose Gold Full Vision Tinted Glass" },
          { label: "Door Type", value: "Automatic Sliding, Centre Opening" },
          { label: "Door Opening", value: "700 mm x 2000 mm" },
          { label: "COP & LOP", value: "Touch Sensitive - Feather touch" },
          { label: "Cabin Ceiling", value: "SS 304 frame false ceiling with Acrylic Lighting & Blower" },
          { label: "Cabin Floor", value: "Provision for Marble/Granite (by client)" },
          { label: "Handrails", value: "1 No." }
        ]
      },
      safety: {
        title: "Safety & Emergency Features",
        icon: <Shield size={20} />,
        specs: [
          { label: "Emergency Stop Button", value: "Instantly halts the lift in case of an emergency" },
          { label: "Emergency Alarm", value: "Alerts building occupants in case of distress" },
          { label: "Emergency Light", value: "Ensures illumination during power failures" },
          { label: "Auto Rescue Device (ARD)", value: "Automatically moves the lift to the nearest floor in case of power failure" },
          { label: "Over-Speed Governor", value: "Prevents the lift from exceeding safe speeds" },
          { label: "Overload Sensor", value: "Detects excess weight and prevents operation" },
          { label: "Anti-Fall Protection", value: "Prevents free fall in case of system failure" },
          { label: "Buffer System", value: "Ensures controlled and cushioned landing" },
          { label: "Fireman Control Mode", value: "Dedicated emergency mode for firefighters" }
        ]
      },
      comfort: {
        title: "Ride Quality & Passenger Comfort",
        icon: <Zap size={20} />,
        specs: [
          { label: "Door Safety & Accessibility", value: "Infrared Door Sensors prevent accidental closures" },
          { label: "Door Interlocks", value: "Ensures doors remain locked unless the lift is at a safe stop" },
          { label: "Soft Close Door Mechanism", value: "Smooth and silent door operation for enhanced durability" },
          { label: "Dual Safety Doors", value: "Additional layer of protection for passengers" },
          { label: "Smooth Takeoff & Landing", value: "Eliminates jerks for a seamless ride experience" },
          { label: "Advanced Suspension System", value: "Enhances stability and ride comfort" },
          { label: "Blower Fan in Car", value: "Ensures continuous ventilation for a comfortable ride" },
          { label: "Noise & Vibration Reduction", value: "Optimized design for a quiet operation" }
        ]
      },
      smart: {
        title: "Control & Smart Features", 
        icon: <Info size={20} />,
        specs: [
          { label: "Advanced Control Panel", value: "User-friendly interface for effortless operation" },
          { label: "Voice Announcements", value: "Provides clear floor indications for user convenience" },
          { label: "Intercom System", value: "Direct communication with security or building staff" },
          { label: "Anti-Nuisance Feature", value: "Prevents excessive button pressing from disrupting operation" },
          { label: "Maintenance Mode", value: "Allows technicians to perform safe servicing" },
          { label: "Soft Start & Stop System", value: "Ensures gradual acceleration and deceleration for a premium experience" },
          { label: "CCTV & Music System Wiring", value: "Additional cores in the travelling cable for future enhancements" }
        ]
      }
    },
    comfort: {
      configuration: {
        title: "Detailed Configuration",
        icon: <Settings size={20} />,
        specs: [
          { label: "Model", value: "Capricorn Comfort" },
          { label: "Quantity", value: "1" },
          { label: "No of Stops", value: "4 Stops" },
          { label: "Elevator Type", value: "Hydraulic - Oil Driven" },
          { label: "Rated Load", value: "320 kg / 4 Pax" },
          { label: "Maximum Speed", value: "Upto 0.6 m/s" },
          { label: "Travel Height", value: "4500 mm" },
          { label: "Drive System", value: "Hydraulic with Variable Speed Control" },
          { label: "Control System", value: "Microprocessor-based automatic control" }
        ]
      },
      cabin: {
        title: "Cabin Specifications",
        icon: <Award size={20} />,
        specs: [
          { label: "Cabin Walls", value: "SS 304 Hairline finish with decorative LED accent strips" },
          { label: "Cabin Doors", value: "SS 304 Hairline with Clear Glass Panel" },
          { label: "Door Type", value: "Automatic Sliding, Centre Opening" },
          { label: "Door Opening", value: "650 mm x 2000 mm" },
          { label: "COP & LOP", value: "Push Button - Premium Quality" },
          { label: "Cabin Ceiling", value: "SS 304 frame with LED Panel Lighting" },
          { label: "Cabin Floor", value: "Provision for Marble/Granite (by client)" },
          { label: "Handrails", value: "1 No." }
        ]
      },
      safety: {
        title: "Safety & Emergency Features",
        icon: <Shield size={20} />,
        specs: [
          { label: "Emergency Stop Button", value: "Manual emergency stop functionality" },
          { label: "Emergency Alarm", value: "Audio alarm system for emergency situations" },
          { label: "Emergency Light", value: "Battery backup lighting system" },
          { label: "Overload Sensor", value: "Weight detection and prevention system" },
          { label: "Door Safety Sensors", value: "Infrared obstruction detection" },
          { label: "Manual Lowering", value: "Emergency manual operation capability" },
          { label: "Safety Valve", value: "Hydraulic pressure relief system" },
          { label: "Emergency Phone", value: "Direct communication line for emergencies" }
        ]
      },
      comfort: {
        title: "Ride Quality & Passenger Comfort",
        icon: <Zap size={20} />,
        specs: [
          { label: "Smooth Operation", value: "Hydraulic system ensures quiet and smooth rides" },
          { label: "Leveling Accuracy", value: "Precise floor alignment for safety" },
          { label: "Ventilation System", value: "Adequate air circulation in cabin" },
          { label: "Interior Lighting", value: "LED lighting for energy efficiency" },
          { label: "Sound Dampening", value: "Noise reduction materials for quiet operation" },
          { label: "Anti-Vibration Mounts", value: "Reduced mechanical vibration" }
        ]
      },
      smart: {
        title: "Control & Smart Features",
        icon: <Info size={20} />,
        specs: [
          { label: "Digital Display", value: "Floor indication and status display" },
          { label: "Call Registration", value: "Visual feedback for registered calls" },
          { label: "Door Hold Function", value: "Extended door open time when needed" },
          { label: "Independent Service", value: "Maintenance mode operation" },
          { label: "Load Bypass", value: "Full load automatic bypass" },
          { label: "Fire Service", value: "Emergency fire service operation" }
        ]
      }
    },
    essential: {
      configuration: {
        title: "Detailed Configuration",
        icon: <Settings size={20} />,
        specs: [
          { label: "Model", value: "Capricorn Essential" },
          { label: "Quantity", value: "1" },
          { label: "No of Stops", value: "3 Stops" },
          { label: "Elevator Type", value: "MRL Traction - Energy Efficient" },
          { label: "Rated Load", value: "272 kg / 3 Pax" },
          { label: "Maximum Speed", value: "Upto 0.5 m/s" },
          { label: "Travel Height", value: "3000 mm" },
          { label: "Drive System", value: "AC Motor with Variable Frequency Drive" },
          { label: "Control System", value: "Microprocessor-based control" }
        ]
      },
      cabin: {
        title: "Cabin Specifications",
        icon: <Award size={20} />,
        specs: [
          { label: "Cabin Walls", value: "SS 304 Hairline finish" },
          { label: "Cabin Doors", value: "SS 304 Hairline finish" },
          { label: "Door Type", value: "Automatic Sliding, Centre Opening" },
          { label: "Door Opening", value: "600 mm x 2000 mm" },
          { label: "COP & LOP", value: "Push Button - Standard Quality" },
          { label: "Cabin Ceiling", value: "Standard frame with LED Lighting" },
          { label: "Cabin Floor", value: "Provision for flooring (by client)" },
          { label: "Handrails", value: "1 No." }
        ]
      },
      safety: {
        title: "Safety & Emergency Features",
        icon: <Shield size={20} />,
        specs: [
          { label: "Emergency Stop Button", value: "Standard emergency stop" },
          { label: "Emergency Alarm", value: "Basic alarm system" },
          { label: "Emergency Light", value: "LED emergency lighting" },
          { label: "Overload Protection", value: "Basic weight detection" },
          { label: "Door Safety", value: "Standard door protection" },
          { label: "Over-Speed Protection", value: "Basic speed monitoring" },
          { label: "Final Limit Switches", value: "Travel limit protection" }
        ]
      },
      comfort: {
        title: "Ride Quality & Passenger Comfort",
        icon: <Zap size={20} />,
        specs: [
          { label: "Smooth Start/Stop", value: "Basic acceleration control" },
          { label: "Noise Control", value: "Standard noise levels" },
          { label: "Ventilation", value: "Natural ventilation provision" },
          { label: "Interior Finish", value: "Standard interior options" },
          { label: "Leveling", value: "Manual leveling adjustment" }
        ]
      },
      smart: {
        title: "Control & Smart Features",
        icon: <Info size={20} />,
        specs: [
          { label: "Basic Controls", value: "Standard up/down operation" },
          { label: "Floor Indication", value: "Simple floor display" },
          { label: "Door Controls", value: "Basic door open/close" },
          { label: "Service Mode", value: "Basic maintenance operation" }
        ]
      }
    }
  };

  const currentSpecs = specifications[selectedModel];
  const currentModel = models[selectedModel];

  return (
    <section 
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #1b1b1b 0%, #1f1f1f 50%, #1c1c1c 100%)',
        color: 'white',
        padding: '65px 0',
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(212, 179, 71, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(212, 179, 71, 0.02) 0%, transparent 50%)
        `,
        opacity: 0.6
      }} />
      
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 1.8rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '7px 18px',
            background: 'rgba(212, 179, 71, 0.12)',
            border: '1px solid rgba(212, 179, 71, 0.3)',
            borderRadius: '22px',
            fontSize: '0.65rem',
            fontWeight: '600',
            color: '#d4b347',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}>
            Technical Excellence
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.2',
            marginBottom: '13px'
          }}>
            Detailed <span style={{ color: '#d4b347', fontWeight: '800' }}>Technical Specifications</span>
          </h2>
          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '650px',
            margin: '0 auto'
          }}>
            Comprehensive technical details and specifications for our premium elevator models. 
            Choose a model to explore its complete feature set and capabilities.
          </p>
        </div>

        {/* Model Selection */}
        <div style={{ marginBottom: '45px' }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.35rem',
            fontWeight: '600',
            color: '#d4b347',
            textAlign: 'center',
            marginBottom: '25px'
          }}>
            Select Elevator Model
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '20px',
            maxWidth: '950px',
            margin: '0 auto'
          }}>
            {Object.entries(models).map(([key, model]) => (
              <div 
                key={key}
                style={{
                  background: selectedModel === key 
                    ? 'linear-gradient(135deg, rgba(212, 179, 71, 0.12), rgba(240, 212, 130, 0.08))'
                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.8))',
                  border: selectedModel === key ? '2px solid #d4b347' : '2px solid rgba(212, 179, 71, 0.2)',
                  borderRadius: '13px',
                  padding: '22px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: selectedModel === key ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: selectedModel === key ? '0 8px 20px rgba(212, 179, 71, 0.15)' : 'none'
                }}
                onClick={() => setSelectedModel(key)}
                onMouseEnter={(e) => {
                  if (selectedModel !== key) {
                    e.target.style.borderColor = 'rgba(212, 179, 71, 0.4)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedModel !== key) {
                    e.target.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '13px',
                  right: '13px',
                  background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                  color: '#000',
                  padding: '3px 10px',
                  borderRadius: '10px',
                  fontSize: '0.6rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {model.badge}
                </div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#d4b347',
                    marginBottom: '7px'
                  }}>
                    {model.name}
                  </h4>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'rgba(212, 179, 71, 0.8)',
                    fontWeight: '500',
                    marginBottom: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {model.type}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5'
                  }}>
                    {model.description}
                  </p>
                </div>
                {selectedModel === key && (
                  <div style={{
                    position: 'absolute',
                    bottom: '13px',
                    right: '13px',
                    width: '26px',
                    height: '26px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Check size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Model Display */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8))',
          border: '2px solid rgba(212, 179, 71, 0.25)',
          borderRadius: '18px',
          padding: '26px',
          marginBottom: '35px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '18px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#d4b347',
                marginBottom: '7px'
              }}>
                {currentModel.name}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(212, 179, 71, 0.8)',
                fontWeight: '500',
                marginBottom: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {currentModel.type}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6'
              }}>
                {currentModel.description}
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              background: 'linear-gradient(135deg, #d4b347, #f0d482)',
              color: '#000',
              padding: '9px 18px',
              borderRadius: '22px',
              fontSize: '0.8rem',
              fontWeight: '600',
              flexShrink: 0
            }}>
              <Star size={14} />
              <span>{currentModel.badge} Model</span>
            </div>
          </div>
        </div>

        {/* Specifications Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 1024 ? '270px 1fr' : '1fr',
          gap: '35px',
          marginBottom: '45px'
        }}>
          {/* Navigation */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.7))',
            border: '2px solid rgba(212, 179, 71, 0.2)',
            borderRadius: '13px',
            padding: '22px',
            height: 'fit-content'
          }}>
            <h4 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#d4b347',
              marginBottom: '18px',
              textAlign: 'center'
            }}>
              Specification Categories
            </h4>
            {Object.entries(currentSpecs).map(([key, section]) => (
              <button
                key={key}
                style={{
                  width: '100%',
                  background: expandedSection === key 
                    ? 'linear-gradient(135deg, rgba(212, 179, 71, 0.15), rgba(240, 212, 130, 0.08))'
                    : 'rgba(0, 0, 0, 0.3)',
                  border: expandedSection === key ? '1px solid #d4b347' : '1px solid rgba(212, 179, 71, 0.2)',
                  borderRadius: '9px',
                  padding: '13px',
                  marginBottom: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: expandedSection === key ? 'white' : 'rgba(255, 255, 255, 0.8)'
                }}
                onClick={() => setExpandedSection(key)}
                onMouseEnter={(e) => {
                  if (expandedSection !== key) {
                    e.target.style.background = 'rgba(212, 179, 71, 0.08)';
                    e.target.style.borderColor = 'rgba(212, 179, 71, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedSection !== key) {
                    e.target.style.background = 'rgba(0, 0, 0, 0.3)';
                    e.target.style.borderColor = 'rgba(212, 179, 71, 0.2)';
                  }
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  color: '#d4b347',
                  flexShrink: 0
                }}>
                  {section.icon}
                </div>
                <span style={{
                  flex: 1,
                  fontSize: '0.83rem',
                  fontWeight: '500',
                  textAlign: 'left'
                }}>
                  {section.title}
                </span>
                <ChevronRight 
                  size={14} 
                  style={{
                    color: 'rgba(212, 179, 71, 0.6)',
                    transform: expandedSection === key ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}
                />
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8))',
            border: '2px solid rgba(212, 179, 71, 0.25)',
            borderRadius: '18px',
            padding: '26px',
            minHeight: '520px'
          }}>
            {currentSpecs[expandedSection] && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '13px',
                  marginBottom: '26px',
                  paddingBottom: '13px',
                  borderBottom: '2px solid rgba(212, 179, 71, 0.15)'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    flexShrink: 0
                  }}>
                    {currentSpecs[expandedSection].icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#d4b347',
                    margin: 0
                  }}>
                    {currentSpecs[expandedSection].title}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '13px'
                }}>
                  {currentSpecs[expandedSection].specs.map((spec, index) => (
                    <div key={index} style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(212, 179, 71, 0.15)',
                      borderRadius: '9px',
                      padding: '18px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(212, 179, 71, 0.05)';
                      e.target.style.borderColor = 'rgba(212, 179, 71, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.4)';
                      e.target.style.borderColor = 'rgba(212, 179, 71, 0.15)';
                    }}
                    >
                      <div style={{
                        fontSize: '0.83rem',
                        fontWeight: '600',
                        color: '#f0d482',
                        marginBottom: '7px',
                        display: 'block'
                      }}>
                        {spec.label}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.5'
                      }}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 179, 71, 0.08), rgba(240, 212, 130, 0.04))',
          border: '2px solid rgba(212, 179, 71, 0.25)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#d4b347',
              marginBottom: '10px'
            }}>
              Ready to Experience Excellence?
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '25px',
              lineHeight: '1.6'
            }}>
              Get detailed quotation and customization options for your selected elevator model
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 25px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                background: 'linear-gradient(135deg, #d4b347, #f0d482)',
                color: '#000',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 15px rgba(212, 179, 71, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              >
                <Building size={16} />
                Request Quote
              </button>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 25px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#d4b347',
                border: '2px solid rgba(212, 179, 71, 0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(212, 179, 71, 0.08)';
                e.target.style.borderColor = '#d4b347';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 15px rgba(212, 179, 71, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(212, 179, 71, 0.6)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              >
                <Info size={16} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecifications;