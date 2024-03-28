import React from 'react'
import styles from "./Details.module.css"

const Introduce = () =>
{

    const leftItems = [ "Hãng xe", "Xuất xứ", "Chỗ ngồi", "Hộp số", "Nhiên liệu", "Hệ thống phun xăng" ]
    const rightItems = [ "Màu sắc", "Chiều ngang", "Chiều cao", "Trọng lượng không tải", "Quà tặng" ]
    const test = [ "abc" ]

    return (
        <div className={styles.parent}>
            <div className={styles.info}>
                <div className={styles.title}>Xe Toyota ABCXYZ</div>
                <div className={styles.price}>123.000.000 VND</div>
                <div className={styles.list}>
                    <div className={styles.items}>
                        <div className={styles.itemsLeft}>
                            {leftItems.map( ( leftItem, index ) => (
                                <div className={styles.item} key={index}>{leftItem}
                                    {test.map( ( test1, index ) => ( <div className={styles.text} key={index}>{test1}</div> ) )}
                                </div>
                            ) )}
                        </div>
                        <div className={styles.itemsRight}>
                            {rightItems.map( ( rightItem, index ) => (
                                <div className={styles.item} key={index}>{rightItem}
                                    {test.map( ( test1, index ) => ( <div className={styles.text} key={index}>{test1}</div> ) )}
                                </div>
                            ) )}
                        </div>
                    </div>
                </div>
                <div className={styles.decscription}>
                    Xe MG ZS Luxury, 1 chủ từ đầu đăng kí tháng 11/2022 odo chuẩn, cam kết không lỗi nhỏ, không trầy xước, nội ngoại thất như mới.
                    Đã được kiểm tra qua 176 hạng mục chính hãng, có chứng nhận chất lượng xe đã qua sử dụng.
                    Hỗ trợ đăng kí sang tên toàn quốc.
                    Bảo hành chính hãng 5 năm không giới hạn km.
                    Bảo dưỡng đầy đủ.Phụ kiện sẵn full xe.
                </div>
            </div>
        </div>
    )
}

export default Introduce