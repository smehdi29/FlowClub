import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './css/Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => () => navigate(path);
    const navigateExternal = (url) => {
        return () => window.location = url;
    };

    return (
        <footer className="footer">
            <hr className="horizontalLine"/>
            <br />
            <div className="footer-content">
                <div className="footer-section social-media">
                    <div className="flowClubTitleFooter">
                        <p>Flow.Club</p>
                    </div>
                    <div className="socialMediaLinks">
                        <FontAwesomeIcon className="fa" icon={faFacebook} />
                        <FontAwesomeIcon className="fa" icon={faLinkedin} />
                        <FontAwesomeIcon className="fa" icon={faTwitter} />
                        <FontAwesomeIcon className="fa" icon={faInstagram} />
                    </div>
                </div>
                <div className="footer-section links">
                    <div>
                        <h4>Contact Us</h4>
                        <p>help@flow.club</p>
                        <p>@flowdotclub</p>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <p onClick={navigateExternal('https://in.flow.club/plans/')}>Pricing</p>
                        <p onClick={navigateExternal('https://help.flow.club/en/categories/189185-becoming-a-flow-club-host')}>FAQ</p>
                        <p onClick={navigateExternal('https://in.flow.club/hosts/')}>Meet Our Hosts</p>
                    </div>
                    <div>
                        <h4>Policies</h4>
                        <p onClick={navigateExternal('https://www.flow.club/privacy-policy')}>Privacy Policy</p>
                        <p onClick={navigateExternal('https://www.flow.club/cookie-policy')}>Cookie Policy</p>
                        <p onClick={navigateExternal('https://www.flow.club/terms-and-conditions')}>Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
