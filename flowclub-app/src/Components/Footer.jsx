import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './css/Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => () => navigate(path);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section social-media">
                    <FontAwesomeIcon className="fa" icon={faFacebook} />
                    <FontAwesomeIcon className="fa" icon={faLinkedin} />
                    <FontAwesomeIcon className="fa" icon={faTwitter} />
                    <FontAwesomeIcon className="fa" icon={faInstagram} />
                </div>
                <div className="footer-section links">
                    <div>
                        <h4>Contact Us</h4>
                        <p>help@flow.club</p>
                        <p>@flowdotclub</p>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <p onClick={navigateTo('/pricing')}>Pricing</p>
                        <p onClick={navigateTo('/faq')}>FAQ</p>
                        <p onClick={navigateTo('/hosts')}>Meet Our Hosts</p>
                    </div>
                    <div>
                        <h4>Policies</h4>
                        <p onClick={navigateTo('/privacy')}>Privacy Policy</p>
                        <p onClick={navigateTo('/cookie-policy')}>Cookie Policy</p>
                        <p onClick={navigateTo('/terms')}>Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
