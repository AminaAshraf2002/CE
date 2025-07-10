import React, { useState, useEffect } from 'react';
import { Globe, Building, Award } from 'lucide-react';
import './WorldMap.css';

// Import assets - you'll need to replace these with your actual image paths
import worldMapImage from '../assets/map.png';
import indiaFlag from '../assets/India.png';
import uaeFlag from '../assets/uae.png';

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);

  // Location data with precise coordinates for consistent positioning
  const locations = [
    { 
      id: 'india', 
      name: 'India', 
      city: 'Kerala', 
      // Fixed coordinates for Kerala - these percentages will be consistent across all devices
      x: 77.2, 
      y: 62.5, 
      flag: '🇮🇳', 
      flagImage: indiaFlag, 
      offices: 3, 
      projects: 250, 
      code: 'IN',
      description: 'Manufacturing Hub & Headquarters'
    },
    { 
      id: 'uae', 
      name: 'UAE', 
      city: 'Dubai', 
      x: 64.8, 
      y: 42.3, 
      flag: '🇦🇪', 
      flagImage: uaeFlag, 
      offices: 2, 
      projects: 80, 
      code: 'AE',
      description: 'Regional Operations Center'
    },
  ];

  const handleLocationEnter = (locationId) => {
    setActiveLocation(locationId);
  };

  const handleLocationLeave = () => {
    setActiveLocation(null);
  };

  useEffect(() => {
    // Animate map visibility on mount
    const timer = setTimeout(() => {
      setMapVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`world-map-container ${mapVisible ? 'visible' : ''}`}>
      {/* Map Section */}
      <div className="interactive-world-map">
        <div className="map-background">
          <img 
            src={worldMapImage} 
            alt="World Map" 
            className="world-map-image"
            draggable={false}
          />
          <div className="map-overlay"></div>
        </div>

        {/* Location Markers */}
        {locations.map((location, index) => (
          <div
            key={location.id}
            className={`location-marker ${activeLocation === location.id ? 'active' : ''}`}
            style={{ 
              left: `${location.x}%`, 
              top: `${location.y}%`,
              animationDelay: `${index * 0.4}s`
            }}
            onMouseEnter={() => handleLocationEnter(location.id)}
            onMouseLeave={handleLocationLeave}
            onClick={() => handleLocationEnter(location.id)}
          >
            {/* Pulse Animation */}
            <div className="marker-pulse" />
            <div className="marker-pulse-secondary" />
            
            {/* Marker Dot */}
            <div className="marker-dot">
              <div className="marker-inner-dot" />
            </div>

            {/* Location Tooltip */}
            <div className={`location-tooltip ${activeLocation === location.id ? 'show' : ''}`}>
              <div className="tooltip-arrow" />
              
              <div className="tooltip-header">
                <div className="tooltip-flag">
                  <img 
                    src={location.flagImage} 
                    alt={`${location.name} flag`} 
                    className="flag-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="flag-emoji-fallback" style={{ display: 'none' }}>
                    {location.flag}
                  </span>
                </div>
                <div className="tooltip-country-code">{location.code}</div>
              </div>

              <div className="tooltip-content">
                <h4 className="location-name">{location.name}</h4>
                <p className="location-city">{location.city}</p>
                <p className="location-description">{location.description}</p>
                
                <div className="location-stats">
                  <div className="stat-item">
                    <Building size={14} />
                    <span>{location.offices} Offices</span>
                  </div>
                  <div className="stat-item">
                    <Award size={14} />
                    <span>{location.projects}+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines Between Locations */}
        <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(212, 179, 71, 0.6)" />
              <stop offset="50%" stopColor="rgba(212, 179, 71, 0.3)" />
              <stop offset="100%" stopColor="rgba(212, 179, 71, 0.6)" />
            </linearGradient>
          </defs>
          
          <path
            d={`M ${locations[0].x} ${locations[0].y} Q ${(locations[0].x + locations[1].x) / 2} ${Math.min(locations[0].y, locations[1].y) - 8} ${locations[1].x} ${locations[1].y}`}
            stroke="url(#connectionGradient)"
            strokeWidth="0.3"
            fill="none"
            className="connection-path"
            strokeDasharray="2 1"
          />
        </svg>
      </div>

      {/* Map Legend */}
      <div className="map-legend">
        <div className="legend-title">Global Presence</div>
        <div className="legend-items">
          {locations.map((location) => (
            <div 
              key={location.id}
              className={`legend-item ${activeLocation === location.id ? 'active' : ''}`}
              onMouseEnter={() => handleLocationEnter(location.id)}
              onMouseLeave={handleLocationLeave}
            >
              <div className="legend-marker" />
              <div className="legend-info">
                <span className="legend-country">{location.name}</span>
                <span className="legend-city">{location.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;