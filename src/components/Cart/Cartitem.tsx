"use client";
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../assets/Homepage/Section2/football-uniforms-small.png'
import Deleteicon from '../../assets/Header/Svg/Delete';
import Hearticon from '../../assets/Header/Svg/Heart';
const Cartitem = () => {
    const [count, setcount] = useState(1);

    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        setcount(count - 1)
    }
    return (
        <Box sx={{ width: '100%', height: '196px', border: '0.6px solid #969696 ', borderRadius: '6px' }} display='flex'>
            <Box sx={{ width: '30%', backgroundColor: '#EFEFEF', height: '196px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={img} alt="suit" style={{ width: 'auto', height: "164px" }} />
            </Box>
            <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '24px' }}>
                    <Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '14px', sm: '17px', md: '20px' }, fontWeight: '600' }}>ARCU 1 CUSTOM BSK  JERSEY</Typography>
                            <Box sx={{ borderRadius: '16px', border: '1.6px solid #D71C24', height: '24px', width: '79px', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ fontFamily: 'Lato', fontSize: '14px', fontWeight: '600', color: '#D71C24' }}>20% OFF</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>  <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight: '500', color: '#D71C24' }}>$99</Typography>
                            <Box sx={{ borderRadius: '16px', border: '1.6px solid #D71C24', height: '24px', width: '66px', display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ fontFamily: 'Lato', fontSize: '12px', fontWeight: '600', color: '#D71C24' }}>20% OFF</Typography>
                            </Box></Box>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight: '600' }}>Size: Large</Typography>
                        <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontWeight: '600' }}>Quantity: 1</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ width: '94px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #E0E0E0' }}>
                            <Button sx={{ backgroundColor: '#EFEFEF', height: '28px', width: '32px', minWidth: '30px', color: '#111111', borderRadius: '0px', borderRight: '1px solid #E0E0E0' }} disabled={count === 1 ? true : false} onClick={decrement}>-</Button>
                            <Typography sx={{ size: '16px', width: '30px', fontFamily: 'Lato', fontWeight: '500', textAlign: 'center', borderRadius: '0px', borderLeft: '1px solid #E0E0E0' }}>{count}</Typography>
                            <Button sx={{ backgroundColor: '#EFEFEF', height: '28px', width: '32px', minWidth: '30px', color: '#111111' }} onClick={increment}>+</Button>
                        </Box>
                        <Box>
                            <Hearticon /> <Deleteicon />


                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Cartitem
