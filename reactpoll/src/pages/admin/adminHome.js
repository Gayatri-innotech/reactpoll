import { AppBar, Box, Toolbar, Typography, Select, MenuItem } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Products from '../../components/Products';


const Home = () => {
    const items = useSelector((state) => state.cart);
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
                        ADMIN PAGE
                    </Typography>
                    <Select>
                            <MenuItem component={NavLink} to='/' value={20}>Logout</MenuItem>
                        </Select>
                </Toolbar>
            </AppBar>
        </Box>
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
        <div>
            <h2 className="heading">Welcome Admin Polling Page</h2>
            <section>
                <h3>All Polls</h3>
                <Products />
            </section>
        </div>
        </>
    );
};

export default Home;