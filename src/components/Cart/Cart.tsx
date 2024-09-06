import React from 'react'
import Carosal from '../Carosal/Carosal'
import Section1 from './Section1'
import TopCart from './TopCart'
import { Grid2 } from '@mui/material'
import Section2 from './Section2'

const MainCart = () => {
    return (
        <>
            <TopCart />

            <Grid2 container sx={{ marginTop: { xs: '1rem', md: '5rem' }, gap: { xs: '30px', md: '0px' } }}>
                <Grid2 size={{ xs: 12, md: 6 }} ><Section1 /></Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}><Section2 /></Grid2>
            </Grid2>
            <Carosal Description='TOP PICKS FOR YOU' />
        </>
    )
}

export default MainCart