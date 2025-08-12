import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGlobe, FiClock, FiUsers } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    division: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email subject
      const subject = `${formData.inquiryType} - ${formData.division}`;
      
      // Create email body with all form details
      const emailBody = `
Dear Al Safa Global Team,

I would like to submit an inquiry through your website contact form.

CONTACT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}

INQUIRY DETAILS:
• Division of Interest: ${formData.division}
• Type of Inquiry: ${formData.inquiryType}

MESSAGE:
${formData.message}

---
This message was sent from the Al Safa Global website contact form.
Submitted on: ${new Date().toLocaleString()}
      `.trim();

      // Create mailto URL
      const mailtoUrl = `mailto:info@alsafaglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.open(mailtoUrl, '_blank');

      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        division: '',
        inquiryType: '',
        message: ''
      });

    } catch (error) {
      setSubmitStatus('error');
      console.error('Error opening email client:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text">
              Contact <span className="gold-text">Al Safa Global</span>
            </h1>
            <p className="hero-subtitle">
              We would love to hear from you. For all inquiries, business proposals, 
              or partnership opportunities, please reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-heading">Get In Touch</h2>
              <p>
                Al Safa Global General Trading FZ LLC is your trusted partner in procurement 
                and supply chain solutions. We're here to help you with all your business needs 
                across multiple industries and sectors.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@alsafaglobal.com" className="contact-link">
                        info@alsafaglobal.com
                      </a>
                    </p>
                    <p>For business inquiries and partnerships</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:0097143741969" className="contact-link">
                        00971 4 3741 969
                      </a>
                    </p>
                    <p>Available during business hours</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <div>
                    <h4>Head Office Address</h4>
                    <p>
                      <strong>AL SAFA GLOBAL GENERAL TRADING FZ LLC</strong><br />
                      <strong>FDBC3472</strong><br />
                      Compass Building, Al Shohada Road<br />
                      Al Hamra Industrial Zone-FZ<br />
                      P.O. Box 10055<br />
                      Ras Al Khaimah, United Arab Emirates<br />
                      <a href="tel:0097143741969" style={{ color: 'inherit', textDecoration: 'underline' }}>00971 4 3741 969</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiClock className="contact-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                    <p>Friday: 8:00 AM - 1:00 PM</p>
                    <p>Saturday: Closed</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiGlobe className="contact-icon" />
                  <div>
                    <h4>Service Areas</h4>
                    <p>UAE and International Markets</p>
                    <p>Construction, Industrial, Marine, Aerospace, Defence, IT, and Office Supplies sectors</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FiUsers className="contact-icon" />
                  <div>
                    <h4>Partnership Opportunities</h4>
                    <p>We welcome collaboration with suppliers, manufacturers, and business partners worldwide</p>
                    <p>Contact us to discuss potential partnerships</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Send us a Message</h2>
              <p>Fill out the form below and click "Send Message" to open your email client with a pre-filled message.</p>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <h3>Email Client Opened!</h3>
                  <p>Your default email client should have opened with a pre-filled message. Please review and send the email to info@alsafaglobal.com</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <h3>Something went wrong</h3>
                  <p>Please try again or contact us directly at info@alsafaglobal.com</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email *" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Segment of Interest *</option>
                    <option value="Office, Construction & Infrastructure">Office, Construction & Infrastructure</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Construction & Infrastructure">Construction & Infrastructure</option>
                    <option value="Industrial & Manufacturing">Industrial & Manufacturing</option>
                    <option value="Aviation & Marine">Aviation, Marine & Shipping</option>
                    <option value="Defence Sector">Defence Sector</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Type of Inquiry *</option>
                    <option value="Procurement Services">Procurement Services</option>
                    <option value="Supply Chain Solutions">Supply Chain Solutions</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Request for Quotation">Request for Quotation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Please describe your requirements or inquiry in detail *" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="contact-additional">
        <div className="container">
          <motion.div 
            className="additional-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Al Safa Global?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>Global Sourcing Network</h3>
                <p>Direct access to reputed brands and suppliers worldwide for comprehensive procurement solutions.</p>
              </div>
              <div className="benefit-item">
                <h3>End-to-End Solutions</h3>
                <p>Complete procurement and logistics management from sourcing to delivery coordination.</p>
              </div>
              <div className="benefit-item">
                <h3>Competitive Pricing</h3>
                <p>Cost-effective sourcing without compromising on quality or authenticity of products.</p>
              </div>
              <div className="benefit-item">
                <h3>Industry Expertise</h3>
                <p>Experienced team with deep industry-specific knowledge across multiple sectors.</p>
              </div>
              <div className="benefit-item">
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control and genuine OEM parts guarantee for all products and services.</p>
              </div>
              <div className="benefit-item">
                <h3>Responsive Service</h3>
                <p>Quick turnaround times and commitment to deadlines with personalized customer support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 