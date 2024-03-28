import React from 'react'
import styles from "./Image.module.css"
import hinh1 from "../../img/underNavbar/hinh1.webp"
import hinh2 from "../../img/underNavbar/hinh2.webp"
import hinh4 from "../../img/underNavbar/hinh4.webp"
import hinh5 from "../../img/underNavbar/hinh5.webp"

const Image = () =>
{

    const images = [ hinh1, hinh2, hinh4, hinh5 ]

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                {images.map( ( image, index ) => (
                    <img src={image} key={index} className={styles.image} alt='' />
                ) )}
            </div>
        </div>
    )
}

export default Image