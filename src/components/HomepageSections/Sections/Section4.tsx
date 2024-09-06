"use client";
import React from 'react'
import { useState, useCallback } from 'react';
import { Box, Button, Typography } from '@mui/material'
import CustomerReviews from '../../Reviews/CustomerReviews'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

const Section4 = () => {
    const isLgScreen = useMediaQuery('(min-width: 900px)'); // lg screens
    const centerSlidePercentage = isLgScreen ? 50 : 100; // Set percentage based on screen size

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
        <Box sx={{ marginTop: "3rem", marginBottom: "3rem", gap: '48px', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ width: "100%", height: '48px' }}><Typography sx={{ textTransform: "uppercase", fontSize: { xs: '20px', md: "40px" }, fontWeight: '700', textAlign: "center" }}>What our customers have to say</Typography></Box>
            <Carousel
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

            >

                <CustomerReviews />
                <CustomerReviews />

                <CustomerReviews />

                <CustomerReviews />
            </Carousel>
            <Box sx={{ width: "100%", height: '48px', display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Box sx={{ width: '140px', display: "flex", gap: "40px" }}>
                    <Button onClick={() => { prev() }} sx={{ width: "48px", minWidth: "48px", height: "48px", border: "2.67px solid #4C4C4C ", borderRadius: "66.67px" }}><ChevronLeftIcon sx={{ color: "#4C4C4C" }} /></Button>
                    <Button onClick={() => { next() }} sx={{ width: "48px", minWidth: "48px", height: "48px", border: "2.67px solid #4C4C4C ", borderRadius: "66.67px", rotate: "180deg" }}><ChevronLeftIcon sx={{ color: "#4C4C4C" }} /></Button>
                </Box>

            </Box>
        </Box>

    )
}

export default Section4
