import React from 'react';
import './Product.css';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import { FaHeart, FaBalanceScale } from 'react-icons/fa';

const Product = () => {
    return (
        <div className="container">
            <div className="product-wrapper">
                <div className="image-section">
                    <img className="product-image" src={`${process.env.PUBLIC_URL}/47.jpg`} alt="Product Image" />
                </div>
                <div className="details-section">
                    <h2 className="product-name">Retouched Tableau 115×70 Cm</h2>
                    <div className="product-price">
                        <span className="discounted-price">EGP2,090</span> <span className="original-price">EGP2,610</span>
                    </div>
                    <p className="product-description">
                        Retouched tableau abstract ship 115×70 cm, the tableau is retouched on printed canvas with gold and silver leaf wrapped on a 3 cm thickness hollow wooden chassis.
                    </p>
                    <div className="actions">
                        <input className="quantity-input" type="number" defaultValue="1" />
                        <button className="add-to-cart-button">Add To Cart</button>
                    </div>
                    <div className="links">
                        <a href="#" className="link"><FaHeart className="icon" /> Add to wishlist</a>
                        <a href="#" className="link"><FaBalanceScale className="icon" /> Compare</a>
                    </div>
                    <div className="product-meta">
                        <div className="meta-item"><strong>SKU:</strong> Tableaux 000148</div>
                        <div className="meta-item"><strong>CATEGORIES:</strong> Painted, Tableaux</div>
                        <div className="meta-item"><strong>TAGS:</strong> Modern, Sea</div>
                    </div>
                </div>
            </div>
            <ProductDescription />
            <RelatedProducts />
        </div>
    );
};

export default Product;

