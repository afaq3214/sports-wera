import Lock from "../../assets/Header/Svg/Lock"
import { Box, Typography } from "@mui/material"
import { TextField } from '@mui/material'
import CustomButton from '../Button/Button';
import Link from "next/link";
import Googlepay from '../../assets/PyementMethods/download-removebg-preview (6) 1.png'
import paypal from '../../assets/PyementMethods/download-removebg-preview.png'
import applepay from '../../assets/PyementMethods/download-removebg-preview (2).png'
import visa from '../../assets/PyementMethods/download-removebg-preview (3).png'
import master from '../../assets/PyementMethods/download-removebg-preview (1).png'
import stripe from '../../assets/PyementMethods/download-removebg-preview (4).png'
import Image from "next/image";


const Section2 = () => {

    const PaymentMethods = [{
        id: 1,
        Name: 'Google Pay',
        img: Googlepay
    }, {
        id: 2,
        Name: 'Pay Pal',
        img: paypal
    }, {
        id: 3,
        Name: 'Apple Pay',
        img: applepay
    }, {
        id: 4,
        Name: 'Visa',
        img: visa
    }, {
        id: 5,
        Name: 'Master Card',
        img: master
    }, {
        id: 6,
        Name: 'Stripe',
        img: stripe
    }]

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '34px' }}>
            <Box sx={{ width: { xs: "90%", md: "70%" }, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Typography sx={{
                    display: 'flex',
                    color: "#111111",
                    fontFamily: "Segoe UI",
                    fontWeight: "700",
                    fontSize: { xs: "16px", sm: "24px", md: "28px" },
                }}><span style={{ marginRight: '0.5rem', lineHeight: '0' }}><Lock /></span> ORDER SUMMARY</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{
                            display: 'flex',
                            color: "#2F2F2F",
                            fontFamily: 'Lato',
                            fontWeight: "400",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        }}>Total product cost </Typography>
                        <Typography sx={{
                            display: 'flex',
                            color: "#2F2F2F",
                            fontFamily: "Lato",
                            fontWeight: "400",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        }}>$99 </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{
                            display: 'flex',
                            color: "#2F2F2F",
                            fontFamily: "Lato",
                            fontWeight: "400",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        }}>Total delivery cost </Typography>
                        <Typography sx={{
                            display: 'flex',
                            color: "#2F2F2F",
                            fontFamily: "Lato",
                            fontWeight: "400",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        }}>Free </Typography>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '100px', alignItems: 'center', borderBottom: "0.6px solid #6A6A6A", borderTop: "0.6px solid #6A6A6A", padding: '8px, 0px, 24px, 0px' }}>
                    <Typography sx={{
                        display: 'flex',
                        color: "#2F2F2F",
                        fontFamily: "Lato",
                        fontWeight: "400",
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    }}><span style={{ fontWeight: '700', width: '0px' }}>Total</span> <br></br>(Inclusive of all taxes) </Typography>
                    <Typography sx={{
                        display: 'flex',
                        color: "#2F2F2F",
                        fontFamily: "Lato",
                        fontWeight: "400",
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    }}>$99 </Typography>
                </Box>

            </Box>
            <Box sx={{ width: { xs: "90%", md: "70%" }, display: 'flex', flexDirection: 'column', borderBottom: "0.4px solid #6A6A6A", height: "150px" }}>
                <Typography sx={{
                    display: 'flex',
                    color: "#111111",
                    fontFamily: "Lato",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "16px", md: "18px" },
                }}>Apply a promotion code</Typography>
                <Typography sx={{
                    display: 'flex',
                    color: "#111111",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    fontSize: { xs: "16px", sm: "16px", md: "16px" },
                }}>Remove any dashes or spaces before hitting apply</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Enter your promo code"
                        sx={{
                            width: { xs: '70%', md: '80%', marginRight: { xs: 'none', md: '1rem' }, height: '150px' },
                            border: 'none',
                            height: { xs: '48px', md: '48px' },
                            borderRadius: "6px",
                            '& .MuiOutlinedInput-root': {
                                height: { xs: '48px', md: '54px' }, backgroundColor: '#EFEFEF', color: 'black',
                                '& fieldset': {
                                    // borderColor: '#E0E0E0', // Default border color
                                },
                                '&:hover fieldset': {
                                    border: '1px solid black', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    border: '1px solid black', // Border color when focused
                                },
                                '& input::placeholder': {
                                    color: 'black',
                                    opacity: 1,
                                    border: "none",
                                },
                            },
                        }}

                    />
                    <CustomButton xh='auto' fontsize='18px' title='Apply' bgColor='#D71C24' width='92px' height='54px' isBgColor={true} border='none' color='white' onClick={() => { }} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: { xs: "90%", md: "70%" } }}>
                <CustomButton xh='46px' fontsize='18px' title='Continue Shopping' bgColor='White' width='45%' height='54px' isBgColor={true} border='2px solid #D71C24' color='#D71C24' onClick={() => { }} />
                <CustomButton xh='46px' fontsize='18px' title='Proceed to Checkout' bgColor='#D71C24' width='45%' height='54px' isBgColor={true} border='none' color='white' onClick={() => { }} />
            </Box>
            <Box width={{ xs: "90%", md: "70%" }}>
                <Typography sx={{

                    color: "#111111",
                    fontFamily: "Lato",
                    fontWeight: "400",
                    fontSize: { xs: "16px", sm: "16px", md: "16px" },
                }}>By continuing to Checkout, you are agreeing to our <Link href="/Cart" style={{ fontWeight: '600', color: "#111111", }}>Terms of Use</Link> and <Link href="/Cart" style={{ fontWeight: '600', color: "#111111", }}>Privacy Policy</Link>  </Typography>
            </Box>
            <Box width={{ xs: "90%", md: "70%" }} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography sx={{

                    color: "#000000",
                    fontFamily: "Lato",
                    fontWeight: "600",
                    fontSize: { xs: "16px", sm: "16px", md: "20px" },
                }}>Accepted Payment Methods</Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>{PaymentMethods.map((item) => { return (<Image key={item.id} src={item.img} alt={item.Name} />) })}</Box>
            </Box></Box>
    )
}

export default Section2
