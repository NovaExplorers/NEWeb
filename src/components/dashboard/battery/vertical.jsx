import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/battery/vertical.module.css';


export default function Vertical(props) {
    return (
        <div className={styles.sectionVerticalItems + " " + styles.batteryVerticalItems}>
            <div className={styles.batteryVerticalItem}>
                <div className={styles.batteryVerticalItemsWrapper}>
                    <p className={glStyles.subHeadKey}>Capacity</p>
                    <p className={glStyles.subHeadValue}>{props.data.battery.remaining.mah}mAH/{props.data.battery.capacity.mah}mAH</p>
                </div>
            </div>

            <div className={styles.batteryVerticalItem}>
                <div className={styles.batteryVerticalItemsWrapper}>
                    <p className={glStyles.subHeadKey}>Current Status</p>
                    <p className={glStyles.subHeadValue}>{props.data.battery.status}</p>
                </div>
            </div>

            <div className={styles.batteryVerticalItem  + " " + styles.alert} style={props.data.battery.remaining.percentage > 50 ? { display: 'none' } : {}}>
                <div className={styles.batteryVerticalItemsWrapper}>
                    <p className={glStyles.subHeadKey}>Alert</p>
                    <p className={glStyles.subHeadValue}>Battery level under 50%</p>
                </div>
            </div>
        </div>
    )
}