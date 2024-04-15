import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Introduce from '../components/Introduce/Introduce'
import Footer from '../components/footer/Footer'
import styles from './Base.module.css'

const IntroducePage = () =>
{
    return (
        <div>
            <Navbar />
            <div className={styles.introduce}>
                <Introduce />
            </div>
            <Footer />
        </div>
    )
}

export default IntroducePage