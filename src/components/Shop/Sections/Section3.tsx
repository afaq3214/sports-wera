import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Checkbox from "@mui/material/Checkbox";
import { Brands } from "../../../utils/Menu";
import Slider from "@mui/material/Slider";
import { Colors } from "../../../utils/Colors";

const Section3 = () => {
    const [active, setactive] = useState(false);
    const [activecolor, setsactivecolors] = useState(false);
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const valuetext = (value: any) => `$${value}`;
    return (
        <Box
            width={{ xs: '100%', md: '65%' }}
            sx={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <Box
                width="100%"
                sx={{ borderBottom: "0.6px solid #969696", height: "130px" }}
            >
                <FormControl>
                    <FormLabel
                        id="demo-radio-buttons-group-label"
                        sx={{
                            color: "#111111",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Segoe UI",
                        }}
                    >
                        Gender
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="Men"
                            control={<Radio />}
                            label="Men"
                            sx={{
                                color: "#4C4C4C",
                                fontFamily: "Lato",
                                fontWeight: "400",
                                fontSize: "16px",
                            }}
                        />
                        <FormControlLabel
                            value="Women"
                            control={<Radio />}
                            label="Women"
                            sx={{
                                color: "#4C4C4C",
                                fontFamily: "Lato",
                                fontWeight: "400",
                                fontSize: "16px",
                            }}
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
            {/* Box for Brands */}
            <Box
                width="100%"
                sx={{
                    borderBottom: "0.6px solid #969696",
                    height: "auto",
                    paddingBottom: "1.5rem",
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#111111",
                        fontWeight: "600",
                        fontFamily: "Segoe UI",
                        fontSize: "20px",
                    }}
                >
                    Brands (12){" "}
                    <KeyboardArrowDownIcon
                        sx={{ rotate: active ? "180deg" : "0deg", cursor: "pointer" }}
                        onClick={() => setactive(!active)}
                    />{" "}
                </Typography>
                <FormGroup>
                    {Brands.map((item, index) =>
                        item.active || active ? (
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <span
                                        style={{
                                            fontFamily: "Lato",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: "#4C4C4C",
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                }
                                key={item.id}
                            />
                        ) : null
                    )}
                </FormGroup>
                <Typography
                    onClick={() => setactive(!active)}
                    sx={{
                        color: "#D71C24",
                        cursor: "pointer",
                        fontFamily: "Lato",
                        fontSize: "16px",
                        fontWeight: "600",
                        height: "30px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "90%",
                    }}
                >
                    {active ? "Show Less" : "Show All"} &nbsp;
                    <ArrowForwardIcon sx={{ color: "#D71C24", fontSize: "20px" }} />
                </Typography>
            </Box>
            {/* Box For Colors */}
            <Box
                width="100%"
                sx={{
                    borderBottom: "0.6px solid #969696",
                    height: "auto",
                    paddingBottom: "1.5rem",
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#111111",
                        fontWeight: "600",
                        fontFamily: "Segoe UI",
                        fontSize: "20px",
                    }}
                >
                    Colors (8){" "}
                    <KeyboardArrowDownIcon
                        sx={{ rotate: activecolor ? "180deg" : "0deg", cursor: "pointer" }}
                        onClick={() => setsactivecolors(!activecolor)}
                    />{" "}
                </Typography>
                <FormGroup>
                    {Colors.map((item, index) =>
                        item.active || activecolor ? (
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <span
                                        style={{
                                            fontFamily: "Lato",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: "#4C4C4C",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "16px",
                                                height: "16px",
                                                marginRight: "5px",
                                                borderRadius: "12px",
                                                backgroundColor: item.name,
                                            }}
                                        ></Box>
                                        {item.name}
                                    </span>
                                }
                                key={item.id}
                            />
                        ) : null
                    )}
                </FormGroup>
                <Typography
                    onClick={() => setsactivecolors(!activecolor)}
                    sx={{
                        cursor: "pointer",
                        color: "#D71C24",
                        fontFamily: "Lato",
                        fontSize: "16px",
                        fontWeight: "600",
                        height: "30px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "90%",
                    }}
                >
                    {activecolor ? "Show Less" : "Show All"} &nbsp;
                    <ArrowForwardIcon sx={{ color: "#D71C24", fontSize: "20px" }} />
                </Typography>
            </Box>

            <Box
                width="100%"
                sx={{ borderBottom: "0.6px solid #969696", height: "190px" }}
            >
                <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                        id="demo-radio-buttons-group-label"
                        sx={{
                            color: "#111111",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Segoe UI",
                        }}
                    >
                        Sizes
                    </FormLabel>
                    <Box
                        sx={{
                            height: "120px",
                            display: "flex",
                            flexDirection: "column",
                            overflowY: "auto",
                        }}
                    >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="sx"
                                control={<Radio />}
                                label="xs"
                                sx={{
                                    color: "#4C4C4C",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                            />
                            <FormControlLabel
                                value="s"
                                control={<Radio />}
                                label="s"
                                sx={{
                                    color: "#4C4C4C",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                            />
                            <FormControlLabel
                                value="m"
                                control={<Radio />}
                                label="m"
                                sx={{
                                    color: "#4C4C4C",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                            />
                            <FormControlLabel
                                value="lg"
                                control={<Radio />}
                                label="lg"
                                sx={{
                                    color: "#4C4C4C",
                                    fontFamily: "Lato",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                            />
                        </RadioGroup>
                    </Box>
                </FormControl>
            </Box>
            {/* Box FOR slidr */}
            <Box
                width="100%"
                sx={{ borderBottom: "0.6px solid #969696", display: 'flex', flexDirection: 'column', height: "150px", gap: "30px" }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#111111",
                        fontWeight: "600",
                        fontFamily: "Segoe UI",
                        fontSize: "20px",
                    }}
                >
                    Price{" "}

                </Typography>
                <Box>

                    <Slider
                        sx={{
                            color: "red",
                            "& .MuiSlider-rail": {
                                color: "#E0E0E0",
                                height: "9px",
                            },
                            "& .MuiSlider-thumb": {
                                height: 17,
                                width: 17,
                                backgroundColor: "#D71C24",
                                boxShadow: "0 0 0 2.86px white inset",
                                "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                                    height: 24,
                                    width: 24,
                                    border: "2.86px solid #D71C2433",
                                    boxShadow: "0 0 0 4px white inset",
                                },
                            },
                            "& .MuiSlider-valueLabel": {
                                lineHeight: 1.2,
                                fontSize: 14,
                                background: "unset",
                                padding: 0,
                                width: 72,
                                height: 34,
                                color: "#FEFEFE",
                                fontFamily: "Lato",
                                backgroundColor: "#D71C24",
                                borderRadius: "26px",
                                "&::before": { display: "none" },
                                "&.MuiSlider-valueLabelOpen": {},
                            },
                        }}
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        min={0}
                        max={300}
                        valueLabelDisplay="auto"
                        valueLabelFormat={valuetext}
                        getAriaValueText={valuetext}
                    />
                    <Box sx={{ width: "100%", height: "34px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: "30%", display: 'flex', justifyContent: 'center', alignItems: 'center',
                                borderRadius: "16px",
                                border: "0.76px solid #4C4C4C",
                                height: "34px",
                            }}
                        >
                            $0
                        </Box>-
                        <Box
                            sx={{
                                width: "30%", display: 'flex', justifyContent: 'center', alignItems: 'center',
                                borderRadius: "16px",
                                border: "0.76px solid #4C4C4C",
                                height: "34px",
                            }}
                        >
                            $300
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Box for last checkbox */}
            <Box
                width="100%"
                sx={{ height: "140px" }}
            >
                <FormControl>
                    <FormLabel
                        id="demo-radio-buttons-group-label"
                        sx={{
                            color: "#111111",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Segoe UI",
                        }}
                    >
                        Sale
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="50% and less"
                            control={<Radio />}
                            label="50% and less"
                            sx={{
                                color: "#4C4C4C",
                                fontFamily: "Lato",
                                fontWeight: "400",
                                fontSize: "16px",
                            }}
                        />
                        <FormControlLabel
                            value="50% and above"
                            control={<Radio />}
                            label="50% and above"
                            sx={{
                                color: "#4C4C4C",
                                fontFamily: "Lato",
                                fontWeight: "400",
                                fontSize: "16px",
                            }}
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Section3;
