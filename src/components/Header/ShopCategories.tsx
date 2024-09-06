import React, { useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Link from 'next/link'

import Subcategories from './subcategories'
import Football from '../../assets/Header/Svg/Football'
import Apprel from '../../assets/Header/Svg/Apprel'
import Basketball from '../../assets/Header/Svg/Basketball'
import Cheerlading from '../../assets/Header/Svg/Cheerlading'
import Baseball from '../../assets/Header/Svg//Baseball'
import Softball from '../../assets/Header/Svg/Softball'
import Wrestling from '../../assets/Header/Svg/Wrestling'
import Volleyball from '../../assets/Header/Svg/Volleyball'
import Soccer from '../../assets/Header/Svg/Soccer'


interface DropdownProps {
    SendRes: (showNav: boolean) => void
}
const ShopCategories = ({ SendRes }: DropdownProps) => {

    const Apparel = [{
        id: 1,
        title: "Coaching Polos"
    }, {
        id: 2,
        title: "ESports jersey"
    }, {
        id: 3,
        title: "Compression"
    }, {
        id: 4,
        title: "Hoodies"
    }, {
        id: 5,
        title: "Bags"
    }, {
        id: 6,
        title: "Hats"
    }]
    const football = [{
        id: 1,
        title: "Flag football uniforms sublimated"
    }, {
        id: 2,
        title: "Flag football uniforms pro"
    }, {
        id: 3,
        title: "Flag football jerseys"
    }, {
        id: 4,
        title: "Football uniforms"
    }, {
        id: 5,
        title: "Football jerseys"
    }]
    const basketball = [{
        id: 1,
        title: "Women’s basketball uniforms"
    }, {
        id: 2,
        title: "Warm up jackets and pants"
    }, {
        id: 3,
        title: "Basketball uniforms"
    }, {
        id: 4,
        title: "Basketball jerseys"
    }, {
        id: 5,
        title: "Shooter shirts"
    }]
    const cheerleading = [{
        id: 1,
        title: "Cheerleading uniforms sublimated"
    }, {
        id: 2,
        title: "Cheerleading uniforms stock"
    }, {
        id: 3,
        title: "Cheerleading uniforms stock"
    }]
    const baseball = [{
        id: 1,
        title: "Baseball uniforms sublimated"
    }, {
        id: 2,
        title: "Baseball uniforms pro"
    }, {
        id: 3,
        title: "Baseball jerseys"
    }]
    const softball = [{
        id: 1,
        title: "Softball uniforms "
    }, {
        id: 2,
        title: "Softball jerseys"
    }]
    const wrestling = [{
        id: 1,
        title: "Wrestling "
    }]
    const volleyball = [{
        id: 1,
        title: "Volleyball"
    }]
    const soccer = [{
        id: 1,
        title: "Soccer"
    }]


    useEffect(() => {
        SendRes(false)
    }, [])

    const Send = () => {
        SendRes(false)
    }


    return (


        <Box width="100%" display='flex' justifyContent='center' flexDirection='column' alignItems='center' sx={{ backgroundColor: "#FEFEFE", height: '602px', zIndex: '1', marginTop: "2rem", }}>
            <Grid container sx={{ height: "301px", width: '90%', backgroundColor: "#FEFEFE" }}>

                <Subcategories SendRes={Send} categories={Apparel} name='Apparel' icon={<Apprel />} height='222px' />
                <Subcategories SendRes={Send} categories={football} name='Football' icon={<Football />} height='222px' />
                <Subcategories SendRes={Send} categories={basketball} name='BasketBall' icon={<Basketball />} height='222px' />
                <Subcategories SendRes={Send} categories={cheerleading} name='Chearleading' icon={<Cheerlading />} height='222px' />
            </Grid>

            <Grid container sx={{ height: "161px", width: '90%', backgroundColor: "#FEFEFE" }}>

                <Subcategories SendRes={Send} categories={baseball} name='Baseball' icon={<Baseball />} height='222px' />
                <Subcategories SendRes={Send} categories={softball} name='Softball' icon={<Softball />} height='222px' />
                <Subcategories SendRes={Send} categories={wrestling} name='Wrestling' icon={<Wrestling />} height='222px' />
                <Subcategories SendRes={Send} categories={volleyball} name='Voleyball' icon={<Volleyball />} height='222px' />
            </Grid>
            <Grid container sx={{ backgroundColor: "#FEFEFE", width: '90%', height: "6rem" }}>

                <Subcategories SendRes={Send} categories={soccer} name='Soccer' icon={<Soccer />} height='50px' />

            </Grid>
        </Box>

    )
}

export default ShopCategories
