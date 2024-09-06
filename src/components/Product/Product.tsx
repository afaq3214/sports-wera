import { Box, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from 'react';
import Image from 'next/image';
import img from '../../assets/Homepage/Section2/football-uniforms-small.png';
import cartlogo from '../../assets/Homepage/Section2/cart.png';
import CustomButton from "../Button/Button";
import Cartsvg from "../../assets/Cartisvg/Cartsvg";
import SearchIcon from '@mui/icons-material/Search';
import SearchSvg from "../../assets/Header/Svg/Search";
type Props = {
    Page?: string
}
const Product = ({ Page }: Props) => {
    return (
        <Box sx={{ width: '224px', height: '326px', gap: '16px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '100%', height: '256px', backgroundColor: '#EFEFEF', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Box
                    sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', position: "absolute", top: '1rem' }}
                >
                    <Box
                        sx={{
                            width: "60px",
                            height: "30px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "#D71C24",
                            borderRadius: "5px",
                            color: "#FEFEFE",
                            textAlign: "center",
                        }}
                    >
                        <Typography sx={{ color: "#FAFAFA", fontSize: '14px', fontWeight: '500' }}>% Sale</Typography>
                    </Box>
                    <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer", color: '#D71C24', fontSize: '30px' }} />
                </Box>
                <Box sx={{ width: "54%", height: '150px', position: 'relative' }}>
                    <Image src={img} alt="product" layout="fill" objectFit="contain" />
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: '32px', display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '20px', md: '24px' }, fontWeight: "600", color: "#111111", fontFamily: 'Segoe UI' }}>Track Suit</Typography>
                <span style={{ cursor: 'pointer' }}> {Page ? <SearchSvg /> : <Cartsvg />}</span>
            </Box>
            <Typography
                sx={{ color: "#4C4C4C", fontFamily: 'Lato', fontWeight: '400', fontSize: '16px', display: 'flex', alignItems: 'center' }}
            >
                $450.00 &nbsp;
                <Typography component="span" sx={{ fontSize: "16px", fontFamily: 'Lato', fontWeight: 600, color: "#D71C24" }}>
                    <del>$550.00</del>
                </Typography>
            </Typography>
            <CustomButton xh="48px" width='100%' fontsize="16px" height='50px' border='#D71C24' bgColor="#D71C24" isBgColor={true} onClick={() => { }} color='#EFEFEF' title={Page ? "Add to Cart" : "View Details"} />
        </Box>
    );
}

export default Product;
