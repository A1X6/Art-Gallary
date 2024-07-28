import React from 'react';
import './WishlistPage.css';

const WishlistPage = ({ wishlistItems, onAddToCart, onRemoveFromWishlist }) => {
    return (
        <div className="wishlist-page">
            <h2>My Wishlist</h2>
            <table className="wishlist-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Stock Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.stockStatus}</td>
                            <td>
                                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
                                <button onClick={() => onRemoveFromWishlist(item)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WishlistPage;
