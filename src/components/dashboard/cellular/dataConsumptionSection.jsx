import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/cellular/dataconsumptionsection.module.css';
import prettyMilliseconds from 'pretty-ms';


export default function DataConsumptionSection({ data }) {
    return (
        <div className={styles.dataConsumptionSection}>
            <div className={styles.dataConsumptionWrapper}>
                <p className={glStyles.smallTitle}>DATA CONSUMPTION</p>
                <div className={styles.sessionTime}>
                    <p className={glStyles.subHeadKey}>Session time</p>
                    <p className={glStyles.subHeadValue}>{prettyMilliseconds(data.cellular.dataConsumption.sessionTime, { verbose: true })}</p>
                </div>
                <div className={styles.consumedData}>
                    <p className={glStyles.subHeadKey}>Consumed data during this session</p>
                    <p className={glStyles.subHeadValue}>{data.cellular.dataConsumption.consumedDataSession} GB</p>
                </div>
            </div>
        </div>
    )
}