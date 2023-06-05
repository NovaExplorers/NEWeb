import styles from '../../../styles/dashboard.module.css'
import Percentage from './percentage';
import Vertical from './vertical';
import ANV from './anv';

export default function Battery(props) {
    return (
        <div className={styles.battery}>
        <p className={styles.sectionTitle}>Battery</p>
        <div className={styles.sectionHorizontalItems}>
            <Percentage data={props.data} />
            <Vertical data={props.data} />
            <ANV data={props.data} />
        </div>
        </div>
    )
}