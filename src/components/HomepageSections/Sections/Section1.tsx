import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../Button/Button";
const Section1 = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                height: { xs: "208px", sm: "330px", md: "450px", lg: "768px" },
            }}
        >
            <Box
                className="Section1"
                sx={{
                    width: "93%",
                    height: { xs: "208px", sm: "330px", md: "450px", lg: "768px" },
                }}
                display="flex"
                alignItems="center"
            >
                <Box
                    sx={{
                        width: { xs: "70%", md: "40%" },
                        paddingLeft: { xs: "1rem", md: "4.5rem" },
                        gap: { xs: "4px", md: "20px" },
                    }}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "10px", md: "15px", lg: "28px" },
                            fontStyle: "italic",
                            color: "#EFEFEF",
                        }}
                    >
                        Any sport. Any look. Any cut.
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "24px", md: "35px", lg: "64px" },
                                fontWeight: "900",
                                color: "#EFEFEF",
                            }}
                        >
                            IT’S YOUR
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "42px", md: "70px", lg: "112px" },
                                fontWeight: "900",
                                color: "transparent",
                                backgroundColor: "transparent",
                                lineHeight: "1",
                                WebkitTextStroke: { xs: "1px #D71C24", md: "4px #D71C24" },
                            }}
                        >
                            TEAM
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: { xs: "10px", md: "15px", lg: "20px" },
                            fontWeight: "500",
                            color: "#EFEFEF",
                        }}
                    >
                        Customize your uniform online or get free design help
                    </Typography>
                    <CustomButton
                        width="35%"
                        height="60px"
                        border="none"
                        bgColor="#AC161D"
                        isBgColor={true}
                        onClick={() => { }}
                        color="#EFEFEF"
                        title="Get Quote"
                        fontsize="20px"
                        xh='30px'
                    />
                </Box>
            </Box>

            <Box
                className="words-container"
                sx={{
                    width: "7%",
                    height: { xs: "208px", sm: "330px", md: "450px", lg: "768px" },
                    backgroundColor: "#D71C24",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Typography
                    className="words"
                    sx={{
                        fontSize: { xs: "20px", sm: "40px", md: "64px" },
                        color: "#FFFFFF",
                        position: "absolute",
                        animation: "move-words 10s linear infinite",
                        whiteSpace: "nowrap",
                        writingMode: "vertical-lr",
                        fontFamily: "Segoe UI",
                        fontWeight: "700",
                    }}
                >
                    Any sport. Any look. Any cut. Any sport. Any look. Any cut.
                </Typography>
            </Box>
        </Box>
    );
};

export default Section1;
