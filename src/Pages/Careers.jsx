import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Send, Users, Building, Award, Globe, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Briefcase, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Careers.css';

// Import assets (you'll need to add these to your assets folder)
import careersVideo from '../assets/service.mp4';
import teamImage from '../assets/choose.jpeg';
import officeImage from '../assets/choose.jpeg';

const Careers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeJob, setActiveJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const whyUsRef = useRef(null);
  const jobsRef = useRef(null);
  const processRef = useRef(null);

  // Updated job positions data
  const jobPositions = [
    {
      id: 1,
      title: 'BDM (Business Development Manager)',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '5-8 years',
      salary: 'Competitive + Incentives',
      description: 'Lead business development initiatives and drive strategic partnerships for elevator solutions.',
      requirements: ['Business development experience', 'Strategic planning skills', 'Client relationship management', 'Market analysis abilities']
    },
    {
      id: 2,
      title: 'BDE (Business Development Executive)',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive + Commission',
      description: 'Execute business development strategies and generate new business opportunities.',
      requirements: ['Sales experience', 'Lead generation skills', 'Communication skills', 'Target-oriented approach']
    },
    {
      id: 3,
      title: 'Inside Sales Associates',
      department: 'Sales',
      location: 'Head Office',
      type: 'Full-time',
      experience: '1-3 years',
      salary: 'Competitive',
      description: 'Handle inbound sales inquiries and support the sales team with lead qualification.',
      requirements: ['Sales experience', 'Communication skills', 'CRM knowledge', 'Customer service orientation']
    },
    {
      id: 4,
      title: 'Project Coordinator',
      department: 'Operations',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'Competitive',
      description: 'Coordinate elevator installation projects and ensure timely delivery.',
      requirements: ['Project coordination experience', 'Planning skills', 'Team coordination', 'Problem-solving abilities']
    },
    {
      id: 5,
      title: 'CRM (Customer Relationship Manager)',
      department: 'Customer Service',
      location: 'Head Office',
      type: 'Full-time',
      experience: '3-6 years',
      salary: 'Competitive',
      description: 'Manage customer relationships and ensure customer satisfaction across all touchpoints.',
      requirements: ['CRM software expertise', 'Customer service experience', 'Relationship management', 'Data analysis skills']
    },
    {
      id: 6,
      title: 'Tech Head',
      department: 'Technical',
      location: 'Head Office',
      type: 'Full-time',
      experience: '8-12 years',
      salary: 'Competitive',
      description: 'Lead technical operations and oversee elevator installation and maintenance activities.',
      requirements: ['Technical leadership experience', 'Elevator systems expertise', 'Team management', 'Safety protocols knowledge']
    },
    {
      id: 7,
      title: 'Sales Head',
      department: 'Sales',
      location: 'Head Office',
      type: 'Full-time',
      experience: '10-15 years',
      salary: 'Competitive',
      description: 'Lead the sales team and drive overall sales strategy and performance.',
      requirements: ['Sales leadership experience', 'Strategic planning', 'Team management', 'Market development skills']
    },
    {
      id: 8,
      title: 'RM (Regional Manager)',
      department: 'Operations',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '6-10 years',
      salary: 'Competitive',
      description: 'Manage regional operations and ensure business growth in assigned territories.',
      requirements: ['Regional management experience', 'Business development', 'Team leadership', 'Market knowledge']
    },
    {
      id: 9,
      title: 'BUH (Business Unit Head)',
      department: 'Management',
      location: 'Head Office',
      type: 'Full-time',
      experience: '12-18 years',
      salary: 'Competitive',
      description: 'Lead business unit operations and drive strategic business growth.',
      requirements: ['Business unit management', 'Strategic leadership', 'P&L responsibility', 'Industry expertise']
    },
    {
      id: 10,
      title: 'Accounts Executive',
      department: 'Finance',
      location: 'Head Office',
      type: 'Full-time',
      experience: '2-5 years',
      salary: 'Competitive',
      description: 'Handle financial accounting, reporting, and ensure compliance with accounting standards.',
      requirements: ['Accounting degree/certification', 'Financial reporting', 'Tally/ERP knowledge', 'Attention to detail']
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: <Globe size={32} />,
      title: 'Global Presence',
      description: 'Work across 2 countries with international project opportunities and cultural diversity.'
    },
    {
      icon: <Award size={32} />,
      title: '25+ Years Excellence',
      description: 'Join a company with proven track record and industry-leading expertise.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Growth',
      description: 'Professional development programs and clear career advancement paths.'
    },
    {
      icon: <Building size={32} />,
      title: 'Innovation Focus',
      description: 'Work with cutting-edge technology and contribute to innovative solutions.'
    }
  ];

  // Phone number validation
  const validatePhoneNumber = (phone) => {
    // Remove any non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Check if it contains only digits and is of reasonable length (6-15 digits)
    if (!/^\d+$/.test(digitsOnly)) {
      return 'Phone number must contain only digits';
    }
    
    if (digitsOnly.length < 6) {
      return 'Phone number must be at least 6 digits';
    }
    
    if (digitsOnly.length > 15) {
      return 'Phone number cannot exceed 15 digits';
    }
    
    return '';
  };

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (name === 'phone') {
      // Allow only digits, spaces, hyphens, parentheses, and plus sign for formatting
      let cleanValue = value.replace(/[^0-9\s\-\(\)\+]/g, '');
      
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      
      // Validate phone number
      if (cleanValue.trim()) {
        const error = validatePhoneNumber(cleanValue);
        setPhoneError(error);
      } else {
        setPhoneError('Phone number is required');
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset phone error
    setPhoneError('');
    let hasErrors = false;
    
    // Validate required fields
    if (!formData.name?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.email?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.phone?.trim()) {
      setPhoneError('Phone number is required');
      hasErrors = true;
    } else {
      // Validate phone number format
      const phoneValidationError = validatePhoneNumber(formData.phone);
      if (phoneValidationError) {
        setPhoneError(phoneValidationError);
        hasErrors = true;
      }
    }
    
    if (!formData.resume) {
      hasErrors = true;
    }
    
    // Stop submission if there are errors
    if (hasErrors) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: ''
      });
      setPhoneError('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const toggleJobDetails = (jobId) => {
    setActiveJob(activeJob === jobId ? null : jobId);
  };

  // Effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Intersection observers
    const createObserver = (ref, setState) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
        }
      }, { threshold: 0.3 });
    };

    const whyUsObserver = createObserver(whyUsRef, setWhyUsVisible);
    const jobsObserver = createObserver(jobsRef, setJobsVisible);
    const processObserver = createObserver(processRef, setProcessVisible);

    if (whyUsRef.current) whyUsObserver.observe(whyUsRef.current);
    if (jobsRef.current) jobsObserver.observe(jobsRef.current);
    if (processRef.current) processObserver.observe(processRef.current);

    return () => {
      whyUsObserver.disconnect();
      jobsObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  return (
    <div className="cap-careers-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="cap-careers-hero-section">
        <div className="cap-video-container">
          <video ref={videoRef} className="cap-hero-video" autoPlay muted loop playsInline>
            <source src={careersVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="cap-video-overlay"></div>
        </div>

        <div className="cap-hero-bg-elements">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="cap-floating-element" style={{
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`, 
              animationDuration: `${6 + Math.random() * 4}s`
            }} />
          ))}
        </div>

        <div className="cap-hero-content" style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}>
          <div className="cap-hero-stats">
            <div className="cap-stat-item">
              <Globe size={20} />
              <span>2 Countries</span>
            </div>
            <div className="cap-stat-item">
              <Building size={20} />
              <span>200+ Projects</span>
            </div>
            <div className="cap-stat-item">
              <Award size={20} />
              <span>25+ Years</span>
            </div>
            <div className="cap-stat-item">
              <Users size={20} />
              <span>200+ Team</span>
            </div>
          </div>
        </div>

        <div className="cap-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className={`cap-why-choose-us-section ${whyUsVisible ? 'cap-visible' : ''}`}>
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-badge">Why Capricorn</div>
            <h2 className="cap-section-title">
              Why Choose <span className="cap-highlight">Capricorn Elevators?</span>
            </h2>
            <p className="cap-section-subtitle">
              Join a company that values innovation, excellence, and personal growth in the elevator industry.
            </p>
          </div>

          <div className="cap-why-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="cap-why-us-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="cap-card-icon">{item.icon}</div>
                <h3 className="cap-card-title">{item.title}</h3>
                <p className="cap-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="cap-application-section">
        <div className="cap-container">
          <div className="cap-application-content">
            <div className="cap-application-info">
              <div className="cap-section-header">
                <div className="cap-section-badge">Join Us</div>
                <h2 className="cap-section-title">
                  Submit Your <span className="cap-highlight">Application</span>
                </h2>
                <p className="cap-section-subtitle">
                  Ready to take the next step? Send us your details and let's start the conversation.
                </p>
              </div>

              <div className="cap-contact-info">
                <div className="cap-contact-item">
                  <Mail size={20} />
                  <div>
                    <strong>Email</strong>
                    <span>hr@capricornelevators.com</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <span>+971509169002</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Office</strong>
                    <span>Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila, Ernakulam, Kerala 682028</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cap-application-form">
              {isSubmitted ? (
                <div className="cap-success-message">
                  <div className="cap-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for your interest. Our HR team will review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cap-form-row">
                    <div className="cap-form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="cap-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="cap-form-row">
                    <div className="cap-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                      {phoneError && (
                        <div className="cap-phone-error-message">
                          <AlertTriangle size={16} />
                          <span>{phoneError}</span>
                        </div>
                      )}
                      <div className="cap-phone-help-text">
                        Only numbers are allowed (6-15 digits)
                      </div>
                    </div>
                    <div className="cap-form-group">
                      <label htmlFor="position">Position Applied For</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                      >
                        <option value="">Select position</option>
                        {jobPositions.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="experience">Years of Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="resume">Resume *</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us why you're interested in this position..."
                    ></textarea>
                  </div>

                  <button type="submit" className="cap-submit-button" disabled={isSubmitting || phoneError}>
                    {isSubmitting ? (
                      <>
                        <div className="cap-spinner"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;