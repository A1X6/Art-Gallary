import React from 'react';
import './RelatedProducts.css';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const RelatedProducts = () => {
    const relatedProducts = [
        {
            id: 1,
            name: 'Alifa Tableau Abstract',
            price: 'EGP2,328 – EGP7,732',
            image: product1
        },
        {
            id: 2,
            name: 'Framed Canvas Tableau Bohemian',
            price: 'EGP692 – EGP1,039',
            image: product2
        },
        {
            id: 3,
            name: 'Canvas Tableau Bohemian',
            price: 'EGP276 – EGP1,222',
            image: product3
        },
        {
            id: 4,
            name: 'Alifa Tableau Colorful',
            price: 'EGP1,339 – EGP2,138',
            image: product4
        }
    ];

    return (
        <div className="related-products">
            <h3>Related Products</h3>
            <div className="products">
                {relatedProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-card-image" />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;

