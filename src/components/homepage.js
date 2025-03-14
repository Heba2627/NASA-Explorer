import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, ButtonGroup, CircularProgress, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import StyledBadge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

export default function Homepage() {

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: lightGreen[500] }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Welcome to Greengables Mart
                    </Typography>
                    To the carts 
                    <IconButton aria-label="cart"
                     onClick={() => { 
                     <Link to="/carts"></Link> }}>
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <pr>
                Go to the <Link to="/products">Products</Link> page
            </pr>
        </div>

    )
};

