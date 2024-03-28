import { Button, IconButton, TextField, Box, Stack } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import UserServices from '../../services/UserServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import styles from "./AuthForm.module.css"
import { useDispatch } from 'react-redux'
import { setCurrentForm } from '../../redux/formsSlice'

const Register = () =>
{
    const [ isLoggingIn, setIsLoggingIn ] = useState( false )
    const [ errorMessage, setErrorMessage ] = useState( '' )
    const [ showPassword, setShowPassword ] = useState( false )
    const [ showConfirmPassword, setShowConfirmPassword ] = useState( false )
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleLoginClick = () =>
    {
        dispatch( setCurrentForm( 'login' ) );
    };

    const handleForgotPasswordClick = () =>
    {
        dispatch( setCurrentForm( 'changepassword' ) );
    };

    const register = useFormik( {
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastname: '',
            address: ''
        },
        validationSchema: Yup.object( {
            username: Yup.string().required( 'Bạn không được để trống phần này' ),
            password: Yup.string().required( 'Bạn không được để trống phần này' ),
            confirmPassword: Yup.string().oneOf( [ Yup.ref( "password" ) ], "Xác nhận mật khẩu không chính xác" ).required( 'Bạn không được để trống phần này' ),
            firstName: Yup.string().required( 'Bạn không được để trống phần này' ),
            lastname: Yup.string().required( 'Bạn không được để trống phần này' ),
            address: Yup.string().required( 'Bạn không được để trống phần này' ),
        } ),
        onSubmit: async ( values ) =>
        {
            setIsLoggingIn( !isLoggingIn )
            setErrorMessage( errorMessage )
            try
            {
                const result = await UserServices.registerService( values )
                if ( result && result.accessToken )
                {
                    // Cookies.set( 'accessToken', result.accessToken )
                    toast.success( 'Đăng nhập thành công' )
                    navigate( '/' )
                } else
                {
                    setErrorMessage( 'Không thể nhận token từ server' )
                    toast.error( 'Không thể nhận token từ server' )
                }
            } catch ( error )
            {
                const message = error.response ? error.response.data.message : error.message || 'An unexpected error occurred.'
                setErrorMessage( message )
                toast.error( message )
            } finally
            {
                setIsLoggingIn( false )
            }
        }
    } )

    return (
        <Box component="form" onSubmit={register.handleSubmit} className={styles.parent}>
            <div className={styles.title}>Đăng Kí</div>
            <div className={styles.inputForm}>
                <Stack spacing={2}>
                    <TextField
                        type="text"
                        placeholder="Tài khoản"
                        name="username"
                        fullWidth
                        value={register.values.username}
                        onChange={register.handleChange}
                        error={register.touched.username && Boolean( register.errors.username )}
                        helperText={register.touched.username && register.errors.username}
                    />
                    <Stack spacing={2} direction="row">
                        <TextField
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Mật khẩu"
                            name="password"
                            fullWidth
                            value={register.values.password}
                            onChange={register.handleChange}
                            error={register.touched.password && Boolean( register.errors.password )}
                            helperText={register.touched.password && register.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword( !showPassword )} edge="end">
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                )
                            }}
                        />
                        <TextField
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Xác nhận mật khẩu"
                            name="confirmPassword"
                            fullWidth
                            value={register.values.confirmPassword}
                            onChange={register.handleChange}
                            error={register.touched.confirmPassword && Boolean( register.errors.confirmPassword )}
                            helperText={register.touched.confirmPassword && register.errors.confirmPassword}
                            InputProps={{
                                endAdornment: (
                                    <IconButton aria-label="toggle confirmPassword visibility" onClick={() => setShowConfirmPassword( !showConfirmPassword )} edge="end">
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                )
                            }}
                        />
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <TextField
                            type="text"
                            placeholder="Họ tên lót"
                            name="firstName"
                            fullWidth
                            value={register.values.firstName}
                            onChange={register.handleChange}
                            error={register.touched.firstName && Boolean( register.errors.firstName )}
                            helperText={register.touched.firstName && register.errors.firstName}
                        />
                        <TextField
                            type="text"
                            placeholder="Tên"
                            name="lastName"
                            fullWidth
                            value={register.values.lastname}
                            onChange={register.handleChange}
                            error={register.touched.lastname && Boolean( register.errors.lastname )}
                            helperText={register.touched.lastname && register.errors.lastname}
                        />
                    </Stack>
                    <TextField
                        type="text"
                        placeholder="Địa chỉ"
                        name="address"
                        fullWidth
                        value={register.values.address}
                        onChange={register.handleChange}
                        error={register.touched.address && Boolean( register.errors.address )}
                        helperText={register.touched.address && register.errors.address}
                    />
                </Stack>
                <div className={styles.button}>
                    <Button className={styles.btn} type='submit' variant='contained'>Đăng kí</Button>
                </div>
                <div className={styles.links}>
                    <div className={styles.link} onClick={handleLoginClick}>
                        Đăng nhập ngay
                    </div>
                    <div className={styles.link} onClick={handleForgotPasswordClick}>
                        Quên mật khẩu
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Register
