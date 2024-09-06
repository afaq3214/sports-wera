import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function LayoutWrapper(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
