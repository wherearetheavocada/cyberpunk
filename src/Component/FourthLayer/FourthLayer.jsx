import styles from './FourthLayer.module.css'
import fourthLayerMainImg from '../../../public/img/c06611743 1.png'
import fourthLayerSecondaryImg from '../../../public/img/Group 223.png'
import fourthLayerFirstIcon from '../../../public/img/color_lens.png'
import fourthLayerSecondIcon from '../../../public/img/auto_awesome.png'
import fourthLayerThirdIcon from '../../../public/img/auto_awesome_motion.png'


export default function FourthLayer(){
    return(
        <div className={styles.yellowBackground}>
            <div className={styles.fourthLayerWrapper}>
                <div className={styles.fourthLayer}>
                    <div className={styles.fourthLayerLeft}>
                        <img className={styles.fourthLayerMainImg} src={fourthLayerMainImg} alt="fourthLayerMainImg" />
                        <img className={styles.fourthLayerSecondaryImg} src={fourthLayerSecondaryImg} alt="fourthLayerSecondaryImg" />
                    </div>
                    <div className={styles.fourthLayerRight}>
                        <div className={styles.fourthLayerMainText}>Полное погружение<br />
                        вместе с HP</div>
                        <div className={styles.fourthLayerText}>Погрузись в современные экшен-игры с реалистичным изображением с<br /> 
                        помощью монитора с диагональю 23,8 дюйма, созданном для<br />
                        отображения максимально насыщенных цветов. Успевай реагировать<br /> 
                        на любые события с временем отклика 1 мс и частотой в 144 Гц!</div>
                        <div className={styles.advantageIcons}>
                            <div className={styles.icon}><img className={styles.iconImg} src={fourthLayerFirstIcon} alt="fourthLayerFirstIcon" /><span className={styles.textIcon}>Яркие насыщенные цвета</span></div>
                            <div className={styles.icon}><img className={styles.iconImg} src={fourthLayerSecondIcon} alt="fourthLayerSecondIcon" /><span className={styles.textIcon}>Кристальная четкость изображения</span></div>
                            <div className={styles.icon}><img className={styles.iconImg} src={fourthLayerThirdIcon} alt="fourthLayerThirdIcon" /><span className={styles.textIcon}>Быстрые движения и плавный геймплей</span></div>
                        </div>
                        <a className={styles.fourthLayerMoreInfo} href="">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>    
    )
}