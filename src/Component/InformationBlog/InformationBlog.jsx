import styles from './InformationBlog.module.css'
import FirstImage from '../../../public/img/Rectangle 597.png'
import SecondImage from '../../../public/img/Rectangle 598.png'
import ThirdImage from '../../../public/img/Rectangle 599.png'
export default function InformationBlog(){

    return(
        <div className={styles.informationBlog}>
            <div className={styles.informationBlogWrapper}>
                <h2 className={styles.informationBlogTitle}>Найт-Сити изменит тебя навсегда!</h2>
                    <p className={styles.informationBlogSubTitleSecond}><span className={styles.informationBlogSubTitleFirst}> Cyberpunk 2077 — </span>приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
                <div className={styles.informationBlogImage}>
                    <div className={styles.informationBlogImageFirstBlog}>
                        <div className={styles.firstImageBlog}>
                            <img className={styles.imageBlog} src={FirstImage} alt="FirstImage" />
                        </div>
                        <div className={styles.firstImageBlog}>
                            <img className={styles.imageBlog} src={SecondImage} alt="SecondImage" />
                        </div>
                    </div>
                    <div className={styles.informationBlogImageSecondBlog}>
                        <div className={styles.secondImageBlog}>
                            <img className={styles.imageBlog} src={ThirdImage} alt="ThirdImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

