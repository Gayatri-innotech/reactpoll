import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="cartCount">POLLING</span>
            <div>
                <Link className="navLink" to="/">
                    All Polls
                </Link>
                <Link className="navLink" to="/cart">
                    Selected Polls
                </Link>
                <Link className="navLink" to="/usercart">
                    Polls
                </Link>
                <span className="cartCount">Total Polls : {items.length}</span>
            </div>
        </div>
    );
};

export default Nav;