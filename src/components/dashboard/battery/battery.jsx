import styles from '../../../styles/dashboard.module.css'
import Percentage from './percentage';
import Vertical from './vertical';
import ANV from './anv';

export default function Battery({ data }) {
    return (
        <div className={styles.battery}>
        <p className={styles.sectionTitle}>Battery</p>
        <div className={styles.sectionHorizontalItems}>
            <Percentage data={data} />
            <Vertical data={data} />
            <ANV data={data} />
        </div>
        </div>
    )
}