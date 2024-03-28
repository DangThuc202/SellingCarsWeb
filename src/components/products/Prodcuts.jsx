import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./Products.module.css"
import test from "../../img/test.webp"
import h1 from "../../img/menu/h1.svg"
import h2 from "../../img/menu/h2.svg"
import h3 from "../../img/menu/h3.svg"
import h4 from "../../img/menu/h4.svg"

const Prodcuts = () =>
{

    const icons = [ h1, h2, h3, h4 ]
    const [ users, setUsers ] = useState( [] );

    useEffect( () =>
    {
        async function fetchUsers ()
        {
            try
            {
                const response = await fetch( 'https://jsonplaceholder.typicode.com/users' ); // Thay URL API thực tế vào đây
                const data = await response.json();
                setUsers( data ); // Giả sử dữ liệu trả về là một mảng các đối tượng user
            } catch ( error )
            {
                console.error( 'Error fetching users:', error );
            }
        }

        fetchUsers();
    }, [] );

    return (
        <div className={styles.container}>
            {/* <div className={styles.list}>
                <div className={styles.item}>
                    <img src={test} className={styles.img} alt='' />
                    <span className={styles.title}>Xe ABC</span>
                    <div className={styles.parent}>
                        <div className={styles.children}>
                            <img src={h1} alt='' />
                            <span className={styles.name}>Mercedez - Benz</span>
                        </div>
                        <div className={styles.children}>
                            <img src={h2} alt='' />
                            <span className={styles.name}>Nhật Bản</span>
                        </div>
                        <div className={styles.children}>
                            <img src={h4} alt='' />
                            <span className={styles.name}>Đỏ</span>
                        </div>
                        <div className={styles.children}>
                            <LocalFireDepartmentOutlinedIcon className={styles.icon} />
                            <span className={styles.name}>
                                <StarBorderOutlinedIcon className={styles.icon} />
                                <StarBorderOutlinedIcon className={styles.icon} />
                                <StarBorderOutlinedIcon className={styles.icon} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.price}>
                        749.000.000 VND
                    </div>
                </div>
                {ids.map( ( id, index ) => (
                    <div className={styles.item} key={index}>
                        {imgs.map( ( img, index ) => (
                            <img src={img} className={styles.img} alt='' key={index} />
                        ) )}
                        {cars.map( ( car, index ) => (
                            <span className={styles.title} key={index}>{car}</span>
                        ) )}
                        <div className={styles.parent}>
                            {icons.map( ( icon, index ) => (
                                <div className={styles.children}>
                                    <img src={icon} alt='' key={index} />
                                    {cars.map( ( car, index ) => (
                                        <span className={styles.name} key={index}>{car}</span>
                                    ) )}
                                </div>
                            ) )}
                        </div>
                    </div>
                ) )}
            </div> */}
            <div className={styles.list}>
                {users.map( ( user ) => (
                    <div className={styles.item} key={user.id}>
                        <img src={test} alt='' />
                        <div className={styles.title}>{user.username}</div>
                        <div className={styles.parent}>
                            {icons.map( ( icon, index ) => (
                                <div className={styles.children}>
                                    <img src={icon} alt='' key={index} />
                                    <span className={styles.name} key={user.id}>{user.id}</span>
                                </div>
                            ) )}
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Prodcuts