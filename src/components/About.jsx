import React from 'react';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <h2>About Fish to Home</h2>
                    <div className="divider"></div>
                </div>

                <div className="about-grid">
                    <div className="about-content">
                        <p className="lead">
                            Welcome to Fish to Home, your trusted partner for premium quality meat and seafood in Kattappana.
                        </p>
                        <p>
                            Operated by Georgian Agencies, we take pride in sourcing the freshest fish and antibiotic-free chicken.
                            Our commitment to hygiene and quality ensures that every meal you cook is healthy and delicious.
                        </p>
                        <p>
                            Whether you need daily staples or special cuts for a feast, we are here to serve you with the best prices and prompt delivery.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <ShieldCheck className="feature-icon" />
                            <h3>Quality Guaranteed</h3>
                            <p>Fresh, hygienic, and chemical-free products.</p>
                        </div>
                        <div className="feature-card">
                            <Truck className="feature-icon" />
                            <h3>Home Delivery</h3>
                            <p>Fast delivery across Kattappana.</p>
                        </div>
                        <div className="feature-card">
                            <Clock className="feature-icon" />
                            <h3>Fresh Daily</h3>
                            <p>Sourced fresh every single day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
