import React from 'react'
import styles from "./Introduce.module.css"
import logo1 from '../../img/logo1.webp'

const Introduce = () =>
{
    return (
        <div className={styles.container}>
            <div className={styles.title}>Giới thiệu về Carmudi</div>
            <div className={styles.list}>
                <div className={styles.left}>
                    <div className={styles.info}>
                        Carmudi.vn là thương hiệu uy tín, dẫn đầu thị trường về dịch vụ rao vặt và truyền thông về ngành ô tô tại Việt Nam.
                        Với hai lợi thế cạnh tranh cốt lõi: một là về đội ngũ chuyên môn có kinh nghiệm lâu năm;
                        hai là áp dụng công nghệ hiện đại, giúp mang đến cho khách hàng một trải nghiệm mua bán xe cũ hoàn toàn khác biệt
                        và chuyên nghiệp.
                        <br />
                        <br />
                        Tại Carmudi, chúng tôi làm việc trực tiếp với người mua và người bán, họ có thể là đại lý,
                        công ty hoặc cá nhân. Từ đó cung cấp các dịch vụ tối ưu như: mua bán xe, thẩm định, thanh toán linh hoạt và
                        nhiều dịch vụ khác để đảm bảo quy trình mua bán xe trở nên dễ dàng hơn.
                        Carmudi đảm bảo rằng mỗi chiếc xe được bán ra đã được kiểm tra kỹ lưỡng để đảm bảo chất lượng
                        và tính đúng giá trị của nó.
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={logo1} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Introduce