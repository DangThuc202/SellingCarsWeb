import React from 'react'
import styles from "./Menu.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import h1 from "../../img/menu/h1.svg"
import h2 from "../../img/menu/h2.svg"
import h3 from "../../img/menu/h3.svg"
import h4 from "../../img/menu/h4.svg"

const Menu = () =>
{

    const [ showCars, setShowCars ] = useState( false )
    const [ showCountries, setShowCountries ] = useState( false )
    const [ showPrices, setShowPrices ] = useState( false )
    const [ showColors, setShowColors ] = useState( false )

    const cars = [ "Toyota", "Volkswagen", "Honda", "Huyndai", "Ford", "Nissan", "Kia", "Chevrolet", "Mercedez - Benz", "BMW" ]
    const countries = [ "Mỹ", "Nhật Bản", "Pháp", "Đức" ]
    const prices = [ `Dưới 500 triệu`, "Từ 500 - 700 triệu", "Từ 700 - 1 tỷ", "Trên 1 tỷ" ]
    const colors = [ "Đỏ", "Đen", "Xám", "Trắng", "Xanh" ]


    return (
        <div className={styles.container}>
            <div className={styles.title}>Bộ lọc</div>
            <div className={styles.menu}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.info} onClick={() => setShowCars( !showCars )} >
                            <img src={h1} alt="H1" />
                            <h5>HÃNG XE</h5>
                            {showCars ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                        </div>
                        {showCars && <div className={styles.parent}>
                            {cars.map( ( car, index ) => (
                                <div className={styles.child} key={index}>{car} </div>
                            ) )}
                        </div>}
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info} onClick={() => setShowCountries( !showCountries )}>
                            <img src={h2} alt="H2" />
                            <h5>QUỐC GIA</h5>
                            {showCountries ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                        </div>
                        {showCountries && <div className={styles.parent}>
                            {countries.map( ( country, index ) => (
                                <div className={styles.child} key={index}>{country}</div>
                            ) )}
                        </div>}
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info} onClick={() => setShowPrices( !showPrices )}>
                            <img src={h3} alt="H3" />
                            <h5>GIÁ </h5>
                            {showPrices ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                        </div>
                        {showPrices && <div className={styles.parent}>
                            {prices.map( ( price, index ) => (
                                <div className={styles.child} key={index}>{price}</div>
                            ) )}
                        </div>}
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info} onClick={() => setShowColors( !showColors )}>
                            <img src={h4} alt="H4" />
                            <h5>MÀU SẮC </h5>
                            {showColors ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                        </div>
                        {showColors && <div className={styles.parent}>
                            {colors.map( ( color, index ) => (
                                <div className={styles.child} key={index}>{color}</div>
                            ) )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu