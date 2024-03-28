import React from 'react'
import styles from "./Details.module.css"
import test from "../../../img/test.webp"

const Image = () =>
{
    return (
        <img className={styles.img} src={test} alt='' />
    )
}

export default Image