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
<div className={styles.header}>
    <div className={styles.headerComponent}>
    <div className={styles.componentLogo}>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>

    <div className={styles.socialNetwork}>
    <a href="https://www.youtube.com/">
    <img className={styles.iconSocialNetwork} src={YouTube} alt="YouTube" />
    </a>
    <a href="https://vk.com/">
    <img className={styles.iconSocialNetwork} src={Vk} alt="Vk" />
    </a>
    <a href="https://www.facebook.com/">
    <img className={styles.iconSocialNetwork} src={Facebook} alt="Facebook" />
    </a>
    <a href="https://twitter.com/">
    <img className={styles.iconSocialNetwork} src={Twitter} alt="Twitter" />
    </a>
    <a href="https://www.twitch.tv/">
    <img className={styles.iconSocialNetwork} src={Twitch} alt="Twitch" />
    </a>
    <a href="https://www.instagram.com/">
    <img className={styles.iconSocialNetwork} src={Instagram} alt="Instagram" />
    </a>
    </div>
    </div>
</div>
)
}