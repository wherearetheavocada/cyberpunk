import styles from './Header.module.css'
import logo from '../../../public/img/Cyberpunk_2077_logo 1.png'
export default function Header(){

return(
<div className={styles.header}>
    <div className={styles.componentLogo}>
        <img src={logo} alt="logo" />
    </div>
</div>
)
}