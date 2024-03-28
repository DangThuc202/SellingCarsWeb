import React from 'react'
import styles from "./Footer.module.css"
import logo from "../../img/footer/logo.webp"
import f from "../../img/footer/f.webp"
import y from "../../img/footer/y.webp"
import i from "../../img/footer/i.webp"
import t from "../../img/footer/t.webp"


const Footer = () =>
{

    const services = [ "Mua xe ô tô", "Bán xe ô tô", "Trờ thành cộng tác viên", "Báo giá cửa hàng" ]
    const supports = [ "Mua bảo hiểm ô tô", "Trả góp mua xe", "Câu hỏi thường gặp", "Liên hệ" ]
    const abouts = [ "Giới thiệu công ty", "Tin tức", "Chính sách quyền riêng tư", "Điều khoản sử dụng", "Cơ hội việc làm", "Chứng nhận Carmudi" ]

    return (
        <div className={styles.container}>
            <div className={styles.container1}>

                <div className={styles.left}>
                    <img src={logo} className={styles.img} alt='' />
                    <div className={styles.text}>Carmudi - nền tảng hàng đầu trong lĩnh vực xe cũ tại Việt Nam. Cam kết mang đến cho khách hàng trải nghiệm hoàn toàn minh bạch, nhanh chóng và đáng tin cậy.</div>
                    <div className={styles.icons}>
                        <img src={f} alt='' />
                        <img src={y} alt='' />
                        <img src={t} alt='' />
                        <img src={i} alt='' />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.list}>
                        <div className={styles.parent}>
                            <span className={styles.title}>Dịch vụ</span>
                            {services.map( ( service, index ) => (
                                <div key={index} className={styles.item}>{service}</div>
                            ) )}
                        </div>
                        <div className={styles.parent}>
                            <span className={styles.title}>Dịch vụ</span>
                            {supports.map( ( support, index ) => (
                                <div key={index} className={styles.item}>{support}</div>
                            ) )}
                        </div>
                        <div className={styles.parent}>
                            <span className={styles.title}>Dịch vụ</span>
                            {abouts.map( ( about, index ) => (
                                <div key={index} className={styles.item}>{about}</div>
                            ) )}
                        </div>
                        <div className={styles.parent}>
                            <span className={styles.title}>Công ty thành viên</span>
                            <div className=''>OtoS - Trang đăng tin bán xe uy tín Việt Nam</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.address}>
                <strong>123 đườnng ABC phường ABC quận ABC thành phố ABC</strong>
            </div>
        </div>
    )
}

export default Footer