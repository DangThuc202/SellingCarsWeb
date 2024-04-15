import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./Products.module.css"
import test from "../../img/test.webp"
import h1 from "../../img/menu/h1.svg"
import h2 from "../../img/menu/h2.svg"
import h3 from "../../img/menu/h3.svg"
import h4 from "../../img/menu/h4.svg"
import { Link } from 'react-router-dom'

const Prodcuts = () =>
{

    const icons = [ h1, h2, h3, h4 ]
    const [ products, setProducts ] = useState( [] );

    useEffect( () =>
    {
        async function fetchProducts ()
        {
            try
            {
                const response = await fetch( 'http://localhost/php/server/api/product/read.php' );
                const data = await response.json();
                setProducts( data );
            } catch ( error )
            {
                console.error( 'Error fetching products:', error );
            }
        }

        fetchProducts();
    }, [] );

    return (
        <div className={styles.container}>
            {products && products.length > 0 && (
                <div className={styles.list}>
                    {products.map( ( product ) => (
                        <Link to={`/san-pham/${ product.productId }`} className={styles.item} key={product.productId}>
                            <img className={styles.imgItem} src={test} alt='' />
                            <div className={styles.title}>{product.name}</div>
                            <div className={styles.parent}>
                                {icons.map( ( icon, iconIndex ) => (
                                    <div className={styles.children} key={iconIndex}>
                                        <img src={icon} alt='' />
                                        <span className={styles.name}>{product[ Object.keys( product )[ iconIndex + 1 ] ]}</span>
                                    </div>
                                ) )}
                            </div>
                        </Link>
                    ) )}
                </div>
            )}
        </div>
    )
}

export default Prodcuts