import { Box, Typography } from '@mui/material'
import React from 'react'
import customer from '../../assets/Customer/Rectangle 27.png'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
const CustomerReviews = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width={{ xs: "100%", md: "92%" }} height={{ xs: "231px", md: "364px" }}>

            <Box
                width={{ xs: "100%", md: "37%", lg: "54%" }}
                height="100%"
                sx={{
                    borderRadius: "18px",
                    border: '5px solid #D71C24',
                }}
            >

                <Image
                    src={customer}
                    alt="customer"
                    style={{
                        width: '100%',
                        height: '100%',

                    }}
                />
            </Box>
            <Box
                className='customscrollbar'
                width={{ xs: "100%", md: '42%', lg: "342px" }}
                height={{ xs: "206px", md: "326px", lg: "332px" }}
                display='flex'
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
                sx={{
                    position: 'relative',
                    right: { xs: '2rem', md: '4rem' },
                    backgroundColor: "white", borderRadius: "16px", boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflowY: "auto"

                }}
            >
                <Box sx={{ width: "90%", textAlign: 'start', gap: "5px", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ width: '108px', height: { xs: "auto", md: "32px" }, fontWeight: "600", fontFamily: "Segoe UI", fontSize: { xs: "14px", md: "24px" } }}>
                        John Doe
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly sx={{ position: 'relative', zIndex: 1, fontSize: { xs: "10px", md: "1.5rem" } }} />

                </Box>
                <Typography
                    sx={{
                        width: '90%',
                        fontFamily: 'Lato',
                        fontSize: { xs: '10px', md: '16px' },
                        height: { xs: '72%', md: '60%' },
                        textAlign: 'start',
                        color: '#2F2F2F',
                        fontWeight: '400',
                    }}
                >
                    As a fitness enthusiast, I've always been in search of high-performance sports apparel that meets my active lifestyle. I was initially hesitant to invest but once I tried out some products from Allen Sportswear I was sold on the idea! Their sportswear offer great comfort and freedom keeping me motivated in my fitness journey. Highly recommend!
                </Typography>

            </Box>
            <Box></Box>
        </Box >

    )
}

export default CustomerReviews
