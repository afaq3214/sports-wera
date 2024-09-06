import CustomButton from '../../Button/Button'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Section1 = () => {
    return (
        <Box className="ShopSection1" sx={{ width: '100%', height: { xs: '208px', sm: '340px', md: '638px' }, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: { xs: '90%', sm: '90%', md: '60%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ width: '100%', fontFamily: 'Segoe UI', fontWeight: '600', fontStyle: 'italic', textAlign: 'center', fontSize: { xs: '10px', sm: '15px', md: '20px' }, color: '#EFEFEF' }}>Any sport. Any look. Any cut.</Typography>
                <Typography sx={{ width: { xs: '60%', md: '100%' }, textTransform: 'uppercase', fontFamily: 'Segoe UI', fontWeight: '900', textAlign: 'center', fontSize: { xs: '24px', sm: '40px', md: '64px' }, color: '#EFEFEF' }}>customize and design your uniforms</Typography>
                <CustomButton xh="30px" fontsize='20px' width='30%' height='50px' isBgColor={true} bgColor='#AC161D' title='Customize Uniform' color='#FEFEFE' onClick={() => { }} border='none' />
            </Box>
        </Box>
    )
}

export default Section1
