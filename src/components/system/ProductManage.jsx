import React from 'react'
import styles from "./System.module.css"
// import { useState, useEffect } from 'react'
import { TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer } from '@mui/material'


const ProductManage = () =>
{

    // const [ users, setUsers ] = useState( [] );

    const headers = [ "Mã số", "Hãng xe", "Xuất xứ", "Chỗ ngồi", "Hộp số", "Nhiên liệu", "Màu sắc", "Chiều ngang", "Chiều cao", "Trọng lượng" ]
    const cars = [
        {
            id: 1,
            hangxe: "Mercedez-Ben",
            xuatxu: "Nhật Bàn",
            chongoi: 36,
            hopso: "Tự động",
            nhienlieu: "Xăng",
            mausac: "Trắng",
            chieungang: "200cm",
            chieucao: "100cm",
            trongluong: "500kg",
        },
        {
            id: 2,
            hangxe: "Volkswagen",
            xuatxu: "Nhật Bàn",
            chongoi: 36,
            hopso: "Tự động",
            nhienlieu: "Xăng",
            mausac: "Trắng",
            chieungang: "200cm",
            chieucao: "100cm",
            trongluong: "500kg",
        },
        {
            id: 3,
            hangxe: "Mercedez-Ben",
            xuatxu: "Nhật Bàn",
            chongoi: 36,
            hopso: "Tự động",
            nhienlieu: "Xăng",
            mausac: "Trắng",
            chieungang: "200cm",
            chieucao: "100cm",
            trongluong: "500kg",
        }

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
                                <TableRow>
                                    {headers.map( ( header, index ) => (
                                        <TableCell key={index} className={styles.head} align='center'>{header}</TableCell>
                                    ) )}
                                </TableRow>
                            </TableHead>
                            <TableBody className={styles.table}>
                                {cars.map( ( car ) => (
                                    <TableRow
                                        key={car.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align='center'>
                                            {car.id}
                                        </TableCell>
                                        <TableCell align="center">{car.hangxe}</TableCell>
                                        <TableCell align="center">{car.xuatxu}</TableCell>
                                        <TableCell align="center">{car.chongoi}</TableCell>
                                        <TableCell align="center">{car.hopso}</TableCell>
                                        <TableCell align="center">{car.nhienlieu}</TableCell>
                                        <TableCell align="center">{car.mausac}</TableCell>
                                        <TableCell align="center">{car.chieungang}</TableCell>
                                        <TableCell align="center">{car.chieucao}</TableCell>
                                        <TableCell align="center">{car.trongluong}</TableCell>
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

export default ProductManage