import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo */}
                <div className="footer-logo">
                    <div className="logo-circle" style={{ border: "2px solid white" }}>
                        <span className="logo-text">logo</span>
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Address line 1</p>
                    <p>Address line 2</p>
                    <p>+91 9*********</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Contact us</p>
                </div>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>@2025 Anu Lisba Raj M. All rights reserved</p>
            </div>
        </footer>
    );
}
