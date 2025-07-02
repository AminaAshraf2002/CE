import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  Settings, 
  MessageSquare, 
  Shield, 
  Clock, 
  Users, 
  Wrench,
  AlertCircle,
  Headphones,
  MapPin,
  Star,
  Calendar,
  Zap,
  Globe,
  Building,
  Award,
  Monitor,
  User,
  Send,
  CheckCircle,
  Heart,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Services.css';

// Import video
import bannerVideo from '../assets/serve.mp4'; // Update path as needed

// Import service images
import maintenanceImage from '../assets/../assets/amc1.jpeg';
import installationServiceImage from '../assets/amc2.jpeg';
import modernizationImage from '../assets/amc3.png';
import premiumServiceImage from '../assets/logo.png';

// Import timeline step images
import bookingConsultationImage from '../assets/booking.jpg';
import siteVisitImage from '../assets/technical.jpg';
import designApprovalImage from '../assets/design.jpg';
import customerSupportImage from '../assets/customer.jpg';
import manufacturingImage from '../assets/manufacture.jpg';
import preInstallationImage from '../assets/pre.jpg';
import installationTimelineImage from '../assets/delivery.jpg';
import testingImage from '../assets/testing.jpg';
import ongoingSupportImage from '../assets/ongoing.jpg';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState('maintenance');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const heroRef = useRef(null);
  const journeyRef = useRef(null);
  const videoRef = useRef(null);

  // Timeline steps data
  const timelineSteps = [
    {
      id: 'booking-consultation',
      image: bookingConsultationImage,
      title: 'Booking & Initial Consultation',
      subtitle: 'The client books the lift, initiating the process.',
      description: 'Begin your elevator journey with us through a simple booking process that connects you with our expert team for comprehensive consultation and project initiation.',
      icon: <Users size={20} />,
      link: '/contact',
      buttonText: 'Start Your Journey'
    },
    {
      id: 'site-visit',
      image: siteVisitImage,
      title: 'Technical Site Visit',
      subtitle: 'Our experts visit the site to assess feasibility and requirements.',
      description: 'Our certified technical specialists conduct a thorough on-site evaluation to assess structural requirements, space constraints, and technical feasibility for optimal elevator installation.',
      icon: <Settings size={20} />,
      link: '/technical-assessment',
      buttonText: 'Learn About Assessment'
    },
    {
      id: 'design-approval',
      image: designApprovalImage,
      title: 'Design & Approval',
      subtitle: 'A detailed drawing of the site and lift is created and shared for client approval.',
      description: 'Our design team creates comprehensive technical drawings and 3D visualizations, ensuring every detail meets your requirements and receives your complete approval before proceeding.',
      icon: <Monitor size={20} />,
      link: '/design-process',
      buttonText: 'View Design Process'
    },
    {
      id: 'customer-support',
      image: customerSupportImage,
      title: 'Dedicated Customer Support',
      subtitle: 'From order placement, our support team stays in touch to provide updates and assistance.',
      description: 'Experience personalized support throughout your journey with dedicated account managers who provide regular updates, answer questions, and ensure seamless communication at every stage.',
      icon: <Phone size={20} />,
      link: '/customer-support',
      buttonText: 'Contact Support'
    },
    {
      id: 'manufacturing',
      image: manufacturingImage,
      title: 'Manufacturing Begins',
      subtitle: 'The lift is manufactured with precision based on approved designs.',
      description: 'Your elevator enters our state-of-the-art manufacturing facility where skilled craftsmen build your lift with precision engineering, quality materials, and rigorous quality control standards.',
      icon: <Building size={20} />,
      link: '/manufacturing',
      buttonText: 'View Manufacturing'
    },
    {
      id: 'pre-installation',
      image: preInstallationImage,
      title: 'Pre-Installation Technical Visit',
      subtitle: 'Another site visit ensures readiness before installation.',
      description: 'Our technical team conducts a final pre-installation inspection to verify site readiness, confirm measurements, and ensure all preparations are complete for smooth installation.',
      icon: <Shield size={20} />,
      link: '/pre-installation',
      buttonText: 'Learn More'
    },
    {
      id: 'installation',
      image: installationTimelineImage,
      title: 'Delivery & Installation',
      subtitle: 'The lift will be delivered within 3 months of order placement, and installation takes 10-20 days.',
      description: 'Experience professional installation by our certified technicians who ensure precise setup, thorough testing, and complete commissioning of your new elevator system.',
      icon: <Wrench size={20} />,
      link: '/installation',
      buttonText: 'Installation Details'
    },
    {
      id: 'testing',
      image: testingImage,
      title: 'Testing & Commissioning',
      subtitle: 'A thorough quality check is conducted to ensure smooth and safe operation.',
      description: 'Comprehensive testing and commissioning ensure your elevator meets all safety standards, operates smoothly, and performs optimally before final handover and certification.',
      icon: <Award size={20} />,
      link: '/testing',
      buttonText: 'Testing Process'
    },
    {
      id: 'ongoing-support',
      image: ongoingSupportImage,
      title: 'Ongoing CRM Support',
      subtitle: 'Regular technical visits every 2 months ensure optimal performance and long-term reliability.',
      description: 'Enjoy peace of mind with our comprehensive maintenance program featuring regular service visits, 24/7 support, and proactive care to ensure your elevator\'s optimal performance for years to come.',
      icon: <Heart size={20} />,
      link: '/support',
      buttonText: 'Support Services'
    }
  ];

  // Service data with images
  const serviceCategories = {
    maintenance: {
      id: 'maintenance',
      title: 'AMC & Maintenance Services',
      subtitle: 'Reliable • Affordable • Prompt',
      description: 'Comprehensive maintenance packages designed to keep your elevators running safely and efficiently with minimal downtime.',
      icon: <Settings className="w-8 h-8" />,
      image: maintenanceImage,
      features: [
        '50+ Technicians across Kerala',
        'On-call services & packages',
        '24-hour turnaround time',
        'Dedicated support team',
        'Genuine spares always available',
        'Real-time service tracking',
        'Preventive maintenance visits'
      ],
      packages: [
        {
          name: 'Standard Package',
          features: [
            'Monthly preventive maintenance',
            'Emergency call-out service',
            'Basic parts included',
            'Telephone support'
          ],
          price: 'Contact for pricing'
        },
        {
          name: 'Comprehensive Package',
          features: [
            'Bi-weekly maintenance visits',
            '24/7 emergency response',
            'All parts & labor included',
            'Remote monitoring',
            'Priority service'
          ],
          price: 'Contact for pricing'
        }
      ]
    },
    installation: {
      id: 'installation',
      title: 'Professional Installation',
      subtitle: 'Expert • Efficient • Certified',
      description: 'Professional installation services for all elevator types with certified technicians and quality assurance.',
      icon: <Wrench className="w-8 h-8" />,
      image: installationServiceImage,
      features: [
        'Certified installation technicians',
        'Pre-installation site survey',
        'Quality control inspections',
        'Compliance with safety standards',
        'Post-installation testing',
        'Warranty coverage',
        'Installation timeline guarantee'
      ],
      packages: [
        {
          name: 'Residential Installation',
          features: [
            'Complete installation service',
            'Safety testing & certification',
            '1-year warranty',
            'Basic training provided'
          ],
          price: 'Contact for quote'
        },
        {
          name: 'Commercial Installation',
          features: [
            'Complex installation handling',
            'Extended testing period',
            '2-year warranty',
            'Comprehensive training',
            'Ongoing support'
          ],
          price: 'Contact for quote'
        }
      ]
    },
    modernization: {
      id: 'modernization',
      title: 'Elevator Modernization',
      subtitle: 'Upgrade • Enhance • Future-proof',
      description: 'Transform your existing elevators with the latest technology and safety features for improved performance.',
      icon: <Zap className="w-8 h-8" />,
      image: modernizationImage,
      features: [
        'Technology upgrades',
        'Safety system enhancements',
        'Energy efficiency improvements',
        'Aesthetic modernization',
        'Code compliance updates',
        'Minimal downtime during upgrade',
        'Extended equipment life'
      ],
      packages: [
        {
          name: 'Basic Modernization',
          features: [
            'Control system upgrade',
            'Safety feature updates',
            'Basic aesthetic improvements',
            '6-month warranty'
          ],
          price: 'Contact for assessment'
        },
        {
          name: 'Complete Modernization',
          features: [
            'Full system overhaul',
            'Latest technology integration',
            'Complete aesthetic renovation',
            '2-year warranty',
            'Energy efficiency guarantee'
          ],
          price: 'Contact for assessment'
        }
      ]
    }
  };

  const supportFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Emergency Assistance - 24/7 Rapid Support',
      details: [
        'Immediate response for urgent issues',
        'Fast resolution by expert technicians'
      ]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Exclusive Customer Support',
      details: [
        'Direct company service (no third-party technicians)',
        'Trained in-house professionals for quality service'
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Regular Service Every 3 Months',
      details: [
        'Preventive maintenance to avoid breakdowns',
        'Detailed health check of all lift components'
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Dedicated CRM & Automated Alert System',
      details: [
        'Assigned service manager for personalized assistance',
        'Automated alerts for maintenance schedules & safety checks'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Smart Diagnostics & Remote Support',
      details: [
        'Remote monitoring to detect and fix issues early',
        'Option for software upgrades & system optimization'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Kerala-based brand with localized support',
      color: 'text-green-400'
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Transparent pricing, no hidden costs',
      color: 'text-green-400'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'AMC available for all elevator brands',
      color: 'text-green-400'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Parts stocked locally — no long wait times',
      color: 'text-green-400'
    }
  ];

  const serviceTypes = ['AMC & Maintenance', 'Installation', 'Modernization', 'Consultation'];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }

    const journeyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setJourneyVisible(true);
        setTimeout(() => {
          const timelineSteps = document.querySelectorAll('.timeline-step');
          timelineSteps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('visible');
            }, index * 300);
          });
        }, 500);
      }
    }, { threshold: 0.1, rootMargin: '100px' });

    if (journeyRef.current) journeyObserver.observe(journeyRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      journeyObserver.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const currentService = serviceCategories[activeService];

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="services-hero">
        <div className="services-hero-video-container">
          <video 
            ref={videoRef}
            className="services-hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="services-hero-overlay" />
        </div>

        <div 
          className="services-hero-content"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="services-hero-badge">
            Our Services
          </div>
          
          <h1 className="services-hero-title">
            <span className="services-hero-title-line-1">Shaping the Future of</span>
            <span className="services-hero-title-line-2">Industries with Advanced</span>
            <span className="services-hero-title-line-3">Elevator Solutions</span>
          </h1>
          
          <p className="services-hero-description">
            At Capricorn Elevators, we pride ourselves on offering a comprehensive range of services designed to meet the needs of both 
            residential and commercial sectors. Our focus is on providing safe, efficient, and reliable elevator systems that enhance 
            accessibility, mobility, and building value.
          </p>
          
          <div className="services-hero-buttons">
            <button 
              onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
              className="services-btn-primary"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="tel:+917593000222" 
              className="services-btn-secondary"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        <div className="services-scroll-indicator">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="services-main-section">
        <div className="services-container">
          <div className="services-section-header">
            <div className="services-section-badge">
              Leading Elevator Solutions for Industries
            </div>
            <h2 className="services-section-title">
              Our <span className="services-section-title-highlight">Premium Services</span>
            </h2>
            <p className="services-section-subtitle">
              Our residential elevators are thoughtfully designed to blend accessibility with luxury, offering smooth and silent operation.
            </p>
          </div>

          {/* Service Navigation */}
          <div className="services-nav">
            {Object.values(serviceCategories).map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`services-nav-btn ${activeService === service.id ? 'active' : ''}`}
              >
                {service.icon}
                {service.title.split(' ')[0]} {service.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="services-display">
            <div className="services-image-section">
              <div className="services-image-container">
                {currentService.image ? (
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="services-main-image"
                  />
                ) : (
                  <div className="services-image-placeholder">
                    <div className="services-image-icon">
                      {currentService.icon}
                    </div>
                    <h3>{currentService.title}</h3>
                  </div>
                )}
                <div className="services-badge">
                  {currentService.title.split(' ')[0]}
                </div>
              </div>
            </div>

            <div className="services-details">
              <h3 className="services-name">{currentService.title}</h3>
              <h4 className="services-subtitle">{currentService.subtitle}</h4>
              <p className="services-description">{currentService.description}</p>

              <div className="services-features">
                <h5 className="services-features-title">Key Features:</h5>
                <div className="services-features-grid">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="services-feature-item">
                      <Check className="w-5 h-5 text-yellow-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="services-cta">
                <Link to="/contact" className="services-btn-primary">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="services-btn-secondary">
                  Learn More
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Service Packages */}
          <div className="services-packages">
            <h3 className="services-packages-title">Service Packages</h3>
            <div className="services-packages-grid">
              {currentService.packages.map((pkg, index) => (
                <div key={index} className="services-package-card">
                  <h4>{pkg.name}</h4>
                  <div className="services-package-features">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="services-package-feature">
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="services-package-price">{pkg.price}</div>
                  <button className="services-package-btn">Get Quote</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium After Sales Services */}
      <section className="services-premium-section">
        <div className="services-container">
          <div className="services-premium-header">
            <h2>Our Premium <span className="text-yellow-400">After Sales Services</span></h2>
            <p className="text-yellow-400">Maintenance packages Standard & comprehensive</p>
          </div>

          <div className="services-premium-content">
            <div className="services-premium-image">
              {premiumServiceImage ? (
                <img 
                  src={premiumServiceImage} 
                  alt="Premium Service"
                  className="services-premium-main-image"
                />
              ) : (
                <div className="services-premium-placeholder">
                  <Settings className="w-16 h-16 text-yellow-400" />
                  <p>Modern Elevator Interior</p>
                </div>
              )}
            </div>

            <div className="services-premium-features">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="services-premium-feature">
                  <div className="services-premium-feature-icon">
                    {feature.icon}
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <div className="services-premium-feature-details">
                      {feature.details.map((detail, idx) => (
                        <p key={idx}>- {detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="services-premium-btn">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="services-why-choose-section">
        <div className="services-container">
          <div className="services-why-choose-content">
            <div className="services-satisfaction">
              <div className="services-satisfaction-score">
                <div className="services-satisfaction-number">95%</div>
                <div className="services-satisfaction-label">
                  <div>Customer</div>
                  <div>Satisfaction</div>
                  <div>Score</div>
                </div>
                <div className="services-satisfaction-gauge">
                  <div className="gauge-background"></div>
                  <div className="gauge-pointer"></div>
                </div>
              </div>

              <div className="services-why-features">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="services-why-feature">
                    <div className={`services-why-icon ${item.color}`}>
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-contact-card">
              <h3>Connect with Capricorn Elevators Today</h3>
              
              <div className="services-contact-info">
                <div className="services-contact-item">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <a href="tel:+917593000222">+91-759-3000-222</a>
                </div>
                <div className="services-contact-item">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <a href="tel:+971509169002">+971-50-916-9002</a>
                </div>
                <div className="services-contact-item">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <div>
                    11th Floor, Jomer Symphony, Ponnurnni-East Vyttila,<br />
                    Ernakulam, Kerala - 682028
                  </div>
                </div>
                <div className="services-contact-item">
                  <Globe className="w-5 h-5 text-yellow-400" />
                  <a href="https://www.capricornelevators.com">www.capricornelevators.com</a>
                </div>
              </div>

              <div className="services-contact-buttons">
                <button className="services-contact-btn-primary">
                  <MessageSquare className="w-4 h-4" />
                  Get Quote
                </button>
                <a href="tel:+917593000222" className="services-contact-btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      <section ref={journeyRef} className={`timeline-journey-section ${journeyVisible ? 'visible' : ''}`}>
        <div className="timeline-bg-pattern" />
        <div className="timeline-container">
          <div className="timeline-section-header">
            <div className="timeline-badge">Our Seamless Journey</div>
            <h2 className="timeline-main-title">
              Seamless Service Flow – <span className="highlight">"From Booking to Lifetime Support"</span>
            </h2>
            <p className="timeline-subtitle">
              At Capricorn, we ensure a smooth and hassle-free journey for our clients, from booking to lifelong service support.
              Our process is designed to provide precision, reliability, and continuous assistance at every stage:
            </p>
          </div>

          <div className="timeline-line" />

          <div className="timeline-steps">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="timeline-step">
                <div className="timeline-step-image">
                  <img src={step.image} alt={step.title} className="step-image" />
                </div>
                <div className="timeline-step-content">
                  <div className="timeline-connector" />
                  <div className="timeline-content-header">
                    <h3 className="timeline-content-title">{step.title}</h3>
                    <h4 className="timeline-content-subtitle">{step.subtitle}</h4>
                  </div>
                  <p className="timeline-content-description">{step.description}</p>
                  <Link to={step.link} className="timeline-cta-button">
                    {step.buttonText}
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="timeline-step-circle">
                  <div className="timeline-step-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="timeline-step-icon">{step.icon}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-bottom-message">
            <p>
              With Capricorn, <span className="highlight-text">you're not just purchasing a lift—you're investing</span> in lifetime 
              safety, efficiency, and unmatched service excellence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;