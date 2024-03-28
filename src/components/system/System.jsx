import React from 'react'
import styles from "./System.module.css"
import ProductManage from './ProductManage'
import Menu from './Menu'
import UserManage from './UserManage'
import { useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const System = () =>
{

    const current = useSelector( ( state ) => state.manages.currentForm );

    let manageComponent;
    switch ( current )
    {
        case 'product':
            manageComponent = <ProductManage />;
            break;
        case 'user':
            manageComponent = <UserManage />;
            break;
        default:
            manageComponent = null;
    }

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.out}>
                <LogoutIcon />
            </Link>
            <div className={styles.left}>
                <Menu />
            </div>
            <div className={styles.right}>
                {manageComponent}
            </div>
        </div>
    )
}

export default System