import styles from './CityInformation.module.css'

export default function CityInformation(){
    return(
        <div className={styles.SecondLayerWrapper}>
            <div className={styles.SecondLayer}>
                <div className={styles.SecondLayerMainText}>Найт-Сити изменит тебя навсегда!</div>
                <div className={styles.SecondLayerText}><a className={styles.Cyberpunk}>Cyberpunk 2077</a> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где<br />
                власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства,<br />
                позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего<br />
                персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</div>
                <div className={styles.SecondLayerImageBlock}>
                    <div className={styles.TwoImg}>
                        <div className={styles.FirstImg}></div>
                        <div className={styles.SecondImg}></div>
                    </div>
                    <div className={styles.ThirdImg}></div>
                </div>
            </div>
        </div>
    )
}