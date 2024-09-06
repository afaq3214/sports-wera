"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/Header/Logo/main-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import cartlogo from "../../assets/Header/icons/Vector (1).png";
import msqlogo from "../../assets/Header/icons/Vector.png";
import CustomButton from "../Button/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import ShopCategories from "./ShopCategories";
import Promosdropdown from "./Promosdropdown";
import menu from "../../assets/Header/icons/menu.png";
import ResponsiveNav from "./ResponsiveNav";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Collapse from '@mui/material/Collapse';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const [dropdown, setdropdown] = useState(false);
  const [promodrop, setpromodrop] = useState(false);
  const [responsivenavbar, setresponsivenavbar] = useState(false);
  const [arrowState, setArrowState] = useState<{ [key: number]: boolean }>({
    2: false,
    3: false,
  });
  const [activeState, setactiveState] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const sideBarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const promodropRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const changearrow = (id: number) => {
    setArrowState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    if (id === 2) {
      setdropdown((prev) => !prev);
      setpromodrop(false);
    }

    if (id === 3) {
      setpromodrop((prev) => !prev);
      setdropdown(false);
    }
  };

  const MenuData = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
      icon: (
        <>
          <KeyboardArrowDownIcon
            onClick={() => {
              // changearrow(2); activestate(2)
            }}
            sx={{
              color: "#A5A5A5",
              fontSize: "1.3rem",
              display: arrowState[2] ? "none" : "block",
            }}
          />
          <KeyboardArrowUpIcon
            // onClick={() => changearrow(2)}
            sx={{ display: arrowState[2] ? "block" : "none" }}
          />
        </>
      ),
    },
    {
      id: 3,
      title: "Promos",
      path: "/Promos",
      icon: (
        <>
          <KeyboardArrowDownIcon
            sx={{
              color: "#A5A5A5",
              fontSize: "1.3rem",
              display: arrowState[3] ? "none" : "block",
            }}
          />
          <KeyboardArrowUpIcon
            // onClick={() => changearrow(3)}
            sx={{ display: arrowState[3] ? "block" : "none" }}
          />
        </>
      ),
    },
    {
      id: 4,
      title: "Uniform Builder",
      path: "/",
    },
    {
      id: 5,
      title: "Become a Bistributor",
      path: "/",
    },
  ];

  const activestate = (id: number) => {
    setactiveState({ 1: false, 2: false, 3: false, 4: false, 5: false });
    setactiveState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const Handleresponsivenavbar = (event: MouseEvent) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
        setresponsivenavbar(false);
      }
      if (dropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setdropdown(false);
        setArrowState({ 2: false, 3: false });
      }
      if (promodrop && promodropRef.current && !promodropRef.current.contains(event.target as Node)) {
        setpromodrop(false);
        setArrowState({ 2: false, 3: false });
      }
    };
    if (responsivenavbar || dropdown || promodrop) {
      document.addEventListener("mousedown", Handleresponsivenavbar);
    }
    return () => {
      document.removeEventListener("mousedown", Handleresponsivenavbar);
    };
  }, [responsivenavbar, dropdown, promodrop]);

  const handleroutes = (name: string) => {
    if (name === "Shop") {
    } else if (name === "Promos") {
    } else {
      router.push(`/${name}`);
    }
  };

  const HandleDropDownsAndResponsiveNavbar = (resprops: boolean) => {
    setresponsivenavbar(false);
    setArrowState({ 2: false, 3: false });
    setdropdown(false);
    setpromodrop(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <nav
      ref={dropdown ? dropdownRef : promodropRef}
      style={{ position: "sticky", top: "0", zIndex: 1100 }}
    >
      <Box
        width="100%"
        sx={{
          display: { xs: responsivenavbar ? "block" : "none", md: "none" },
          height: "100vh",
          backgroundColor: " rgba(0,0,0,0.5)",
          position: "absolute",
        }}
      ></Box>
      {isSmallScreen && (
        <Box
          ref={sideBarRef}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: responsivenavbar ? '75%' : '0', // Controls sidebar width
            height: '100vh',
            zIndex: 2,
            bgcolor: 'transparent', // Set background color
            overflowX: 'hidden', // Prevents overflow
            transition: 'width 0.3s ease', // Smooth transition effect
          }}
        >
          <Collapse
            orientation="horizontal"
            in={responsivenavbar}
            timeout={300} // Duration of animation
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: responsivenavbar ? '100%' : '0', // Manage width with Collapse
            }}
          >
            <ResponsiveNav SendRes={HandleDropDownsAndResponsiveNavbar} />
          </Collapse>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent={{ xs: "space-between", md: "center" }}
        alignItems="center"
        sx={{ width: "100%", height: "94px", backgroundColor: "#111111" }}
      >
        <Box
          sx={{ width: "95%", height: "100px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Box from logo */}
          <Box
            sx={{ width: { xs: "100%", md: "20%" } }}
            display="flex"
            justifyContent={{ xs: "space-around", md: "center" }}
            alignItems="center"
          >
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Image
                src={menu}
                alt="menu"
                onClick={() => setresponsivenavbar(!responsivenavbar)}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "80%", sm: "70%", md: "80%" }, // responsive width
                height: { xs: "60px", sm: "70px", md: "120px" }, // responsive height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={logo}
                alt="Logo"
                style={{ maxWidth: "100%", height: "auto" }} // responsive image
              />
            </Box>
          </Box>
          {/* Box for list */}
          <Box
            sx={{
              width: "50%",
              height: "40px",
              display: { xs: "none", md: "flex" },
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{ width: "100%", height: "20px", gap: "24px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {MenuData.map((item, index) => {
                return (
                  <Typography
                    key={item.id}
                    onClick={() => {
                      activestate(item.id),
                        changearrow(item.id),
                        handleroutes(item.title);
                    }}
                    sx={{
                      fontWeight: activeState[item.id] ? "600" : "400",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: activeState[item.id] ? "#FEFEFE" : "#A5A5A5",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    {item.title}{" "}
                    <span style={{ display: "flex", justifyContent: "center" }}>
                      {item.icon && item.icon}
                    </span>
                  </Typography>
                );
              })}
            </Box>
          </Box>
          {/* bOX FOR THIRD PART */}
          <Box sx={{ width: "25%" }}>
            <Box
              sx={{ width: "100%", gap: "15px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{ width: "30%" }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Image src={cartlogo} height={20} alt="cart" width={20} style={{ cursor: 'pointer' }} onClick={() => { router.push(`/Cart`); }} />
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    height: "20px",
                    width: "3px",
                    color: "#FFFFFF",
                    margin: "7px",
                  }}
                >
                  .
                </Box>
                <Image src={msqlogo} height={20} alt="cart" width={20} />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  gap: "14px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <CustomButton
                  isBgColor={false}
                  height="46px"
                  width="93px"
                  onClick={() => { console.log("") }}
                  title="Sign In"
                  border="2px solid white"
                  color="white"
                  fontsize="15px"
                  xh="auto"
                />
                <CustomButton
                  fontsize="15px"
                  isBgColor={true}
                  bgColor="White"
                  height="46px"
                  width="125px"
                  onClick={() => console.log("")}
                  title="Contact US"
                  border="none"
                  color="black"
                  xh="auto"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


      {/* Box for display shop Dropdown */}
      <Collapse in={dropdown}>
        <Box
          width="100%"
          onClick={() => { setArrowState({ 2: false, 3: false }), setdropdown(false) }}

          sx={{
            zIndex: "1",
            position: "fixed",
            height: "100vh",
            backgroundColor: dropdown ? "rgba(0,0,0,0.5)" : "transparent", // Adjust background color for visibility
            transition: "background-color 0.3s ease", // Smooth transition for background
          }}
        >
          <Collapse in={dropdown}>
            <ShopCategories SendRes={HandleDropDownsAndResponsiveNavbar} />
          </Collapse>
        </Box>
      </Collapse>

      {/* Box for display Promo Dropdown */}
      <Collapse in={promodrop}>
        <Box
          width="100%"
          onClick={() => { setpromodrop(false), setArrowState({ 2: false, 3: false }) }}
          sx={{
            zIndex: "1",
            position: "fixed",
            height: "100vh ",
            backgroundColor: promodrop ? "rgba(0,0,0,0.5)" : "transparent", // Adjust background color for visibility
            transition: "background-color 0.3s ease", // Smooth transition for background
          }}

        >
          <Collapse in={promodrop}>
            <Promosdropdown SendRes={HandleDropDownsAndResponsiveNavbar} />
          </Collapse>
        </Box></Collapse>
    </nav>
  );
};

export default Header;
