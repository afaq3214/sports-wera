import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'


type menuitem = {
  id: number;
  title: string;
}
interface Props {
  categories: menuitem[]
  name: string,
  // image: any,
  height: string,
  icon: React.ReactElement,
  SendRes: (showNav: boolean) => void
}


const Subcategories = ({ categories, name, height, icon, SendRes }: Props) => {

  const HandleNavbar = () => {
    SendRes(false)
  }

  return (
    <Grid item md={3} display='flex' alignItems="center" justifyContent='center' sx={{ marginTop: "1rem", }}>
      <Box className='svg-icon' display='flex' alignItems="flex-start" justifyContent='center' sx={{ width: "100%", backgroundColor: "white", height: height, gap: "14px" }}>

        {icon}
        <Box>

          <Typography sx={{ fontWeight: 600, color: '#111111', '&:hover': { color: '#D71C24' }, height: "2.5rem", display: "flex", alignItems: 'center', fontSize: '20px', width: "246px", marginBottom: "0.5rem" }}>{name}</Typography>
          <Box height='full' display='flex' flexDirection='column' justifyContent='center' sx={{ gap: '8px', width: "246px" }}>

            {categories.map((item, index) => {
              return (
                <Link onClick={HandleNavbar} className='dropwdownlink' href={`/Shop/${name}/${item.title}`} key={item.id} style={{ textDecoration: "none", fontWeight: '400', width: "246px", fontSize: '16px', display: "flex", alignItems: 'center' }}>
                  {item.title}</Link>)
            })}</Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Subcategories
