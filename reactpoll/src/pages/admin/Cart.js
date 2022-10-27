import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit, remove } from '../../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    const handleEdit = (productId) => {
        dispatch(edit(productId));
    };

    return (
        <div>
            <h3>Selected Polls</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product._id} className="cartCard">
                        <p>{product['title']}</p>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product._id)}>
                            Remove
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleEdit(product._id)}>
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;