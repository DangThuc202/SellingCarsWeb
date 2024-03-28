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

const ChangePassword = () =>
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

    const handleLoginClick = () =>
    {
        dispatch( setCurrentForm( 'login' ) );
    };


    const changepassword = useFormik( {
        initialValues: {
            username: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: Yup.object( {
            username: Yup.string().required( 'Bạn không được để trống phần này' ),
            newPassword: Yup.string().required( 'Bạn không được để trống phần này' ),
            confirmNewPassword: Yup.string().oneOf( [ Yup.ref( "newPassword" ) ], "Xác nhận mật khẩu không chính xác" ).required( 'Bạn không được để trống phần này' ),
        } ),
        onSubmit: async ( values ) =>
        {
            setIsLoggingIn( !isLoggingIn )
            setErrorMessage( errorMessage )
            try
            {
                const result = await UserServices.changepasswordService( values.email, values.password )
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
        <Box component="form" onSubmit={changepassword.handleSubmit} className={styles.parent}>
            <div className={styles.title}>Đổi mật khẩu</div>
            <div className={styles.inputForm}>
                <TextField
                    type="text"
                    placeholder="Nhập tài khoản của bạn"
                    name="username"
                    fullWidth
                    value={changepassword.values.username}
                    onChange={changepassword.handleChange}
                    error={changepassword.touched.username && Boolean( changepassword.errors.username )}
                    helperText={changepassword.touched.username && changepassword.errors.username}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu mới của bạn"
                    name="newPassword"
                    fullWidth
                    value={changepassword.values.newPassword}
                    onChange={changepassword.handleChange}
                    error={changepassword.touched.newPassword && Boolean( changepassword.errors.newPassword )}
                    helperText={changepassword.touched.newPassword && changepassword.errors.newPassword}
                    InputProps={{
                        endAdornment: (
                            <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        )
                    }}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Xác nhận mật khẩu mới của bạn"
                    name="confirmNewPassword"
                    fullWidth
                    value={changepassword.values.confirmNewPassword}
                    onChange={changepassword.handleChange}
                    error={changepassword.touched.confirmNewPassword && Boolean( changepassword.errors.confirmNewPassword )}
                    helperText={changepassword.touched.confirmNewPassword && changepassword.errors.confirmNewPassword}
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
                    <div className={styles.link} onClick={handleLoginClick}>
                        Đăng nhập ngay
                    </div>
                    <div className={styles.link} onClick={handleRegisterClick}>
                        Đăng kí ngay
                    </div>
                </div>

            </div>
        </Box>
    )
}

export default ChangePassword
