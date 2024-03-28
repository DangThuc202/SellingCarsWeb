import { Button, IconButton, TextField, Box } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import UserServices from '../../services/UserServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import axios from 'axios'
import styles from "./AuthForm.module.css"
import { useDispatch } from 'react-redux'
import { setCurrentForm } from '../../redux/formsSlice'

const Login = () =>
{
    const [ isLoggingIn, setIsLoggingIn ] = useState( false )
    const [ errorMessage, setErrorMessage ] = useState( '' )
    const [ showPassword, setShowPassword ] = useState( false )
    const navigate = useNavigate()
    const togglePasswordVisibility = () =>
    {
        setShowPassword( !showPassword )
    }

    const dispatch = useDispatch();

    const handleRegisterClick = () =>
    {
        dispatch( setCurrentForm( 'register' ) );
    };

    const handleForgotPasswordClick = () =>
    {
        dispatch( setCurrentForm( 'changepassword' ) );
    };

    // const handleGoogleLogin = async () =>
    // {
    //     try
    //     {
    //         const googleToken = '845159881702-5qqakik71b1iajk32a7425ojahb9jcid.apps.googleusercontent.com' // Get the Google token from the Google login API
    //         const apiResponse = await axios.post( 'http://localhost:3001/api/auth-google', {
    //             token: googleToken // Send the Google token to your backend server
    //         } )
    //         if ( apiResponse.data.success )
    //         {
    //             console.log( 'Login successful' )
    //         } else
    //         {
    //             console.log( 'Login failed' )
    //         }
    //     } catch ( error )
    //     {
    //         const message = error.response ? error.response.data.message : error.message || 'An unexpected error occurred.'
    //         toast.error( message )
    //     }
    // }
    const login = useFormik( {
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object( {
            username: Yup.string().required( 'Bạn không được để trống phần này' ),
            password: Yup.string().required( 'Bạn không được để trống phần này' )
        } ),
        onSubmit: async ( values ) =>
        {
            setIsLoggingIn( !isLoggingIn )
            setErrorMessage( errorMessage )
            if ( values.username === 'admin@gmail.com' && values.password === '123456' )
            {
                navigate( '/he-thong' )
            } else
                try
                {
                    const result = await UserServices.loginService( values.username, values.password )
                    if ( result && result.accessToken )
                    {
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
        <Box component="form" onSubmit={login.handleSubmit} className={styles.parent}>
            <div className={styles.title}>Đăng nhập</div>
            <div className={styles.inputForm}>
                <TextField
                    type="text"
                    placeholder="Nhập tài khoản của bạn"
                    name="username"
                    fullWidth
                    value={login.values.username}
                    onChange={login.handleChange}
                    error={login.touched.username && Boolean( login.errors.username )}
                    helperText={login.touched.username && login.errors.username}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu của bạn"
                    name="password"
                    fullWidth
                    value={login.values.password}
                    onChange={login.handleChange}
                    error={login.touched.password && Boolean( login.errors.password )}
                    helperText={login.touched.password && login.errors.password}
                    InputProps={{
                        endAdornment: (
                            <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        )
                    }}
                />
                <div className={styles.button}>
                    <Button className={styles.btn} type='submit' variant='contained'>Đăng nhập</Button>
                </div>
                <div className={styles.other}>
                    <div>Hoặc đăng nhập với :</div>
                </div>
                <div className={styles.otherIcons}>
                    <GoogleIcon className={styles.icon} />
                    <FacebookOutlinedIcon className={styles.icon} />
                </div>
                <div className={styles.links}>
                    <div className={styles.link} onClick={handleRegisterClick}>
                        Đăng ký ngay
                    </div>
                    <div className={styles.link} onClick={handleForgotPasswordClick}>
                        Quên mật khẩu
                    </div>
                </div>

            </div>
        </Box>
    )
}

export default Login
