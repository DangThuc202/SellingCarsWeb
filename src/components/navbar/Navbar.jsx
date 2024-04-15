import styles from './Navbar.module.css'
import logo from '../../img/logo.webp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '../../../src/utils/constant'

const Navbar = () =>
{
  const navigate = useNavigate()

  const cars = [ "Toyota", "Volkswagen", "Honda", "Huyndai", "Ford", "Nissan", "Kia", "Chevrolet", "Mercedez - Benz", "BMW" ]
  const countries = [ "Mỹ", "Nhật Bản", "Pháp", "Đức" ]
  const prices = [ `Dưới 22,000$`, "Từ 22,000$ - 30,000$", "Từ 30,000$ - 50,000$", "Trên 50,000$" ]

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to={path.HOME} onClick={() => navigate( path.HOME )}>
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <div className={styles.items}>
          <div className={styles.list}>
            <div className={styles.item}>
              Mua xe <KeyboardArrowDownIcon className={styles.icon1} />
            </div>
            <div className={styles.listItem}>
              <div className={styles.listItemChild}>
                <span className={styles.title}>Hãng xe</span>
                {cars.map( ( car, index ) => (
                  <div className={styles.child} key={index}>{car}</div>
                ) )}
              </div>
              <div className={styles.listItemChild}>
                <span className={styles.title}>Quốc gia</span>
                {countries.map( ( country, index ) => (
                  <div className={styles.child} key={index}>{country}</div>
                ) )}
              </div>
              <div className={styles.listItemChild}>
                <span className={styles.title}>Giá xe</span>
                {prices.map( ( price, index ) => (
                  <div className={styles.child} key={index}>{price}</div>
                ) )}
              </div>
            </div>
          </div>
          <Link to={path.INTRODUCE} className={styles.item}> Giới thiệu </Link>
          <div className={styles.item}> Tin tức </div>
          <div className={styles.item}> Hỗ trợ khách hàng </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div>
            <ContactPhoneIcon className={styles.icon} /> SĐT &emsp; : 0909xxxxxx
          </div>
          <div>
            <EmailIcon className={styles.icon} /> EMAIL : Carmudi@gmail.com
          </div>
        </div>
        <Link to={path.LOGIN} onClick={() => navigate( path.LOGIN )}>
          <button className={`${ styles.btn } ${ styles.blue }`}>
            <PersonIcon className={styles.icon} /> ĐĂNG NHẬP
          </button>
        </Link>
      </div>
    </div >
  )
}

export default Navbar
