import styles from './PresentBlog.module.css'
import topBorder from '../../../public/img/topBorder.png'
import promotion from '../../../public/img/Group_215.png'
import img from '../../../public/img/Group2232.png'
import bottomBorder from '../../../public/img/22 2.png'
export default function PresentBlog(){

    return(
        <div className={styles.presentBlog}>
            <img className={topBorder}src={topBorder} alt="topBorder" />
            <div className={styles.presentBlogWrapper}>
                <div className={styles.presentBlogHeadComp}>
                    <div className={styles.presentBlogPromotion}>
                    <img className={img} src={promotion} alt="promotion" />
                    </div>
                    <h1 className={styles.presentBlogTitle}>Играй и выигрывай!</h1>
                </div>
                <p className={styles.presentBlogSubTitle}>Играй в<span className={styles.presentBlogSubTitleText}>Cyberpunk 2077</span> и получи возможность выиграть консоль <span className={styles.presentBlogSubTitleText}>Xbox Series X</span> или <span className={styles.presentBlogSubTitleText}>Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                <div className={styles.presentBlogComp}>
                    <form action="#" className={styles.presentBlogForm}>
                        <input type="text" name="name" className={styles.presentBlogInput} placeholder="Как тебя зовут?"/>
                        <input type="email" name="email" className={styles.presentBlogInput} placeholder="Твой e-mail"/>
                        <label className={styles.presentBlogFormLable}>
                            <input type="file" className={styles.presentBlogformLabelfile}/>
                            <span className={styles.presentBlogformLabelText}>Прикрепить скриншот</span>
                            <span className={styles.presentBlogformLabelImages}>.png / .jpg / .pdf</span>
                        </label>
                        <button className={styles.presentBlogformBtn }>Отправить</button>
                        <label className={styles.presentBlogformCheckbox }>
                            <input type="checkbox" className={styles.presentBlogcheckboxInput}/>
                            <span className={styles.presentBlogcheckboxText}>Согласен на обработку персональных данных</span>
                        </label>
                    </form>
                    <div className={styles.presentBlogImage}>
                        <img src={img} className={img} alt="img" />
                    </div>
                </div>
            </div>
            <img src={bottomBorder} alt="bottomBorder" className={bottomBorder}/>
        </div>
    )
}