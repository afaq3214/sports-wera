import Hearticon from '@/assets/Header/Svg/Heart'

import { Box, Typography } from '@mui/material'
import React from 'react'

const Section2 = () => {
    const orderedlistitems = [{
        id: 1,
        Description: 'Premium cut and sew basketball uniforms with panel and piping inserts.'
    },
    {
        id: 2,
        Description: '100% lightweight yet strong and breathable polyester fabrics'
    },
    {
        id: 3,
        Description: 'Twice-reinforced seams'
    },
    {
        id: 4,
        Description: 'Rib Neckline and Armholes'
    },
    {
        id: 5,
        Description: 'Mesh Lining Under Shorts'
    },
    {
        id: 6,
        Description: 'Inclusions: Sewn On/Tackle twill Team Name, Player Number and Player name'
    },
    {
        id: 7,
        Description: 'Upgrades available: Neck Tab and Neck Tab Initials, Computer Embroidered Logos, sublimated patterns'
    },
    {
        id: 8,
        Description: 'COMPLETELY CUSTOMIZABLE IN STANDARD AND CUSTOM COLORS'
    }


    ]
    return (
        <Box sx={{ widh: '100%' }}>
            <Box sx={{ widh: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '600', fontSize: '18px', color: '#D71C24' }}>ESports Jerseys</Typography>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: '700', fontSize: '34px', color: '#111111' }}>ARCU 1 CUSTOM BSK  JERSEY </Typography>
                <Typography
                    sx={{ color: "#4C4C4C", fontFamily: 'Lato', fontWeight: '400', fontSize: '20px', display: 'flex', alignItems: 'center' }}
                >
                    $450.00 &nbsp;
                    <Typography component="span" sx={{ fontSize: "24px", fontFamily: 'Lato', fontWeight: 700, color: "#D71C24" }}>
                        <del>$550.00</del>
                    </Typography>
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}> <Box sx={{ width: '120px', height: '30px', borderRadius: '24px', backgroundColor: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ fontFamily: 'Lato', fontWeight: '500', fontSize: '14px', color: '#FEFEFE' }}>28 left in stock</Typography>
                </Box>
                    <Typography component="div" sx={{ display: "flex", marginLeft: '1rem', alignItems: 'center', fontFamily: 'Lato', fontSize: '16px', color: '#4C4C4C', fontWeight: '500' }}>
                        <Box
                            sx={{
                                width: '8px',          // Set the width of the ellipse
                                height: '8px',         // Set the height of the ellipse
                                backgroundColor: 'black', // Set the color of the ellipse
                                borderRadius: '50%',   // Make it rounded
                                display: 'inline-block', marginRight: '11px' // Keep it inline if needed
                            }}
                        ></Box>57 sold
                    </Typography>

                </Box>
                <Box>

                    <Typography sx={{ fontFamily: 'Lato', fontWeight: '500', fontSize: '16px', color: '#111111' }}>Description</Typography>
                    <ul style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                        {orderedlistitems.map((item, index) => {
                            return (
                                <li style={{ width: '90%', color: '#4C4C4C', fontFamily: 'Lato', fontWeight: '400', fontSize: '16px' }} key={item.id}>{item.Description}</li>
                            )
                        })}
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default Section2
