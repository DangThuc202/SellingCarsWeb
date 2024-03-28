import React from 'react'
import styles from "./System.module.css"
import { useDispatch } from 'react-redux'
import { setCurrentForm } from '../../redux/managesSlice'

const Menu = () =>
{

    const dispatch = useDispatch()

    const handleProductManageClick = () =>
    {
        dispatch( setCurrentForm( 'product' ) );
    };

    const handleUserManageClick = () =>
    {
        dispatch( setCurrentForm( 'user' ) );
    };

    return (
        <div className={styles.parent}>
            <div className={styles.menu}>
                <div className={styles.title}>Hệ thống quản lý</div>
                <div className={styles.list}>
                    <div className={styles.product}>
                        <div onClick={handleProductManageClick} className={styles.label}>Quản lý sản phẩm</div>
                    </div>
                    <div className={styles.product}>
                        <div onClick={handleUserManageClick} className={styles.label}>Quản lý người dùng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu