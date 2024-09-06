"use client";
import { Box, } from '@mui/material'
import { useParams } from 'next/navigation';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import home from '../../../assets/Shop/home.png'
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Grid2 } from '@mui/material';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from '../../HomepageSections/Sections/Section5';

export default function Shop() {
    const { category, subcategory } = useParams<{ category?: string; subcategory?: string | string[] }>();

    // Decode subcategory
    const decodedSubcategory = Array.isArray(subcategory)
        ? subcategory.map(item => decodeURIComponent(item)) // Decode each item
        : subcategory
            ? [decodeURIComponent(subcategory)] // Convert to array for consistency
            : ['No Subcategory']; // Fallback message

    const breadcrumbs = [
        <Link href="/Home" style={{ textDecoration: 'none', fontFamily: 'Lato', fontWeight: '500', color: '#111111', display: 'flex', justifyContent: 'center', alignItems: 'center', height: "30px" }}>
            <span style={{ marginRight: "7px" }}> <Image src={home} alt="home" /> </span> <Typography sx={{ fontSize: { xs: '14px', md: '18px' } }}>Home</Typography>
        </Link>,
        <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '14px', md: '18px' }, display: 'flex', alignItems: "center", fontWeight: '500', color: '#111111', height: "30px" }}>
            Shop
        </Typography >,
        <Typography key="3" sx={{ fontFamily: 'Lato', fontSize: { xs: '14px', md: '18px' }, display: 'flex', alignItems: "center", fontWeight: '500', color: '#111111', height: "30px" }}>
            {category}
        </Typography>,
        <Typography key="4" sx={{ fontFamily: 'Lato', fontSize: { xs: '14px', md: '18px' }, display: 'flex', alignItems: "center", fontWeight: '600', color: '#D71C24', height: "30px" }}>
            {decodedSubcategory}
        </Typography>,
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Section1 />
            <Breadcrumbs sx={{ width: "90%", marginTop: '3rem', marginBottom: '3rem' }} separator={<ChevronLeftIcon sx={{ color: '#111111', rotate: '180deg' }} />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <Section2 />
            <Grid2 container sx={{ display: 'flex', justifyContent: "center", alignItems: 'start', marginTop: { xs: '1rem', md: '3rem' } }}>
                <Grid2 size={3} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <Section3 />
                </Grid2>
                <Grid2 size={9} >
                    <Section4 category={decodedSubcategory} subcategory={category} />
                </Grid2>
            </Grid2>
            <Box sx={{ marginTop: '1rem', marginBottom: '6rem', width: '100%' }}>

                <Section5 />
            </Box>
        </Box>
    )
}

