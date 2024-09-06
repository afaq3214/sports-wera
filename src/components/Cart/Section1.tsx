import { Box, Typography } from "@mui/material";
import React from "react";
import Cartitem from "./Cartitem";
import Return from '../../assets/Header/Svg/Return';
import Link from "next/link";

const Section1 = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: '5px'
            }}
        >
            <Box
                sx={{
                    width: { xs: "90%", md: "88%" },
                    backgroundColor: "rgba(251, 232, 233, 1)",
                    height: { xs: "auto", md: "55px" },
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #EFA4A7",
                }}
            >
                <Typography
                    sx={{
                        width: "95%",
                        color: "#111111",
                        fontFamily: "Lato",
                        fontWeight: "400",
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    }}
                >
                    Don't let this 20% off opportunity pass you by! Use our discount code
                    at checkout
                    <span
                        style={{
                            color: "#4C4C4C",
                            fontFamily: "Lato",
                            fontWeight: "400",
                            fontSize: "16px",
                        }}
                    >
                        {" "}
                        Save on your favorite phone by using our exclusive discount code{" "}
                    </span>
                    <span
                        style={{
                            color: "#111111",
                            fontFamily: "Lato",
                            fontWeight: "700",
                            fontSize: "16px",
                        }}
                    >
                        Allen20
                    </span>
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        xs: "90%",
                        md: "88%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    },
                }}
            >
                <Typography
                    sx={{
                        color: "#000000",
                        fontWeight: "700",
                        fontSize: { xs: "20px", sm: "30px", md: "40px" },
                        fontFamily: "Segoe UI",
                    }}
                >
                    YOUR BAG
                </Typography>
                <Typography
                    sx={{
                        color: "#2F2F2F",
                        fontSize: { xs: "14px", md: "16px" },
                        fontFamily: "Lato",
                        fontWeight: "500",
                    }}
                >
                    Total (1 item)<span style={{ color: "#D71C24" }}>$99</span>{" "}
                </Typography>
                <Cartitem />
                <Box
                    sx={{
                        height: "137px",
                        gap: "10px",
                        borderBottom: "0.6px solid #6A6A6A",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            fontWeight: "600",
                            fontSize: { xs: "18px", sm: "21px", md: "24px" },
                            fontFamily: "Segoe UI",
                        }}
                    >
                        ORDER INFORMATION
                    </Typography>
                    <Typography
                        sx={{
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            color: "#2F2F2F",
                            fontSize: { xs: "14px", md: "16px" },
                            fontFamily: "Lato",
                            fontWeight: "500",
                        }}
                    >
                        <span style={{ marginRight: "0.5rem", lineHeight: "0" }}>
                            <Return />
                        </span>
                        Item return- This item can be returned
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: "122px",
                        gap: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#000000",
                            fontWeight: "600",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            fontFamily: "Segoe UI",
                        }}
                    >
                        NEED HELP?
                    </Typography>
                    <Link
                        href="/"
                        style={{
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            color: "#2F2F2F",
                            fontSize: "16px",
                            fontFamily: "Lato",
                            fontWeight: "500",
                        }}
                    >
                        Shipping
                    </Link>
                    <Link
                        href="/"
                        style={{
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            color: "#2F2F2F",
                            fontSize: "16px",
                            fontFamily: "Lato",
                            fontWeight: "500",
                        }}
                    >
                        Returns and Exchanges
                    </Link>
                    <Link
                        href="/"
                        style={{
                            height: "24px",
                            display: "flex",
                            alignItems: "center",
                            color: "#2F2F2F",
                            fontSize: "16px",
                            fontFamily: "Lato",
                            fontWeight: "500",
                        }}
                    >
                        Contact Us
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Section1;
