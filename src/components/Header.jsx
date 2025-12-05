import React from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <h1>Fish to Home</h1>
                    <span className="subtitle">Georgian Agencies</span>
                </div>

                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="https://fish-to-home-01.web.app/" onClick={() => setIsMenuOpen(false)}>Products</a>
                    <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="cta-button">Contact Us</a>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
