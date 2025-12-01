import React from 'react';

const products = [
    {
        id: 1,
        name: "Fresh Chicken",
        description: "Tender, antibiotic-free chicken cuts perfect for curries and fries.",
        price: "Market Price",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Seer Fish (Neymeen)",
        description: "Premium quality Seer fish slices, ideal for frying.",
        price: "Market Price",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9dd90d3e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Pearl Spot (Karimeen)",
        description: "Fresh Karimeen from the backwaters, a Kerala delicacy.",
        price: "Market Price",
        image: "https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Sardines (Mathi)",
        description: "Rich in Omega-3, fresh daily catch sardines.",
        price: "Market Price",
        image: "https://images.unsplash.com/photo-1621450213388-72439a2b7754?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Products() {
    return (
        <section id="products" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Our Products</h2>
                    <div className="divider"></div>
                    <p>Fresh from the nets and farms to your kitchen</p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <span className="price">{product.price}</span>
                                    <button className="btn-sm">Enquire</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
