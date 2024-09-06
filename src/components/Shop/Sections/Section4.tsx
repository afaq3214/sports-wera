import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import Product from '../../Product/Product';
import Pagination from '@mui/material/Pagination';
import { Grid2 } from '@mui/material'
import { useParams } from 'next/navigation';

import Breadcrumbs from '@mui/material/Breadcrumbs';
interface props {
    category: any,
    subcategory: any
}
const Section4 = ({ category, subcategory }: props) => {


    return (
        <Box sx={{ width: '100%', gap: '28px', display: "flex", flexDirection: 'column' }}>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{ color: '#D71C24', fontFamily: 'Lato', fontWeight: '500', fontSize: "18px" }}>All items</Typography>
                <Typography sx={{ color: '#111111', fontFamily: 'Segoe UI', fontWeight: '700', fontSize: "28px", textTransform: 'uppercase' }}>{category}</Typography>
                <Typography sx={{ color: '#4C4C4C', fontFamily: 'Lato', fontWeight: '500', fontSize: "18px" }}>All items</Typography>
            </Box>
            <Grid2 container spacing={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Product Page="Cart" /></Grid2>

            </Grid2>
            <Box sx={{ display: 'flex', width: "100%", justifyContent: 'end', marginBottom: "3rem" }}>  <Pagination
                count={10}
                shape="rounded"
                sx={{
                    '& .MuiButtonBase-root  ': { fontFamily: 'Lato', fontSize: '18px', fontWeight: '400', color: 'black' },

                    '& .Mui-selected': {
                        border: '2px solid #D71C24',
                        backgroundColor: 'white',
                        color: '#D71C24', fontFamily: 'Lato', fontSize: '18px', fontWeight: '400',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                    },
                    '& .MuiPaginationItem-root': {
                        '&:hover': {
                            backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red on hover
                        },
                    },
                }}
            /></Box>

        </Box>
    )
}

export default Section4
