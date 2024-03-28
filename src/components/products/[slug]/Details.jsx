import React from 'react'
import styles from "./Details.module.css"
import Image from "./Image"
import Introduce from './Introduce'

const Details = () =>
{
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image />
            </div>
            <div className={styles.right}>
                <Introduce />
            </div>
        </div>
    )
}

export default Details