"use client";
import React from 'react'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme, useMediaQuery } from '@mui/material';
import facebook from '../../assets/facebook.png'
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import pinterest from "../../assets/facebook.png"
import { Box } from '@mui/material';
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section5 from './Sections/Section5'
import Section4 from './Sections/Section4'
import Section6 from './Sections/Section6';

const Homepage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}

export default Homepage
