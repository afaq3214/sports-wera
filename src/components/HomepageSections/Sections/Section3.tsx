import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from "next/image";
import logo from "../../../assets/Header/Logo/main-logo.png";
import CustomButton from '../../Button/Button';
const Section3 = () => {
    return (
        <Box className='Section3' sx={{ width: '100%', height: { xs: '180px', sm: '300px', md: '550px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ width: "47%", height: "11px" }}>
                    <Image src={logo} alt="logo" style={{ height: 'auto', width: "30%" }} />
                </Box>
                <Box sx={{ width: { xs: "70%", md: '40%' }, display: 'flex', flexDirection: 'column', gap: { xs: '2px', md: '10px' } }}>
                    <Box sx={{ gap: '0px' }}>

                        <Typography sx={{ fontSize: { xs: '16px', sm: '40px', lg: "80px" }, fontWeight: '900', fontFamily: 'Segoe UI', color: '#FEFEFE' }}>DRESS LIKE IT </Typography>
                        <Typography sx={{ fontSize: { xs: '16px', sm: '40px', lg: "80px" }, fontWeight: '900', fontFamily: 'Segoe UI', color: '#DF4950' }}>PLAY LIKE IT </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: '10px', sm: '15px', lg: '20px' }, fontWeight: '500', color: '#EFEFEF' }}>
                        To be a success on the court you have to play the part ‚ but you have to look it, too.
                    </Typography>
                    <CustomButton xh="30px" fontsize='20px' border='none' bgColor='#FEFEFE' color='#111111' width='32%' height='50px' title='Shop Now' onClick={() => { }} isBgColor={true} />
                </Box>
            </Box>
        </Box>
    )
}

export default Section3
