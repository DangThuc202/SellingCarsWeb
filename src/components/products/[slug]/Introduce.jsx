import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Details.module.css"

const Introduce = () =>
{
    const { productId } = useParams();
    const [ product, setProduct ] = useState( null );

    useEffect( () =>
    {
        const fetchProductById = async () =>
        {
            try
            {
                const response = await fetch( `http://localhost/php/server/api/product/getById.php?id=${ productId }` );
                const data = await response.json();
                setProduct( data );
            } catch ( error )
            {
                console.error( 'Error fetching product:', error );
            }
        };

        fetchProductById();
    }, [ productId ] );

    return (
        <div>
            {product ? (
                <div className={styles.info}>
                    <div className={styles.title}>Xe {product.name}</div>
                    <div className={styles.price}>{product.price} $</div>
                    <div className={styles.list}>
                        <div className={styles.items}>
                            <div className={styles.itemsLeft}>
                                <div className={styles.text}><strong>Hãng xe :</strong> {product.name}</div>
                                <div className={styles.text}><strong>Xuất xứ :</strong> {product.origin}</div>
                                <div className={styles.text}><strong>Màu sắc :</strong> {product.color}</div>
                            </div>
                            <div className={styles.itemsRight}>
                                <div className={styles.text}><strong>Chiều ngang :</strong> {product.width} (cm)</div>
                                <div className={styles.text}><strong>Chiều cao &emsp;:</strong> {product.height} (cm)</div>
                                <div className={styles.text}><strong>Trọng lượng :</strong> {product.weight} (kg)</div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.description}>{product.description}</div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Introduce