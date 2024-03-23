import styles from './ThirdLayer.module.css'
import topborder from '../../../public/img/22 1.png'
import bottomborder from '../../../public/img/22 2.png'
import action from '../../../public/img/Group 215.png'

export default function ThirdLayer(){
    return(
        <><div className={styles.BackgroundBlack}>
        <img className={styles.TopBorder} src={topborder} alt="topborder"></img>
        <div className={styles.ThirdLayerWrapper}>
            <div className={styles.ThirdLayer}>
                <div className={styles.ThirdLayerTopPart}>
                    <div className={styles.ActionAgitation}><img className={styles.Action} src={action} alt="action" />
                    <div className={styles.ThirdPartMainText}>Играй и выигрывай!</div>
                    </div>
                    <div className={styles.ThirdLayerText}>Играй в Cyberpunk 2077 и получи возможность выиграть консоль Xbox Series X или Sony PlayStation 5! Заполни<br />
                    форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</div>
                </div>
                <div className={styles.ThirdLayerBottomPart}>
                    <div className={styles.Form}>
                        <input className={styles.PersonalInfo} type="text" placeholder='Как тебя зовут?'></input>
                        <input className={styles.PersonalInfo} type="text" placeholder='Твой e-mail'></input>
                        <div className={styles.ImagePlace}><a href="" className={styles.ScreenshotText}>Прикрепить скриншот</a><div className={styles.expansion}>.png / .jpg / .pdf</div></div>
                        <div>   
                            <a className={styles.LinkSend} href="">Отправить</a>
                            <div className={styles.BottomText}>
                                <input className={styles.Tap} type="checkbox" />
                                <div className={styles.Agreetment}>Согласен на обработку персональных данных</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.PlayStation}></div>
                </div>
            </div>
        </div>
        <img className={styles.BottomBorder} src={bottomborder} alt="bottomborder"></img></div></>
    )
}