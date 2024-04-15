import styles from "./System.module.css"
import { Stack, TextField, Button, Box } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const UpdateForm = () =>
{

    const form = useFormik( {
        initialValues: {
            name: '',
            origin: '',
            price: '',
            color: '',
            width: '',
            height: '',
            weight: '',
            image: "",
            description: ''
        },
        validationSchema: Yup.object( {
            name: Yup.string().required( 'Bạn không được để trống phần này' ),
            origin: Yup.string().required( 'Bạn không được để trống phần này' ),
            price: Yup.string().required( 'Bạn không được để trống phần này' ),
            color: Yup.string().required( 'Bạn không được để trống phần này' ),
            width: Yup.string().required( 'Bạn không được để trống phần này' ),
            height: Yup.string().required( 'Bạn không được để trống phần này' ),
            weight: Yup.string().required( 'Bạn không được để trống phần này' ),
            description: Yup.string().required( 'Bạn không được để trống phần này' ),
        } ),
        onSubmit: async ( values ) =>
        {
            try
            {
                const response = await fetch( 'http://localhost/php/server/api/product/create1.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( values )
                } );

                const result = await response.json();
                console.log( result );

                if ( result.message === 'Product create successfully' )
                {
                    alert( "Tạo sản phẩm thành công" );
                } else
                {
                    alert( "Có lỗi khi tạo sản phẩm" );
                }
            } catch ( error )
            {
                alert( "Có lỗi khi tạo sản phẩm" );
                console.log( error );
            }
        },
    } )


    return (
        <Box component="form" onSubmit={form.handleSubmit} className={styles.form}>
            <div className={styles.formTitle}>Thêm xe</div>
            <div className={styles.formList}>
                <Stack direction="row" spacing={3}>
                    <TextField
                        type="text"
                        label="Hãng xe"
                        name="name"
                        fullWidth
                        value={form.values.name}
                        onChange={form.handleChange}
                        error={form.touched.name && Boolean( form.errors.name )}
                        helperText={form.touched.name && form.errors.name}
                    />
                    <TextField
                        type="text"
                        label="Xuất xứ"
                        name="origin"
                        fullWidth
                        value={form.values.origin}
                        onChange={form.handleChange}
                        error={form.touched.origin && Boolean( form.errors.origin )}
                        helperText={form.touched.origin && form.errors.origin}
                    />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <TextField
                        type="number"
                        label="Giá ($) (tối thiểu 1000$)"
                        inputProps={{ min: 1000 }}
                        name="price"
                        fullWidth
                        value={form.values.price}
                        onChange={form.handleChange}
                        error={form.touched.price && Boolean( form.errors.price )}
                        helperText={form.touched.price && form.errors.price}
                    />
                    <TextField
                        type="text"
                        label="Màu sắc"
                        name="color"
                        fullWidth
                        value={form.values.color}
                        onChange={form.handleChange}
                        error={form.touched.color && Boolean( form.errors.color )}
                        helperText={form.touched.color && form.errors.color}
                    />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <TextField
                        type="number"
                        label="Chiều ngang (cm)"
                        name="width"
                        fullWidth
                        value={form.values.width}
                        onChange={form.handleChange}
                        error={form.touched.width && Boolean( form.errors.width )}
                        helperText={form.touched.width && form.errors.width}
                    />
                    <TextField
                        type="number"
                        label="Chiều cao (cm)"
                        name="height"
                        fullWidth
                        value={form.values.height}
                        onChange={form.handleChange}
                        error={form.touched.height && Boolean( form.errors.height )}
                        helperText={form.touched.height && form.errors.height}
                    />
                    <TextField
                        type="number"
                        label="Trọng lượng (kg)"
                        name="weight"
                        fullWidth
                        value={form.values.weight}
                        onChange={form.handleChange}
                        error={form.touched.weight && Boolean( form.errors.weight )}
                        helperText={form.touched.weight && form.errors.weight}
                    />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <TextField
                        type="file"
                        name="image"
                        fullWidth
                        value={form.values.image}
                        onChange={form.handleChange}
                        error={form.touched.image && Boolean( form.errors.image )}
                        helperText={form.touched.image && form.errors.image}
                    />
                    <Button variant="contained" >Upload</Button>
                </Stack>
                <Stack>
                    <TextField
                        type="text"
                        label="Mô tả"
                        name="description"
                        fullWidth
                        value={form.values.description}
                        onChange={form.handleChange}
                        error={form.touched.description && Boolean( form.errors.description )}
                        helperText={form.touched.description && form.errors.description}
                    />
                </Stack>
            </div>
            <div className={styles.formBtns}>
                <Button className={styles.btn} id={styles.update} type='submit'>Thêm</Button>
            </div>
        </Box>
    )
}

export default UpdateForm