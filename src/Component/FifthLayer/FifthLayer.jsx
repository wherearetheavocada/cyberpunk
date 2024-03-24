import styles from './FifthLayer.module.css'
import fifthLayerMainImg from '../../../public/img/Untitled-1 1.png'
import fifthLayerFirstIcon from '../../../public/img/disk.png'
import fifthLayerSecondIcon from '../../../public/img/wysiwyg.png'
import fifthLayerThirdIcon from '../../../public/img/collections.png'
import fifthLayerFourthIcon from '../../../public/img/Frame 13.png'
import fifthLayerFifthIcon from '../../../public/img/xbox-one-3 logo.png'
import fifthLayerSixthIcon from '../../../public/img/stadia logo.png'
import fifthLayerSeventhIcon from '../../../public/img/Playstation logo.png'

export default function FifthLayer(){
    return(
        <div className={styles.fifthLayerWrapper}>
            <div className={styles.fifthLayer}>
                <div className={styles.fifthLayerLeft}></div>
                <div className={styles.fifthLayerRight}>
                    <div className={styles.fifthLayerMainText}>Купить игру<br />
                    Cyberpunk 2077</div>
                    <div className={styles.set}>
                        <span className={styles.setItems}>В комплект входит:</span>
                        <div className={styles.icon}><img className={styles.iconImg} src={fifthLayerFirstIcon} alt="fifthLayerFirstIcon" /><span className={styles.textIcon}>
                        Футляр с игровыми дисками</span></div>
                        <div className={styles.icon}><img className={styles.iconImg} src={fifthLayerSecondIcon} alt="fifthLayerSecondIcon" /><span className={styles.textIcon}>
                        Футляр с кодом для загрузки игры и дисками (pc)</span></div>
                        <div className={styles.icon}><img className={styles.iconImg} src={fifthLayerThirdIcon} alt="fifthLayerThirdIcon" /><span className={styles.textIcon}>
                        Справочник с информацией об игровом мире</span></div>
                    </div>
                    <span className={styles.choice}>Выберите платформу:</span>
                    <div className={styles.platforms}>
                        <img className={styles.platformImage} src={fifthLayerFourthIcon} alt="fifthLayerFourthIcon" />
                        <img className={styles.platformImage} src={fifthLayerFifthIcon} alt="fifthLayerFifthIcon" />
                        <img className={styles.platformImage} src={fifthLayerSixthIcon} alt="fifthLayerSixthIcon" />
                        <img className={styles.platformImage} src={fifthLayerSeventhIcon} alt="fifthLayerSeventhIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}