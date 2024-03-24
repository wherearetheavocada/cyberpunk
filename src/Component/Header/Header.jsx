import styles from './Header.module.css'
import logo from '../../../public/img/Cyberpunk_2077_logo 1.png'
import YouTube from '../../../public/img/youtube logo.png'
import Vk from '../../../public/img/vk logo.png'
import Facebook from '../../../public/img/Vector.png'
import Twitter from '../../../public/img/twitter-square logo.png'
import Twitch from '../../../public/img/twitch logo.png'
import Instagram from '../../../public/img/instagram-square logo.png'

export default function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.Header_content}>
                <div className={styles.HeaderLogo}><img src={logo} alt="HeaderLogo" /></div>
                <div className={styles.HeaderMenu}>
                    <a className={styles.YouTube} rel="stylesheet" href=""><img src={YouTube} alt="YouTube" /></a>
                    <a className={styles.Vk} rel="stylesheet" href=""><img src={Vk} alt="Vk" /></a>
                    <a className={styles.Facebook} rel="stylesheet" href=""><img src={Facebook} alt="Facebook" /></a>
                    <a className={styles.Twitter} rel="stylesheet" href=""><img src={Twitter} alt="Twitter" /></a>
                    <a className={styles.Twitch} rel="stylesheet" href=""><img src={Twitch} alt="Twitch" /></a>
                    <a className={styles.Instagram} rel="stylesheet" href=""><img src={Instagram} alt="Insta" /></a>
                </div>
            </div>
        </div>
    )
}