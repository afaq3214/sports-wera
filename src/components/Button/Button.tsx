import React from 'react'
import Button from '@mui/material/Button';

interface Props {
  width: string,
  height: string,
  title: string,
  onClick: () => void,
  bgColor?: string,
  isBgColor: boolean,
  color: string,
  border: string,
  fontsize: string,
  xh: string
}

const CustomButton = ({ bgColor, height, onClick, fontsize, title, width, isBgColor, color, border, xh }: Props) => {
  return (
    <Button variant='outlined' sx={{
      width: width,
      height: { xs: xh, md: height },
      backgroundColor: isBgColor ? bgColor : 'transparent',
      borderRadius: '6px',
      color: color,
      border: border,
      fontSize: { xs: '10px', md: fontsize },
      textTransform: 'capitalize',
      padding: { xs: '3px', md: "5px" },
      // padding: '16px 32px 16px 32px',
      '&:hover': { color: isBgColor ? bgColor : 'black', backgroundColor: color, border: color }, fontWeight: '500'

    }}>{title}</Button>
  )
}

export default CustomButton
