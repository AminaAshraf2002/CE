import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Send, Users, Building, Award, Globe, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Briefcase, Clock, DollarSign } from 'lucide-react';
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

  // Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const whyUsRef = useRef(null);
  const jobsRef = useRef(null);
  const processRef = useRef(null);

  // Job positions data
  const jobPositions = [
    {
      id: 1,
      title: 'Elevator Design Engineer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      description: 'Design and develop innovative elevator systems with focus on safety and efficiency.',
      requirements: ['Bachelor\'s in Mechanical/Electrical Engineering', 'CAD software proficiency', 'Elevator system knowledge', 'Problem-solving skills']
    },
    {
      id: 2,
      title: 'Installation Technician',
      department: 'Technical',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'AED 60-80K',
      description: 'Install and commission elevator systems ensuring compliance with safety standards.',
      requirements: ['Technical diploma/certification', 'Elevator installation experience', 'Safety protocols knowledge', 'Physical fitness']
    },
    {
      id: 3,
      title: 'Regional Sales Manager',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '5-8 years',
      salary: 'Competitive + Commission',
      description: 'Lead sales initiatives and build client relationships across assigned regions.',
      requirements: ['Sales experience in construction/elevators', 'Client relationship skills', 'Market analysis abilities', 'Leadership experience']
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      experience: '4-7 years',
      salary: 'R 450-650K',
      description: 'Manage elevator installation projects from planning to completion.',
      requirements: ['Project management certification', 'Construction industry experience', 'Team leadership skills', 'Risk management abilities']
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: <Globe size={32} />,
      title: 'Global Presence',
      description: 'Work across 9 countries with international project opportunities and cultural diversity.'
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

  // Application process steps
  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Send your resume and cover letter for the position you\'re interested in.'
    },
    {
      step: 2,
      title: 'Initial Screening',
      description: 'Our HR team reviews your application and conducts a phone screening.'
    },
    {
      step: 3,
      title: 'Technical Interview',
      description: 'Meet with our technical team to discuss your skills and experience.'
    },
    {
      step: 4,
      title: 'Final Interview',
      description: 'Final discussion with department heads and team leads.'
    },
    {
      step: 5,
      title: 'Welcome Aboard',
      description: 'Join the Capricorn Elevators family and start your journey with us.'
    }
  ];

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              <span>9 Countries</span>
            </div>
            <div className="cap-stat-item">
              <Building size={20} />
              <span>500+ Projects</span>
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

      {/* Application Process Section */}
      <section ref={processRef} className={`cap-process-section ${processVisible ? 'cap-visible' : ''}`}>
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-badge">How to Apply</div>
            <h2 className="cap-section-title">
              Application <span className="cap-highlight">Process</span>
            </h2>
            <p className="cap-section-subtitle">
              Our streamlined hiring process ensures we find the right fit for both you and our team.
            </p>
          </div>

          <div className="cap-process-timeline">
            {applicationProcess.map((step, index) => (
              <div key={step.step} className="cap-process-step" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="cap-step-number">{step.step}</div>
                <div className="cap-step-content">
                  <h3 className="cap-step-title">{step.title}</h3>
                  <p className="cap-step-description">{step.description}</p>
                </div>
                {index < applicationProcess.length - 1 && <div className="cap-step-connector"></div>}
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
                    <span>careers@capricornelevators.com</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Office</strong>
                    <span>Mumbai, India | Dubai, UAE</span>
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
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
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

                  <button type="submit" className="cap-submit-button" disabled={isSubmitting}>
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