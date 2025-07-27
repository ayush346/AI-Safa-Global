import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiTarget, 
  FiEye, 
  FiUsers, 
  FiAward, 
  FiGlobe, 
  FiShield,
  FiCheckCircle,
  FiTrendingUp,
  FiClock,
  FiMail,
  FiMapPin
} from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Add intersection observer for brand items
  const [brandsRef, brandsInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const values = [
    {
      icon: <FiShield />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      icon: <FiGlobe />,
      title: "Global Excellence",
      description: "We maintain the highest standards of quality and service across all our operations."
    },
    {
      icon: <FiUsers />,
      title: "Partnership",
      description: "We build long-term relationships based on trust, collaboration, and mutual success."
    },
    {
      icon: <FiTrendingUp />,
      title: "Innovation",
      description: "We continuously improve our processes and solutions to meet evolving market needs."
    }
  ];

  const achievements = [
    { number: "500+", label: "Satisfied Clients", icon: <FiUsers /> },
    { number: "15+", label: "Years Experience", icon: <FiClock /> },
    { number: "50+", label: "Global Partners", icon: <FiGlobe /> },
    { number: "100%", label: "Quality Assurance", icon: <FiAward /> }
  ];

  const services = [
    "End-to-End Procurement Solutions",
    "Global Sourcing & Supply",
    "Integrated Logistics Management",
    "Cost-Effective Sourcing",
    "Timely & Reliable Delivery",
    "Industry-Specific Procurement Expertise",
    "Supplier Management",
    "Operational Procurement Support",
    "Project Procurement Support",
    "Supply Chain Optimization Consulting"
  ];

  const sectorSolutions = [
    "Construction & Infrastructure Supply",
    "Oil & Gas Equipment & Consumables",
    "Industrial & Manufacturing Support",
    "Marine & Shipping Supplies",
    "Aviation Support Services",
    "Defence Sector Procurement",
    "Office & IT Solutions"
  ];

  const valueAddedServices = [
    "Supply of Genuine OEM Parts",
    "Competitive Quotation (RFQ) Response",
    "Partnership & Collaboration"
  ];

  const brands = [
    { name: "HP", image: "/images/brands/hp-logo.png" },
    { name: "IBM", image: "/images/brands/ibm-logo.png" },
    { name: "SCHNEIDER", image: "/images/brands/schneider-logo.png" },
    { name: "ABB", image: "/images/brands/abb-logo.png" },
    { name: "ALLEN BRADLEY", image: "/images/brands/allen-bradley-logo.png" },
    { name: "3M", image: "/images/brands/3m-logo.png" },
    { name: "CAT", image: "/images/brands/cat-logo.png" },
    { name: "MAKITA", image: "/images/brands/makita-logo.png" },
    { name: "CARRIER", image: "/images/brands/carrier-logo.png" },
    { name: "LG", image: "/images/brands/lg-logo.png" },
    { name: "ROSEMOUNT", image: "/images/brands/rosemount-logo.png" },
    { name: "EMERSON COPELAND", image: "/images/brands/emerson-copeland-logo.png" },
    { name: "YORK", image: "/images/brands/york-logo.png" },
    { name: "TRANE", image: "/images/brands/trane-logo.png" },
    { name: "DAIKIN", image: "/images/brands/daikin-logo.png" },
    { name: "MITSUBISHI ELECTRIC", image: "/images/brands/mitsubishi-electric-logo.png" },
    { name: "BOSCH", image: "/images/brands/bosch-logo.png" },
    { name: "JOHNSON CONTROLS", image: "/images/brands/johnson-controls-logo.png" },
    { name: "JOTUN", image: "/images/brands/jotun-logo.png" },
    { name: "NATIONAL PAINTS", image: "/images/brands/national-paints-logo.png" },
    { name: "CATERPILLAR", image: "/images/brands/caterpillar-logo.png" },
    { name: "FG-WILSON", image: "/images/brands/fg-wilson-logo.png" },
    { name: "PARKER FILTERS & INSTRUMENTS", image: "/images/brands/parker-filters-logo.png" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text">About <span className="gold-text">Al Safa Global</span></h1>
            <p className="hero-subtitle">
              Your Trusted Partner in Procurement & Supply Chain Solutions
            </p>
            <p className="hero-description">
              Al Safa Global General Trading FZ LLC is a UAE-based company specializing in comprehensive 
              procurement and supply chain solutions. Headquartered in Ras Al Khaimah, we proudly serve 
              businesses and projects within the UAE and internationally — across the Construction, 
              Industrial, Marine, Aerospace, Defence, IT, and Office Supplies sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <motion.div 
              className="overview-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                We partner with globally recognized brands and supply high-quality products that meet 
                international standards. Whether supporting complex industrial projects, critical defense 
                requirements, specialized marine and aerospace needs, or everyday office and IT demands, 
                we ensure reliable and efficient sourcing for our clients worldwide.
              </p>
              <p>
                Our strength lies in delivering cost-effective, timely, and dependable procurement 
                solutions, backed by a deep understanding of market dynamics and logistical challenges. 
                We position ourselves as a trusted partner — committed to helping clients achieve 
                operational efficiency, project success, and sustainable growth.
              </p>
            </motion.div>

            <motion.div 
              className="overview-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <div className="floating-element element-1">
                  <FiGlobe />
                  <span>Global Reach</span>
                </div>
                <div className="floating-element element-3">
                  <FiShield />
                  <span>Trust</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <FiEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a globally trusted procurement partner, known for delivering quality products, 
                innovative solutions, and exceptional service that drive the success of projects and 
                businesses across industries.
              </p>
            </motion.div>

            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <FiTarget />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide reliable, cost-effective sourcing and supply solutions for businesses in 
                the UAE and across the globe. To represent and deliver world-renowned brands and 
                products that meet the highest standards of quality and performance. To build long-term 
                partnerships by exceeding client expectations with personalized service, integrity, 
                and commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our business and relationships
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us" ref={ref}>
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose <span className="gold-text">Al Safa Global</span>?</h2>
            <p className="section-subtitle">
              We combine industry expertise with innovative solutions to deliver exceptional value
            </p>
          </motion.div>

          <div className="features-grid">
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FiCheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Global Sourcing Network</h4>
                <p>Direct access to reputed brands and suppliers worldwide</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiCheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>End-to-End Solutions</h4>
                <p>Complete procurement and logistics management services</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FiCheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Competitive Pricing</h4>
                <p>Cost-effective solutions without compromising quality</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FiCheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Responsive Service</h4>
                <p>Quick turnaround times and commitment to deadlines</p>
              </div>
            </motion.div>

            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FiCheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Industry Expertise</h4>
                <p>Experienced team with deep industry-specific knowledge</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Core Procurement & Supply Chain Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle className="service-icon" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Solutions */}
      <section className="sector-solutions">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Sector-Specific Supply Solutions</h2>
            <p className="section-subtitle">
              Specialized procurement services for different industries
            </p>
          </motion.div>

          <div className="solutions-grid">
            {sectorSolutions.map((solution, index) => (
              <motion.div
                key={solution}
                className="solution-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle className="solution-icon" />
                <span>{solution}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="value-added-services">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Value-Added Services</h2>
            <p className="section-subtitle">
              Additional benefits that set us apart from the competition
            </p>
          </motion.div>

          <div className="value-services-grid">
            {valueAddedServices.map((service, index) => (
              <motion.div
                key={service}
                className="value-service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle className="value-service-icon" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="trusted-brands">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Trusted Brand Partners</h2>
            <p className="section-subtitle">
              We source and supply materials from a wide network of reputed international brands, 
              ensuring genuine quality and trusted performance
            </p>
          </motion.div>

          <motion.div 
            className="brands-grid"
            ref={brandsRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className={`brand-item ${brandsInView ? 'in-view' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={brand.image} alt={brand.name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              We would love to hear from you. For all inquiries, business proposals, 
              or partnership opportunities, please reach out to us.
            </p>
          </motion.div>

          <motion.div 
            className="contact-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@alsafaglobal.com" style={{ color: 'inherit', textDecoration: 'underline', wordBreak: 'break-all' }}>
                    info@alsafaglobal.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>
                  AL SAFA GLOBAL GENERAL TRADING FZ LLC<br />
                  FDBC3472<br />
                  Compass Building, Al Shohada Road<br />
                  Al Hamra Industrial Zone-FZ<br />
                  P.O. Box 10055<br />
                  Ras Al Khaimah, United Arab Emirates<br />
                  <a href="tel:+97172211123" style={{ color: 'inherit', textDecoration: 'underline' }}>+971 7 221 1123</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 