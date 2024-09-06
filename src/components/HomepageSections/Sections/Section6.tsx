import React from 'react'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme, useMediaQuery } from '@mui/material';
import facebook from '../../../assets/facebook.png'
import instagram from "../../../assets/instagram.png"
import twitter from "../../../assets/twitter.png"
import pinterest from "../../../assets/facebook.png"
import { Box } from '@mui/material';

const Section6 = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Typography sx={{ color: "black", fontSize: isSmallScreen ? '20px' : '40px', fontWeight: '700', textAlign: "center", paddingTop: "40px", fontFamily: 'Segoe UI', marginTop: { xs: '1rem', md: '4rem' } }}>FOLLOW US</Typography>
            <Typography sx={{ color: "#4C4C4C", textAlign: 'center', fontSize: isSmallScreen ? '12px' : '24px', fontWeight: '400', padding: isSmallScreen ? "10px 30px" : "10px 90px" }}>Stay connected and up to date with all things Sports Wear by following our social media handles. You'll not just get the latest updates on our sports wear products, but also get to know about our exclusive promotions</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", padding: { xs: '6px', md: '40px' }, marginBottom: { xs: '1rem', md: '4rem' } }}>
                <Image style={{ width: isSmallScreen ? "28px" : "98px", height: isSmallScreen ? "28px" : "98px" }} src={facebook} alt="" />
                <Image style={{ width: isSmallScreen ? "28px" : "98px", height: isSmallScreen ? "28px" : "98px" }} src={twitter} alt="" />
                <Image style={{ width: isSmallScreen ? "28px" : "98px", height: isSmallScreen ? "28px" : "98px" }} src={instagram} alt="" />
                <Image style={{ width: isSmallScreen ? "28px" : "98px", height: isSmallScreen ? "28px" : "98px" }} src={pinterest} alt="" />
            </Box >
        </>
    )
}

export default Section6
