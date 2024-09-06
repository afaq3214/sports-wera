import React from 'react'
import Subcategories from './subcategories'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import Basketball from '../../assets/Header/Svg/Basketball'
import Football from '../../assets/Header/Svg/Football'
import Baseball from '../../assets/Header/Svg/Baseball'
import Softball from '../../assets/Header/Svg/Softball'
const categories = [
  {
    id: 1,
    title: "Basketball",
    image: <Basketball />
  },
  {
    id: 2,
    title: "Football",
    image: <Football />
  },
  {
    id: 3,
    title: "Baseball",
    image: <Baseball />
  },
  {
    id: 4,
    title: "Softball",
    image: <Softball />
  }
]
interface DropdownProps {

  SendRes: (showDrop: boolean) => void
}
const Promosdropdown = ({ SendRes }: DropdownProps) => {
  return (
    <Box width="100%" display='flex' justifyContent='center' flexDirection='column' alignItems='center' sx={{ backgroundColor: "#FEFEFE", height: '125px', zIndex: '1', marginTop: "2rem", }}>
      <Grid container sx={{ height: "auto", width: '80%', backgroundColor: "#FEFEFE" }}>

        {categories.map((item, index) => {
          return (
            <Grid key={item.id} item md={2} display='flex' alignItems="center" justifyContent='center'>

              <Box display='flex' alignItems="flex-start" justifyContent='center' sx={{ width: "auto", backgroundColor: "white", height: 'auto', gap: "14px" }}>
                <span>{item.image}</span>
                <Box>

                  <Typography sx={{ fontWeight: 600, color: '#111111', height: "2.5rem", display: "flex", alignItems: 'center', fontSize: '20px', width: "246px", marginBottom: "0.5rem", fontFamily: 'Segoe UI', '&:hover': { color: '#D71C24' }, }}>{item.title}</Typography>

                </Box>
              </Box>
            </Grid>

          )
        })}
      </Grid>
    </Box>
  )
}

export default Promosdropdown
