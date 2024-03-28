import { useSelector } from 'react-redux'
import Login from './Login'
import Register from './Register'
import ChangePassword from "./ChangePassword"
import LogoutIcon from '@mui/icons-material/Logout'
import styles from "./AuthForm.module.css"
import { Link } from 'react-router-dom'


const AuthModal = () =>
{
    const currentForm = useSelector( ( state ) => state.forms.currentForm );
    let formComponent;
    switch ( currentForm )
    {
        case 'login':
            formComponent = <Login />;
            break;
        case 'register':
            formComponent = <Register />;
            break;
        case 'changepassword':
            formComponent = <ChangePassword />;
            break;
        default:
            formComponent = null;
    }

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.out}>
                <LogoutIcon />
            </Link>
            <div className={styles.form}>
                <div className={styles.info}>
                    {formComponent}
                </div>
            </div>
        </div>
    )
}

export default AuthModal
