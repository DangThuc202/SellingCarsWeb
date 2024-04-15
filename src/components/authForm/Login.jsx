import { Button, IconButton, TextField, Box } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import styles from "./AuthForm.module.css"
import { useDispatch } from 'react-redux'
import { setCurrentForm } from '../../redux/formsSlice'

const Login = () =>
{
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
            setErrorMessage( errorMessage );

            try
            {
                const response = await fetch( 'http://localhost/php/server/api/user/login.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( values ),
                } );

                if ( response.ok )
                {
                    const result = await response.json();
                    console.log( result.userInfo );
                    if ( result.userInfo.userId )
                    {
                        if ( result.userInfo.userId === 1 )
                        {
                            alert( "Đăng nhập thành công" );
                            navigate( '/he-thong' );
                        } else
                        {
                            alert( "Đăng nhập thành công" );
                            navigate( '/' );
                        }
                    } else
                    {
                        alert( "Đăng nhập thất bại" );
                    }
                } else
                {
                    const errorMessage = await response.text();
                    setErrorMessage( errorMessage );
                    toast.error( errorMessage );
                }
            } catch ( error )
            {
                const message = error.message || 'Đã xảy ra lỗi không mong muốn.';
                setErrorMessage( message );
                toast.error( message );
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
