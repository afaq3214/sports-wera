"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useCallback } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import img from "../../assets/Homepage/Section2/football-uniforms-small.png";
import Magnifyglass from "@/assets/Header/Svg/Magnifyglass";
import { useMediaQuery } from '@mui/material';

const Section1 = () => {
    const ismdScreen = useMediaQuery('(max-width: 900px)');
    const [active, setactive] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(active - 1);
    const next = useCallback(() => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    }, []);

    const prev = useCallback(() => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    }, []);
    const updateCurrentSlide = useCallback(
        (index: number) => {
            if (currentSlide !== index) {
                setCurrentSlide(0);
            }
        },
        [currentSlide]
    );

    const images = [
        {
            id: 1,
            img: img,
        },
        {
            id: 2,
            img: img,
        },
        {
            id: 3,
            img: img,
        },
        {
            id: 4,
            img: img,
        },
    ];
    const HandleActiveState = (id: any) => {
        setactive(id);
        setCurrentSlide(id - 1);
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: { xs: '376px', md: '666px' },
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    onClick={() => {
                        prev();
                    }}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        width: "48px",
                        position: "relative",
                        zIndex: "1",
                        left: "30px",
                        minWidth: "48px",
                        height: "48px",
                        border: "2.67px solid #4C4C4C ",
                        borderRadius: "66.67px",
                        backgroundColor: currentSlide === 0 ? "transparent" : "#111111",
                    }}
                >
                    <ChevronLeftIcon
                        sx={{ color: currentSlide === 0 ? "#111111" : "white" }}
                    />
                </Button>
                <Carousel
                    className="ProductDetailCarosal"
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={ismdScreen ? true : false}
                    showArrows={false}
                    centerMode
                    autoPlay={false}
                    selectedItem={currentSlide}
                    onChange={updateCurrentSlide}
                    centerSlidePercentage={100}
                    dynamicHeight={false}
                    emulateTouch

                >
                    {images.map((item, index) => {
                        return (
                            <Box
                                sx={{
                                    borderRadius: "18px",
                                    height: { xs: '440px', md: '550px' },
                                    width: "100%",
                                    backgroundColor: "#EFEFEF",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                                key={index}
                            >
                                <Box
                                    sx={{
                                        width: "85%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Magnifyglass />
                                    <Box
                                        sx={{
                                            borderRadius: "24px",
                                            backgroundColor: "#4C4C4C",
                                            width: "70px",
                                            height: "32px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "Lato",
                                                color: "#FEFEFE",
                                                fontSize: "16px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            0{currentSlide + 1}/04
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        width: "40%",
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt="image"
                                        style={{ width: ismdScreen ? "200px" : "332px", height: ismdScreen ? "300px" : '446px' }}
                                    />
                                </Box>
                            </Box>
                        );
                    })}
                </Carousel>
                <Button
                    onClick={() => {
                        next();
                    }}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        width: "48px",
                        position: "relative",
                        zIndex: "1",
                        right: "30px",
                        minWidth: "48px",
                        height: "48px",
                        border: "2.67px solid #4C4C4C ",
                        borderRadius: "66.67px",
                        rotate: "180deg",
                        backgroundColor:
                            currentSlide === images.length - 1 ? "transparent" : "#111111",
                    }}
                >
                    <ChevronLeftIcon
                        sx={{
                            color: currentSlide === images.length - 1 ? "#111111" : "white",
                        }}
                    />
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: { md: '600px', xs: '350px' },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {images.map((item, index) => {
                    return (
                        <Box
                            onClick={() => HandleActiveState(item.id)}
                            sx={{
                                width: { xs: '78px', md: '134px' },
                                height: { xs: '120px', md: '164px' },
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: active === item.id ? "white" : "#EFEFEF",
                                border: active === item.id ? "3px solid #D71C24" : "none",
                            }}
                        >
                            <Image
                                src={item.img}
                                alt="img"
                                style={{ width: ismdScreen ? "58px" : '90px', height: ismdScreen ? "80px" : '124px' }}
                            />
                        </Box>
                    );
                })}
            </Box>
        </>
    );
};

export default Section1;
