import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      {/* Landing Page Banner Image */}
      <section className="landing-banner">
        <img 
          src="/images/hero-landing-image.jpg" 
          alt="Al Safa Global - Your Trusted Partner in Procurement & Supply Chain Solutions" 
          className="landing-banner-image"
        />
      </section>
      
      <section className="hero-section">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to{' '}
              <span className="gradient-text">Al Safa Global</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Trusted Partner in Procurement & Supply Chain Solutions
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Al Safa Global General Trading FZ LLC is a UAE-based company specializing in comprehensive 
              procurement and supply chain solutions. Headquartered in Ras Al Khaimah, we proudly serve 
              businesses and projects within the UAE and internationally — across the Construction, 
              Industrial, Marine, Aerospace, Defence, IT, and Office Supplies sectors.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started Today
                <FiArrowRight />
              </Link>
              
              <Link to="/divisions" className="btn btn-secondary btn-large">
                Explore Our Divisions
                <FiArrowRight />
              </Link>
            </motion.div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Global Partners</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <div className="hero-main-image">
                <img 
                  src="/images/global-procurement.png" 
                  alt="Global Procurement Solutions" 
                  className="hero-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ↓
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection; 