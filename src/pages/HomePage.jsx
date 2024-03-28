import React from 'react'
import styles from "./Base.module.css"
import Navbar from "../components/navbar/Navbar"
import Image from "../components/navbar/Image";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Prodcuts from '../components/products/Prodcuts';

export const HomePage = () =>
{
    return (
        <div>
            <Navbar />
            <Image />
            <div className={styles.container}>
                <div className={styles.container1}>
                    <Menu />
                </div>
                <Prodcuts />
            </div>
            <Footer />
        </div>
    )
}
