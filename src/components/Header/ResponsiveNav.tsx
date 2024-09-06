import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/Header/Logo/Mask group.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { promos, shop } from "../../utils/SubCategories";
import Link from "next/link";
import { Collapse } from "@mui/material";

interface ResponsiveNavProps {
    SendRes: (showNav: boolean) => void;
}
const ResponsiveNav = ({ SendRes }: ResponsiveNavProps) => {
    const [arrowState, setArrowState] = useState<any>(null);
    const [showCategories, setShowCategories] = useState(false);
    const [showCategories2, setShowCategories2] = useState(false);
    const handleChangeArrow = (id: number | boolean) => {
        setArrowState((prev: any) => (prev === id ? null : id));
        if (id === 11) {
            setShowCategories(!showCategories);
        }
        if (id === 10) {
            setShowCategories2(!showCategories2);
        }
    };

    const HandleNavbar = () => {
        SendRes(false);
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    backgroundColor: "white",
                    height: "auto",
                    position: "absolute",

                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    width="80%"
                    height="auto"
                    display="flex"
                    flexDirection="column"
                    sx={{ gap: "20px" }}
                >
                    <Box
                        sx={{
                            width: "90%",
                            height: "103px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "end",
                            borderBottom: "0.4px solid #969696",
                        }}
                    >
                        <Box sx={{ width: "70%", height: "48px" }}>
                            <Image src={logo} alt="logo" />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "90%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "24px",
                        }}
                    >
                        <Link
                            onClick={HandleNavbar}
                            href="/Home"
                            style={{
                                color: "#D71C24",
                                fontSize: "18px",
                                width: "90%",
                                fontWeight: "600",
                                fontFamily: "Segoe UI",
                                textDecoration: "none",
                            }}
                        >
                            Home
                        </Link>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                width: "90%",
                                color: "#D71C24",
                                fontWeight: "600",
                                fontFamily: "Segoe UI",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            onClick={() => handleChangeArrow(11)}
                        >
                            Shop
                            <KeyboardArrowDownIcon
                                sx={{
                                    rotate: `${arrowState === 11 ? "180deg" : ""}`,
                                }}
                            />
                        </Typography>

                        <Collapse
                            in={showCategories}
                            sx={{
                                "&.MuiCollapse-hidden": {
                                    display: "none", // Ensures no space is taken when collapsed
                                },
                                "& .MuiCollapse-wrapperInner ": {
                                    display: "flex",
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "90%",
                                    display: "flex",
                                    flexDirection: "column",
                                    // gap: "24px",
                                }}
                            >
                                {shop.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "6px",
                                        }}
                                    >
                                        <Typography
                                            component="div"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleChangeArrow(item.id)}
                                        >
                                            {item.image}
                                            <Typography
                                                sx={{
                                                    flexGrow: 1,
                                                    marginLeft: "8px",
                                                    color: "#4C4C4C",
                                                    fontSize: "18px",
                                                    fontWeight: "400",
                                                    "&:hover": { color: "#D71C24" },
                                                }}
                                            >
                                                {item.category}
                                            </Typography>
                                            <KeyboardArrowDownIcon
                                                sx={{
                                                    transition: "transform 0.3s ease",
                                                    transform:
                                                        arrowState === item.id
                                                            ? "rotate(180deg)"
                                                            : "rotate(0deg)",
                                                }}
                                            />
                                        </Typography>
                                        {/* Subcategories Collapse */}
                                        <Collapse in={arrowState === item.id}>
                                            <Box sx={{ marginLeft: "16px" }}>
                                                {item.subCategories.map((data, subIndex) => (
                                                    <Link
                                                        href={`/Shop/${item.category}/${data.title}`}
                                                        onClick={() => HandleNavbar()}
                                                        key={subIndex}
                                                        style={{
                                                            marginBottom: "8px",
                                                            color: "#4C4C4C",
                                                            fontSize: "18px",
                                                            fontWeight: "400",
                                                            textDecoration: "none",
                                                            display: "flex",
                                                        }}
                                                    >
                                                        {data.title}
                                                    </Link>
                                                ))}
                                            </Box>
                                        </Collapse>
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>

                        <Typography
                            sx={{
                                fontSize: "18px",
                                width: "90%",
                                color: "#D71C24",
                                fontWeight: "600",
                                fontFamily: "Segoe UI",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            onClick={() => handleChangeArrow(10)}
                        >
                            Promos
                            <KeyboardArrowDownIcon
                                sx={{
                                    rotate: `${arrowState === 10 ? "180deg" : ""}`,
                                }}
                            />
                        </Typography>

                        <Collapse
                            in={showCategories2}
                            timeout={300}
                            sx={{
                                width: "90%",
                                "&.MuiCollapse-hidden": {
                                    display: "none",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    // gap: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {promos.map((item, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                // gap: "24px",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Typography
                                                component="div"
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => handleChangeArrow(item.id)}
                                            >
                                                {item.image}
                                                <Typography
                                                    sx={{
                                                        flexGrow: 1,
                                                        marginLeft: "8px",
                                                        color: "#4C4C4C",
                                                        fontSize: "18px",
                                                        fontWeight: "400",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    {item.title}
                                                    <KeyboardArrowDownIcon
                                                        sx={{
                                                            transition: "transform 0.3s ease", // Transition for the icon
                                                            transform:
                                                                arrowState === item.id
                                                                    ? "rotate(180deg)"
                                                                    : "rotate(0deg)",
                                                        }}
                                                    />
                                                </Typography>
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Collapse>

                        <Typography
                            onClick={HandleNavbar}
                            sx={{
                                color: "#D71C24",
                                fontSize: "18px",
                                width: "90%",
                                fontWeight: "600",
                                fontFamily: "Segoe UI",
                            }}
                        >
                            Uniform Builder
                        </Typography>
                        <Typography
                            onClick={HandleNavbar}
                            sx={{
                                color: "#D71C24",
                                fontSize: "18px",
                                width: "90%",
                                fontWeight: "600",
                                fontFamily: "Segoe UI",
                            }}
                        >
                            Become a Distributor
                        </Typography>
                    </Box>
                    <Box
                        width="90%"
                        height="122px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        sx={{ gap: "20px", borderTop: "0.4px solid #969696" }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#111111",
                                fontWeight: "600",
                                fontSize: "18px",
                                width: "90%",
                            }}
                            href="/"
                        >
                            Sign IN
                        </Link>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#111111",
                                fontWeight: "600",
                                fontSize: "18px",
                                width: "90%",
                            }}
                            href="/"
                        >
                            Contact Us
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ResponsiveNav;
