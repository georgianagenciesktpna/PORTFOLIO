import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h2>Freshness Delivered to Your Doorstep</h2>
                <p>Premium Quality Fish & Chicken in Kattappana</p>
                <div className="hero-buttons">
                    <a href="https://fish-to-home-01.web.app/" className="btn btn-primary">View Products</a>
                    <a href="#location" className="btn btn-secondary">Visit Store</a>
                </div>
            </div>
        </section>
    );
}
