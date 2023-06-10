import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/lterepeater/main.module.css';

export default function LTERepeater({ data }) {
    const getStatus = (state) => {
        return {
            0: 'Inactive',
            1: 'Active',
            2: 'Error'
        }[state];
    }

    return (
        <div className={glStyles.lteRepeater}>
            <div className={styles.titleContainer}>
                <p className={glStyles.sectionTitle + ' ' + styles.title}>GSM REPEATER</p>
                <div className={styles.statusContainer}>
                    <div className={styles.statusContainerWrapper}>
                        <p className={styles.statusLabel}>Status</p>
                        <p className={styles.statusValue}>{getStatus(data.lteRepeater.status)}</p>
                    </div>
                </div>
            </div>

            <div className={styles.lteRepeaterInfo}>
                <div className={styles.receivedSignalStrength}>
                    <p className={glStyles.subHeadKey}>Received signal strength</p>
                    <p className={glStyles.subHeadValue}>{data.lteRepeater.signalStrength} dBm</p>
                </div>
                <div className={styles.transmittingStrength}>
                    <p className={glStyles.subHeadKey}>Transmitting power</p>
                    <p className={glStyles.subHeadValue}>{data.lteRepeater.transmittingStrengthMW} dBm</p>
                </div>
            </div>
        </div>
    )
}