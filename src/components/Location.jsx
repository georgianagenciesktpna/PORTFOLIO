import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <h2>Visit Us</h2>
                    <div className="divider"></div>
                </div>

                <div className="location-container">
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin className="icon" />
                            <div>
                                <h3>Address</h3>
                                <p>Fish to Home</p>
                                <p>Georgian Agencies</p>
                                <p>Kattappana, Kerala</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="icon" />
                            <div>
                                <h3>Phone</h3>
                                <p>9778448770</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="icon" />
                            <div>
                                <h3>Email</h3>
                                <p>georgianagenciesktpna@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="icon" />
                            <div>
                                <h3>Opening Hours</h3>
                                <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.264786367354!2d77.11287637586146!3d9.658396990430263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b1d9c0000001%3A0x1234567890abcdef!2sKattappana%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Fish to Home Location"
                        ></iframe>
                        {/* Note: This is a generic Kattappana map embed. 
                Please replace the src with the specific embed code for the exact location 
                if the provided link "https://maps.app.goo.gl/dq22rtKmPYgEUgLA7" 
                resolves to a specific pin. */}
                    </div>
                </div>
            </div>
        </section>
    );
}
