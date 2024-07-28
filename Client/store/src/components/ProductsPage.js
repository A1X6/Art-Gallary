import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsPage.css';
import { FaHeart, FaEye } from 'react-icons/fa';
import ProductCard from './ProductCard';

const ProductsPage = ({ onAddToCart, onAddToWishlist }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([260, 8500]);
    const [showCard, setShowCard] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                console.log("API response:", response.data); 
                setData(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const products = data || [];
    console.log("Products:", products); 

    // const filteredProducts = products.filter(product => {
    //     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    //     const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    //     return matchesSearchTerm && matchesPriceRange;
    // });

    // console.log("Filtered Products:", filteredProducts); 

    const handleEyeClick = (product) => {
        setSelectedProduct(product);
        setShowCard(true);
    };

    const handleHeartClick = (product) => {
        onAddToWishlist(product);
    };

    return (
        <div className="products-page">
            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className="price-filter">
                    <label>Price: EGP {priceRange[0]} - EGP {priceRange[1]}</label>
                    <input
                        type="range"
                        min="260"
                        max="8500"
                        value={priceRange[0]}
                        onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <input
                        type="range"
                        min="260"
                        max="8500"
                        value={priceRange[1]}
                        onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                </div>
            </div>
            <div className="product-list">
                {/* {filteredProducts.length > 0 ? ( */}
                    {data.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="image-section">
                                <img className="product-image" src={product.image} alt={product.name} />
                                <div className="icon-overlay">
                                    <FaEye className="icon eye-icon" onClick={() => handleEyeClick(product)} />
                                    <FaHeart className="icon heart-icon" onClick={() => handleHeartClick(product)} />
                                </div>
                            </div>
                            <h4>{product.name}</h4>
                            <p>EGP {product.price}</p>
                        </div>
                    ))}
                {/* ) : ( */}
                    {/* <p>No products found.</p> */}
                {/* )} */}
                    
            </div>
            {showCard && <ProductCard product={selectedProduct} onClose={() => setShowCard(false)} onAddToCart={onAddToCart} />}
        </div>
    );
};

export default ProductsPage;
