import React from 'react'
import styles from "./System.module.css"
// import { useState, useEffect } from 'react'
import { TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer } from '@mui/material'


const UserManage = () =>
{

    // const [ users, setUsers ] = useState( [] );

    const headers = [ "Mã số", "Tài khoản", "Họ", "Tên", "Địa chỉ", ]
    const users = [
        {
            id: 1,
            username: "thuc@gmail.com",
            firstName: "Đặng Hoàng",
            lastName: "Thức",
            address: "123 đường Nguyễn Văn A phường Nguyễn văn B Quận Nam Từ Liên Tp HCM"

        },
        {
            id: 2,
            username: "thuc@gmail.com",
            firstName: "Đặng Hoàng",
            lastName: "Thức",
            address: "123 đường Nguyễn Văn A phường Nguyễn văn B Quận Nam Từ Liên Tp HCM"

        },
        {
            id: 3,
            username: "thuc@gmail.com",
            firstName: "Đặng Hoàng",
            lastName: "Thức",
            address: "123 đường Nguyễn Văn A phường Nguyễn văn B Quận Nam Từ Liên Tp HCM"

        },
    ]


    // useEffect( () =>
    // {
    //     async function fetchUsers ()
    //     {
    //         try
    //         {
    //             const response = await fetch( 'https://jsonplaceholder.typicode.com/users' ); // Thay URL API thực tế vào đây
    //             const data = await response.json();
    //             setUsers( data ); // Giả sử dữ liệu trả về là một mảng các đối tượng user
    //         } catch ( error )
    //         {
    //             console.error( 'Error fetching users:', error );
    //         }
    //     }

    //     fetchUsers();
    // }, [] );

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
                            <TableBody className={styles.table}>
                                {users.map( ( user ) => (
                                    <TableRow
                                        key={user.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align='center'>
                                            {user.id}
                                        </TableCell>
                                        <TableCell align="center">{user.username}</TableCell>
                                        <TableCell align="center">{user.firstName}</TableCell>
                                        <TableCell align="center">{user.lastName}</TableCell>
                                        <TableCell align="center">{user.address}</TableCell>

                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default UserManage