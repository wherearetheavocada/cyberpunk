import styles from './HeaderFullContent.module.css'
import HeaderMainImg from '../../../public/img/11.png'
import Header from '../Header/Header'

export default function HeaderFullContent(){
    return(
        <div className={styles.HeaderMainImg}>
            <Header/>
            <div className={styles.InfoBlock}>
                <div className={styles.InfoBlockWrapper}>    
                    <div className={styles.HeaderText}>Доступно на<br /> всех платформах</div>
                    <a className={styles.MoreInfo} href="More info">Узнать больше</a>
                </div>
            </div>
        </div>
    )
}