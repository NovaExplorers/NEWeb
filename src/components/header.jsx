import { ReactSVG } from 'react-svg'
import styles from '../styles/components/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return (
        <div className={styles.header2}>
            <div className={styles.headerWrapper}>
                <ReactSVG src={"./src/assets/svg/logo.svg"} className={styles.logoSvg} />
                <div className={styles.headerItems}>
                    <p className={styles.headerItem}>Main View</p>
                    <p className={styles.headerItem}>Battery</p>
                    <p className={styles.headerItem}>Cellular</p>
                    <p className={styles.headerItem}>GSM Repeater</p>
                    <p className={styles.headerItem}>Drone</p>
                    <p className={styles.headerItem}>VPN</p>
                </div>
                <FontAwesomeIcon icon={faUser} className={styles.accountIcon} />
            </div>
        </div>
    )
}