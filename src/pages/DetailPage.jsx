import React from 'react'
import styles from "./Base.module.css"
import Navbar from "../components/navbar/Navbar"
import Details from '../components/products/[slug]/Details'
import Footer from "../components/footer/Footer";

const DetailPage = () =>
{
    return (
        <div>
            <Navbar />
            <Details />
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default DetailPage