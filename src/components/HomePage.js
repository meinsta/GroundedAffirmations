import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Grounded Affirmations</h1>
        <p>Empower your mind, one affirmation at a time</p>
      </header>
      
      <main>
        <section className="features">
          <h2>Why Choose Grounded Affirmations?</h2>
          <ul>
            <li>Daily personalized affirmations</li>
            <li>Track your mood and progress</li>
            <li>Community support and sharing</li>
            <li>Guided meditation sessions</li>
          </ul>
        </section>
        
        <section className="cta">
          <h2>Start Your Journey Today</h2>
          <Link to="/signup" className="cta-button">Sign Up Now</Link>
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
