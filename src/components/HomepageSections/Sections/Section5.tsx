import React from 'react'
import { Box, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import Emaillogo from '../../../assets/Homepage/Section5/mail (1).png'
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import CustomButton from '../../Button/Button';
const Section5 = () => {
    return (
        <Box className='Section5' sx={{
            height: { xs: '208px', sm: "250px", md: '500px', width: '100%' }, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column"
        }}>
            <Box sx={{ height: "auto", width: "70%", display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column", gap: { xs: '12px', md: '24px' } }}>
                <Typography sx={{ width: "100%", textAlign: 'center', color: '#FEFEFE', fontWeight: '700', fontFamily: 'Segoe UI', fontSize: { xs: '16px', md: '40px' }, textTransform: 'uppercase', }}>GET LASTEST NEWS</Typography>
                <Typography sx={{ width: "100%", textAlign: 'center', color: '#FEFEFE', fontWeight: '400', fontSize: { xs: '12px', md: '24px' }, textTransform: 'lowercase', }}>
                    Subscribe to our newsletter and be the first to get updates on deals and promotions</Typography>
                <TextField
                    variant="outlined"
                    placeholder="Email Address"

                    sx={{
                        width: { xs: '80%', md: '35%' },
                        border: '0.6px solid #E0E0E0',
                        height: { xs: '32px', md: 'auto' },
                        borderRadius: "6px",
                        '& .MuiOutlinedInput-root': {
                            color: '#E0E0E0',
                            height: { xs: '32px', md: 'auto' },
                            '& input::placeholder': {
                                color: '#E0E0E0',
                                opacity: 1,
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Image src={Emaillogo} alt="email" />
                            </InputAdornment>
                        ),
                    }}
                />
                <CustomButton xh="28px" title='Subscribe Now' fontsize='20px' bgColor='#AC161D' border='none' onClick={() => { }} color='#EFEFEF' width='200px' height='60px' isBgColor={true} />
            </Box>


        </Box>
    )
}

export default Section5
