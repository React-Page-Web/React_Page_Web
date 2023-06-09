import React from 'react';
import logo from './assets/logo.png';
import './styles/Style.css';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="menu-droite">
          <ul>
            <li><a href="#">Bootstrap</a></li>
            <li><a href="#">Angular</a></li>
            <li><a href="#">React</a></li>
            <li><a href="#">Vuejs</a></li>
          </ul>
        </div>
        <div className="menu-container-titre">
          <ul>
            <li>Company</li>
            <li>Help & Support</li>
            <li>Legal Inforation</li>
          </ul>
        </div>
        <div className="menu-container-company">
          <ul>
            <li>Why Wrappixel</li>
            <li>Affiliate Program</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="menu-container-help">
          <ul>
            <li>Contact Us</li>
            <li>Premium Support</li>
            <li>Custom Development</li>
          </ul>
        </div>
        <div className="menu-container-legal">
          <ul>
            <li>Licenses</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="compteur-customers">
          <p>353,065</p>
        </div>
        <div className="compteur-downloads">
          <p>363,101</p>
        </div>
        <div className="menu-bottom">
          <ul>
            <li>UI Kits</li>
            <li>Next JS</li>
            <li>Nuxt JS</li>
            <li>Vuetify</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer