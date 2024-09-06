import { Grid2 } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Box } from '@mui/material';
import home from '../../assets/Shop/home.png'
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Section1 from './Section1';
import Section2 from './Section2';
const ProductDetail = () => {
    const breadcrumbs = [
        <Link href="/Home" style={{ textDecoration: 'none', fontFamily: 'Lato', fontWeight: '500', color: '#111111', display: 'flex', justifyContent: 'center', alignItems: 'center', height: "30px" }}>
            <span style={{ marginRight: "7px" }}> <Image src={home} alt="home" /> </span> <Typography sx={{ fontSize: { xs: '14px', md: '18px' } }}>Home</Typography>
        </Link>,

        <Typography key="4" sx={{ fontFamily: 'Lato', fontSize: { xs: '14px', md: '18px' }, display: 'flex', alignItems: "center", fontWeight: '600', color: '#D71C24', height: "30px" }}>
            ARCU 1 CUSTOM BSK  JERSEY
        </Typography>,
    ];
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Breadcrumbs sx={{ width: "88%", marginTop: '3rem', marginBottom: '3rem' }} separator={<ChevronLeftIcon sx={{ color: '#111111', rotate: '180deg' }} />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <Grid2 container sx={{ width: '100%' }}>
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', gap: '26px' }}>
                    <Section1 />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Section2 />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default ProductDetail
