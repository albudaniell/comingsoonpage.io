import React from "react";
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <div className="container">
            {/* Logo */}
            <div className="logo">
                <img src="logo.svg" alt="logo" />
            </div>

            
            <h1>
                We are launching <span className="highlight">soon!</span> 
            </h1>
            <p>Subscribe and get notified</p>

            {/* Formular pentru email */}
            <div className="email-section">
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    className="email-input" 
                />
                <button className="notify-btn">Notify Me</button>
            </div>

            <div className="img-container">
                <img src="illustration-dashboard.png" alt="img" className="img" />
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="social-icons">
                    <div className="circle">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="circle">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="circle">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
                <p className="copyright">
                    &copy; 2024 Albu Daniel. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;
