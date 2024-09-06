import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/Header/Logo/main-logo.png'
import Image from 'next/image'
import mail from '../../assets/FooterIcons/mail.png'
import phone from '../../assets/FooterIcons/phone.png'
import Link from 'next/link'
// import Grid22 from '@mui/material/Unstable_Grid22'
import { Grid2 } from '@mui/material'

const Footer = () => {
  const youraccount = [{
    id: 1,
    title: 'Become a Distributor',
    path: "/"
  }, {
    id: 2,
    title: 'Referral Program',
    path: "/"
  },
  {
    id: 3,
    title: 'Track your Order',
    path: "/"
  }, {
    id: 4,
    title: 'Saved Designs',
    path: "/"
  }, {
    id: 5,
    title: 'My Orders',
    path: "/"
  }, {
    id: 6,
    title: 'Forms',
    path: "/"
  }
  ]
  const yourcompany = [{
    id: 1,
    title: 'Press and Events',
    path: "/"
  }, {
    id: 2,
    title: 'About us',
    path: "/"
  },
  {
    id: 3,
    title: 'Contact us',
    path: "/"
  }, {
    id: 4,
    title: 'FAQs',
    path: "/"
  }, {
    id: 5,
    title: 'Privacy Policy',
    path: "/"
  }]
  const ourcommunity = [{
    id: 1,
    title: 'Dress the Champions',
    path: "/"
  }, {
    id: 2,
    title: 'Fundraising Ideas',
    path: "/"
  },
  {
    id: 3,
    title: 'The Huddle Blog',
    path: "/"
  }, {
    id: 4,
    title: 'Saved Designs',
    path: "/"
  }, {
    id: 5,
    title: 'Testimonials',
    path: "/"
  }, {
    id: 6,
    title: 'Team Stores',
    path: "/"
  }

  ]
  const shopeasy = [{
    id: 1,
    title: 'Customization Options',
    path: "/"
  }, {
    id: 2,
    title: 'Promos and Discounts',
    path: "/"
  },
  {
    id: 3,
    title: 'Terms and Conditions',
    path: "/"
  }, {
    id: 4,
    title: 'Saved Designs',
    path: "/"
  }, {
    id: 5,
    title: 'Size Charts',
    path: "/"
  }, {
    id: 6,
    title: 'FAQs',
    path: "/"
  }

  ]
  return (
    <Box
      width="100%"
      minHeight={{ xs: 'auto', md: '485px' }}
      sx={{ backgroundColor: '#D71C24', overflow: 'hidden' }}
      display="flex"
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Grid2
        container
        width='90%'
        sx={{
          paddingBottom: '2rem',
          borderBottom: "0.4px solid #E0E0E0",
          marginTop: '2rem',
          gap: { xs: "35px", md: "0px" }
        }}
      >
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box width={{ xs: "100%", md: '70%' }} height={{ xs: '400px', md: '310px' }} sx={{ gap: '24px' }} display='flex' justifyContent='center' flexDirection='column'>
            <Box width="100%"><Image src={logo} alt='logo' style={{ maxWidth: "100%" }} /></Box>
            <Box><Typography sx={{ color: '#E0E0E0', fontFamily: 'Lato', fontSize: "16px" }}>
              To be a success on the court, field, or diamond, you have to play the part ‚ but you have to look it, too. That’s why plain sports uniforms won’t make the cut if you want your team to look confident and be the envy of the competition.</Typography></Box>
            <Box width="100%" sx={{ gap: '15px', borderTop: '1px solid #E0E0E0', paddingBottom: '2rem' }} display='flex' flexDirection='column'>
              <Typography sx={{ width: "100%", fontFamily: 'Lato', color: '#E0E0E0', paddingTop: '2rem', fontSize: "16px", fontWeight: '500', display: "flex", justifyContent: 'flex-start' }}><span style={{ width: "32px", display: 'flex', justifyContent: "center" }}><Image src={mail} alt='mail' /></span>AllenSportswear@example.com</Typography>
              <Typography sx={{ width: "100%", fontFamily: 'Lato', color: '#E0E0E0', fontSize: "16px", fontWeight: '500', display: "flex", justifyContent: 'flex-start' }}><span style={{ width: "32px", display: 'flex', justifyContent: "center" }}><Image src={phone} alt='phone' /></span>AllenSportswear407-641-4900</Typography>
            </Box>
          </Box></Grid2>

        <Grid2 size={{ xs: 12, md: 2 }} display='flex' justifyContent={{ xs: "start", md: "center" }}>
          <Box width="150px" height='208px' display="flex" flexDirection='column' sx={{ gap: '10px' }}>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: "600", color: '#FEFEFE', marginBottom: "0.5rem" }}>Your Account</Typography>
            {youraccount.map((item, index) => {
              return (
                <Link href={item.path} style={{ gap: "6px", textDecoration: 'none', fontFamily: 'Lato', fontSize: '16px', color: '#E0E0E0', fontWeight: '400', height: '24px', width: "150px" }}>{item.title}</Link>
              )
            })}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }} display='flex' justifyContent={{ xs: "start", md: "center" }}>
          <Box width="150px" height='208px' display="flex" flexDirection='column' sx={{ gap: '10px' }}>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: "600", color: '#FEFEFE', marginBottom: "0.5rem" }}>Your Company</Typography>
            {yourcompany.map((item, index) => {
              return (
                <Link href={item.path} style={{ gap: "6px", fontFamily: 'Lato', textDecoration: 'none', fontSize: '16px', color: '#E0E0E0', fontWeight: '400', height: '24px', width: "150px" }}>{item.title}</Link>
              )
            })}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }} display='flex' justifyContent={{ xs: "start", md: "center" }}>
          <Box width="150px" height='208px' display="flex" flexDirection='column' sx={{ gap: '10px' }}>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: "600", color: '#FEFEFE', marginBottom: "0.5rem" }}>Our Community</Typography>
            {ourcommunity.map((item, index) => {
              return (
                <Link href={item.path} style={{ gap: "6px", fontFamily: 'Lato', textDecoration: 'none', fontSize: '16px', color: '#E0E0E0', fontWeight: '400', height: '24px', width: "150px" }}>{item.title}</Link>
              )
            })}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }} display='flex' justifyContent={{ xs: "start", md: "center" }}>
          <Box width="150px" height='208px' display="flex" flexDirection='column' sx={{ gap: '10px' }}>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Lato', fontWeight: "600", color: '#FEFEFE', marginBottom: "0.5rem" }}>Shop Easy</Typography>
            {shopeasy.map((item, index) => {
              return (
                <Link href={item.path} style={{ gap: "6px", fontFamily: 'Lato', textDecoration: 'none', fontSize: '16px', color: '#E0E0E0', fontWeight: '400', height: '24px', width: "180px" }}>{item.title}</Link>
              )
            })}
          </Box>
        </Grid2>
      </Grid2>

      <Box width="100%" display="flex" justifyContent='center' height={{ xs: '4rem', md: 'auto' }} alignItems={{ xs: 'baseline', md: 'center' }} sx={{ marginTop: '2rem' }} ><Typography sx={{ fontSize: ' 16px', fontWeight: '500', fontFamily: 'Lato', color: '#FEFEFE' }}>© 2020 Allen Sportswear, Inc. All Rights Reserved</Typography></Box>
    </Box>
  )
}

export default Footer
