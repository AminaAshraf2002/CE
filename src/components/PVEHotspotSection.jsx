import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, Wrench, Zap, Star, Settings, ChevronRight } from 'lucide-react';
import './PVEHotspotSection.css';

// Import the elevator hotspot video - adjust path as needed
import elevatorHotspotVideo from '../assets/str.mp4';

// Import feature images - adjust paths as needed
import gearlessMotorImage from '../assets/motor.png';
import vvvfDriveImage from '../assets/advanced.png';
import ardSafelandImage from '../assets/ardc.png';
import smoothOperationImage from '../assets/effor.png';
import dampingSystemImage from '../assets/poly.png';
import speedGovernorImage from '../assets/overspeed.png';
import loadMonitoringImage from '../assets/overload.png';

const PVEHotspotSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [pveHotspotVisible, setPveHotspotVisible] = useState(false);
  const pveHotspotRef = useRef(null);
  const videoRef = useRef(null);

  // Hotspot data with exact features matching your content - arranged vertically
  const pveHotspots = [
    {
      id: 'gearless-motor',
      x: 85, // Fixed x position for vertical alignment
      y: 10, // Top
      icon: <Zap size={16} />,
      title: 'Gearless Motor Version 2',
      subtitle: 'Absolute Silence & Performance',
      description: 'Engineered for absolute silence and performance with advanced gearless technology for superior elevator operation.',
      features: ['Absolute Silence Operation', 'Enhanced Performance', 'Energy Efficient Design', 'Extended Lifespan'],
      specs: { 'Motor Type': 'Gearless V2', 'Noise Level': '< 40 dB', 'Efficiency': '96%+', 'Maintenance': 'Minimal' },
      image: gearlessMotorImage
    },
    {
      id: 'vvvf-drive',
      x: 85,
      y: 23,
      icon: <Settings size={16} />,
      title: 'VVVF Drive IntelliMotion',
      subtitle: 'Ultra-Smooth Performance',
      description: 'Our elevators use VVVF Drive IntelliMotion for ultra-smooth and energy-efficient performance with precise control.',
      features: ['Ultra-Smooth Operation', 'Energy Efficient', 'Precise Speed Control', 'Intelligent Motion'],
      specs: { 'Drive System': 'VVVF IntelliMotion', 'Energy Savings': '40%+', 'Speed Control': 'Variable', 'Smoothness': 'Premium' },
      image: vvvfDriveImage
    },
    {
      id: 'ard-safeland',
      x: 85,
      y: 36,
      icon: <Shield size={16} />,
      title: 'ARD SafeLand™',
      subtitle: 'Emergency Power Recovery',
      description: 'Equipped with ARD SafeLand™, the lift automatically moves to the nearest floor during power loss for passenger safety.',
      features: ['Automatic Rescue Operation', 'Power Loss Protection', 'Nearest Floor Landing', 'Emergency Battery Backup'],
      specs: { 'System': 'ARD SafeLand™', 'Response Time': '< 2 seconds', 'Backup Duration': '45 minutes', 'Safety Rating': 'EN 81-20' },
      image: ardSafelandImage
    },
    {
      id: 'smooth-operation',
      x: 85,
      y: 49,
      icon: <Star size={16} />,
      title: 'Effortless Take-off & Landing',
      subtitle: 'Smooth Operation',
      description: 'Experience effortless lift take-off and landing with advanced control systems for maximum passenger comfort.',
      features: ['Smooth Take-off', 'Gentle Landing', 'Jerk-Free Operation', 'Passenger Comfort'],
      specs: { 'Acceleration': '1.0 m/s²', 'Jerk Level': '< 0.5 m/s³', 'Comfort Level': 'Premium', 'Control': 'Advanced' },
      image: smoothOperationImage
    },
    {
      id: 'damping-system',
      x: 85,
      y: 62,
      icon: <Wrench size={16} />,
      title: 'Polyurethane Dampers',
      subtitle: 'Synchronized Damping',
      description: 'Advanced polyurethane dampers for synchronized damping provide superior ride comfort and vibration control.',
      features: ['Synchronized Damping', 'Vibration Control', 'Noise Reduction', 'Enhanced Comfort'],
      specs: { 'Material': 'Polyurethane', 'Damping Rate': '95%+', 'Vibration Reduction': '90%', 'Lifespan': '15+ years' },
      image: dampingSystemImage
    },
    {
      id: 'speed-governor',
      x: 85,
      y: 75,
      icon: <Shield size={16} />,
      title: 'Overspeed Governor System',
      subtitle: 'Rapid Lock Safety',
      description: 'Advanced overspeed governor system with rapid lock mechanism ensures maximum safety during operation.',
      features: ['Overspeed Protection', 'Rapid Lock Mechanism', 'Safety Brake System', 'Emergency Stop Function'],
      specs: { 'Governor Type': 'Rapid Lock', 'Response Time': '< 0.3 seconds', 'Safety Standard': 'EN 81-20/50', 'Lock Speed': '115% rated' },
      image: speedGovernorImage
    },
    {
      id: 'load-monitoring',
      x: 85,
      y: 88,
      icon: <Monitor size={16} />,
      title: 'Overload Sensor',
      subtitle: 'Real-time Load Monitoring',
      description: 'Intelligent overload sensor provides real-time load monitoring to ensure safe operation and prevent overloading.',
      features: ['Real-time Monitoring', 'Load Display', 'Overload Prevention', 'Weight Distribution Analysis'],
      specs: { 'Sensor Type': 'Load Cell', 'Accuracy': '±0.5%', 'Display': 'Digital', 'Max Load': '1000 kg' },
      image: loadMonitoringImage
    }
  ];

  const handlePveHotspotClick = (hotspotId) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  const handlePveHotspotEnter = (hotspotId) => {
    // Optional: You can still show preview on hover if desired
  };

  const handlePveHotspotLeave = () => {
    // Optional: Clear preview on hover leave if using hover preview
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPveHotspotVisible(true);
          // Auto-play video when section becomes visible
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (pveHotspotRef.current) {
      observer.observe(pveHotspotRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={pveHotspotRef} className="pve-hotspot-section">
      <div className="pve-bg-pattern" />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div className={`pve-section-header ${pveHotspotVisible ? 'visible' : ''}`}>
          <div className="pve-badge">Safety & Performance</div>
          <h2 className="pve-main-title">
            Advanced <span className="highlight">Safety Features</span><br />
            & Premium Performance
          </h2>
        
        </div>

        <div className={`pve-main-content ${pveHotspotVisible ? 'visible' : ''}`}>
          <div className="pve-elevator-section">
            <div className="pve-elevator-container">
              <video 
                ref={videoRef}
                className="pve-elevator-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={elevatorHotspotVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="pve-elevator-overlay" />
              {pveHotspots.map((hotspot) => (
                <div 
                  key={hotspot.id} 
                  className={`pve-hotspot ${activeHotspot === hotspot.id ? 'active' : ''}`}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onClick={() => handlePveHotspotClick(hotspot.id)}
                  onMouseEnter={() => handlePveHotspotEnter(hotspot.id)}
                  onMouseLeave={handlePveHotspotLeave}
                >
                  <div className="pve-hotspot-dot">
                    {hotspot.icon}
                  </div>
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
                        <div className="pve-feature-image-container">
                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="pve-feature-image"
                          />
                        </div>
                        <div className="pve-feature-text">
                          <h3 className="pve-feature-title">{feature.title}</h3>
                          <h4 className="pve-feature-subtitle">{feature.subtitle}</h4>
                        </div>
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
                  <div className="pve-default-icon"><Shield size={32} color="#d4b347" /></div>
                  <h3 className="pve-default-title">Explore Our Safety Features</h3>
                  <p className="pve-default-text">
                    Click on the hotspots on the elevator to discover the advanced safety features 
                    and performance benefits of our premium elevator system with gearless motor technology.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PVEHotspotSection;