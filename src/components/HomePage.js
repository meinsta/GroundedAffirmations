import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../assets/logo.png'; // Make sure to add your logo file

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Grounded Affirmations</h1>
        <nav>
          <Link to="/signup" className="nav-button">Sign Up</Link>
          <Link to="/login" className="nav-button">Login</Link>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h2>Empower your mind, one affirmation at a time</h2>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </section>
        
        <section className="features">
          <h2>Why Choose Grounded Affirmations?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Daily Personalized Affirmations</h3>
              <p>Receive affirmations tailored to your needs and goals.</p>
            </div>
            <div className="feature-item">
              <h3>Track Your Progress</h3>
              <p>Monitor your mood and progress over time.</p>
            </div>
            <div className="feature-item">
              <h3>Community Support</h3>
              <p>Connect with others who share your goals and aspirations.</p>
            </div>
            <div className="feature-item">
              <h3>Guided Meditation Sessions</h3>
              <p>Find peace and clarity with our guided meditation sessions.</p>
            </div>
          </div>
        </section>
        
        <section className="cta">
          <h2>Start Your Journey Today</h2>
          <Link to="/signup" className="cta-button">Sign Up Now</Link>
        </section>
        <section>
          <img src={logo} alt="Grounded Affirmations Logo" />
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Grounded Affirmations. All rights reserved.</p>
        <nav>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="mailto:qalij.shamsipars@gmail.com">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}

export default HomePage;
