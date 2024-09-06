"use client";
import Product from '../../Product/Product'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Carousel } from 'react-responsive-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Section2 = () => {
    const isLgScreen = useMediaQuery('(min-width: 900px)'); // lg screens
    const centerSlidePercentage = isLgScreen ? 34 : 100; // Set percentage based on screen size

    const [currentSlide, setCurrentSlide] = useState(0);

    const next = useCallback(() => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    }, []);

    const prev = useCallback(() => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    }, []);
    const updateCurrentSlide = useCallback((index: number) => {
        if (currentSlide !== index) {
            setCurrentSlide(0);
        }
    }, [currentSlide]);
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', marginTop: '4rem', gap: "48px", marginBottom: '5rem' }}>
            <Box sx={{ width: "90%", display: "flex", justifyContent: 'space-between' }} ><Typography sx={{ fontSize: { xs: '20px', md: '40px' }, fontFamily: 'Segoe UI', fontWeight: '700', color: '#111111' }}>OUR BESTSELLERS</Typography>
                <Button sx={{ fontSize: { xs: '12px' }, border: '2px solid #111111', color: '#111111', fontFamily: 'Segoe UI', fontWeight: '600', padding: '12px, 24px, 12px, 24px', gap: '4px', width: { xs: '96px', md: '156px' }, height: { xs: '36px', md: '50px' } }}>

                    View All <span style={{ display: 'flex' }}><ArrowForwardOutlinedIcon sx={{ color: '#000000', fontSize: { xs: '1rem', md: '1.5rem' } }} /></span></Button>
            </Box>
            <Box sx={{ width: { xs: '75%', md: '90%' }, display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                <Button onClick={() => { prev() }} sx={{ width: "48px", marginRight: { xs: '8px', md: '2rem' }, minWidth: "48px", height: "48px", border: "2.67px solid #4C4C4C ", borderRadius: "66.67px" }}><ChevronLeftIcon sx={{ color: "#4C4C4C" }} /></Button>
                <Carousel className='Section2Carosal'
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={false}
                    centerMode
                    autoPlay={false}
                    selectedItem={currentSlide}
                    onChange={updateCurrentSlide}
                    centerSlidePercentage={centerSlidePercentage}
                    dynamicHeight={false}
                    emulateTouch
                // centerSlidePercentage={100}
                >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Carousel>
                <Button onClick={() => { next() }} sx={{ width: "48px", minWidth: "48px", height: "48px", border: "2.67px solid #4C4C4C ", borderRadius: "66.67px", rotate: "180deg" }}><ChevronLeftIcon sx={{ color: "#4C4C4C" }} /></Button>
            </Box>
        </Box>
    )
}

export default Section2
