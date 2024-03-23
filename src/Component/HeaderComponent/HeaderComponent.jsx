import Header from '../Header/Header'
import styles from './HeaderComponent.module.css'

export default function HeaderComponent(){

    return(
        <div className={styles.headerComponent}>

            <Header />
            <div className={styles.blokInfo}>
                <div className={styles.blokInfoIntermediate}>
                    <div className={styles.blokInfo_Info}>
                        <p className={styles.blokInfoText}>Доступно на всех платформах</p>
                        <button type='submit' className={styles.blokInfoBtn}>Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}