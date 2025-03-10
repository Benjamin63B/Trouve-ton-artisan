import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="text-center mt-4">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="nav-container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link">Mentions légales</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Données personnelles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Accessibilité</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Cookies</Link>
          </li>
        </ul>
      </div>
      <div className="address-container text-left">
        <address>
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 LYON CEDEX 02<br />
          France<br />
          <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
        </address>
      </div>
    </div>
  </footer>
);

export default Footer;
