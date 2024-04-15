import React from 'react'
import styles from "./System.module.css"
import { useState, useEffect } from 'react'
import { TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import UpdateForm from './UpdateForm';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductManage = () =>
{

    const [ selectedProduct, setSelectedProduct ] = useState( null );
    const [ products, setProducts ] = useState( null )

    const headers = [ "Mã số", "Hãng xe", "Xuất xứ", "Giá ($)", "Màu", "Ngang (cm)", "Cao (cm)", "Nặng (kg)", "Hình" ]

    useEffect( () =>
    {
        const fetchData = async () =>
        {
            try
            {
                const response = await fetch( 'http://localhost/php/server/api/product/read.php' );
                const jsonData = await response.json();
                setProducts( jsonData );
            } catch ( error )
            {
                console.error( 'Error fetching data:', error );
            }
        };
        fetchData();
    }, [] );

    const handleDeleteClick = async ( productId ) =>
    {
        try
        {
            const response = await fetch( `http://localhost/php/server/api/product/delete.php?id=${ productId }`, {
                method: 'DELETE',
            } );
            if ( !response.ok )
            {
                throw new Error( 'Không thể xóa sản phẩm' );
            }
            else
            {
                alert( "Xóa sản phẩm thành công !" )
            }
            const updatedProducts = products.filter( product => product.productId !== productId );
            setProducts( updatedProducts );
        } catch ( error )
        {
            console.error( 'Lỗi khi xóa sản phẩm:', error );
        }
    };

    const handleEditClick = ( product ) =>
    {
        setSelectedProduct( product );
        console.log( product );
    };

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
                            {products && products.length > 0 && (
                                <TableBody className={styles.table}>
                                    {products.map( ( product ) => (
                                        <TableRow
                                            key={product.productId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {product.productId}
                                            </TableCell>
                                            <TableCell align="center">{product.name}</TableCell>
                                            <TableCell align="center">{product.origin}</TableCell>
                                            <TableCell align="center">{product.price}</TableCell>
                                            <TableCell align="center">{product.color}</TableCell>
                                            <TableCell align="center">{product.width}</TableCell>
                                            <TableCell align="center">{product.height}</TableCell>
                                            <TableCell align="center">{product.weight}</TableCell>
                                            <TableCell align="center"><img alt='' src={product.image} className={styles.img} /></TableCell>
                                            <TableCell align="center"><EditIcon onClick={() => handleEditClick( product )} className={styles.edit} /></TableCell>
                                            <TableCell align="center"><DeleteIcon onClick={() => handleDeleteClick( product.productId )} className={styles.edit} /></TableCell>
                                        </TableRow>
                                    ) )}
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                    {/* {selectedProduct && <UpdateForm />} */}
                    <UpdateForm product={selectedProduct} />
                </div>
            </div>
        </div>
    )
}

export default ProductManage