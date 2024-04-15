import React from 'react'
import styles from "./System.module.css"
import { useState, useEffect } from 'react'
import { TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer } from '@mui/material'


const UserManage = () =>
{

    const headers = [ "Mã số", "Tài khoản", "Họ", "Tên", "Địa chỉ", ]

    const [ users, setUsers ] = useState( null )

    useEffect( () =>
    {
        const fetchData = async () =>
        {
            try
            {
                const response = await fetch( 'http://localhost/php/server/api/user/read.php' );
                const jsonData = await response.json();
                setUsers( jsonData );
            } catch ( error )
            {
                console.error( 'Error fetching data:', error );
            }
        };
        fetchData();
    }, [] );

    return (
        <div className={styles.parent}>
            <div className={styles.manage}>
                <div className={styles.sign}>Hệ Thống Quản Lý</div>
                <div className={styles.body}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className={styles.head}>
                                    {headers.map( ( header, index ) => (
                                        <TableCell key={index} className={styles.head} align='center'>{header}</TableCell>
                                    ) )}
                                </TableRow>
                            </TableHead>
                            {users && users.length > 0 && (
                                <TableBody className={styles.table}>
                                    {users.map( ( user ) => (
                                        <TableRow
                                            key={user.userId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {user.userId}
                                            </TableCell>
                                            <TableCell align="center">{user.username}</TableCell>
                                            <TableCell align="center">{user.firstname}</TableCell>
                                            <TableCell align="center">{user.lastname}</TableCell>
                                            <TableCell align="center">{user.address}</TableCell>
                                        </TableRow>
                                    ) )}
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default UserManage