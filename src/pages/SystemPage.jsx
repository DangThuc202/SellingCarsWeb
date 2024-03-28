import React from 'react'
import styles from "./Base.module.css"
import System from '../components/system/System'

const SystemPage = () =>
{
    return (
        <div className={styles.system}>
            <System />
        </div>
    )
}

export default SystemPage