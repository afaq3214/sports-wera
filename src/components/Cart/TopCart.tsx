import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const TopCart = () => {
    return (
        <Box width="100%" sx={{ height: '60px', display: 'flex', justifyContent: "center", alignItems: 'center', backgroundColor: '#AC161D' }}>

            <Typography sx={{ fontSize: '18px', fontWeight: '500', color: 'rgba(224, 224, 224, 1)', fontFamily: 'Lato', }}>Shop upto 50% off

                <Link href='/shop' style={{ fontSize: '18px', fontWeight: '700', color: '#E0E0E0', fontFamily: 'Lato', marginLeft: '1rem' }}>Shop Now</Link>
            </Typography>
        </Box>
    )
}

export default TopCart
