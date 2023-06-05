import styles from '../../../styles/dashboard.module.css'

export default function Cellular(props) {
    return (
        <div className={styles.cellular}>
            <p className={styles.sectionTitle}>Cellular</p>
            <div className={styles.sectionHorizontalItems}>
               <div className={styles.cellularSections}>
                    <div className={styles.signalSection}>
                        <div className="signalInfo">
                            <p className="subHeadKey">Signal strength</p>
                            <p className="subHeadValue"></p>
                        </div>
                        <div className="signalInfo">
                            <p className="subHeadKey">Connectivity</p>
                            <p className="subHeadValue"></p>
                        </div>
                        <div className="signalInfo">
                            <p className="subHeadKey">Carrier</p>
                            <p className="subHeadValue"></p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}