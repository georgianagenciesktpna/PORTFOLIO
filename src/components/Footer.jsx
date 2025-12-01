import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Fish 2 Home</h3>
                        <p>Quality you can trust.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#products">Products</a>
                        <a href="#location">Location</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Georgian Agencies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
