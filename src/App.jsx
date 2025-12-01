import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                <Products />
                <Location />
            </main>
            <Footer />
        </div>
    );
}

export default App;
