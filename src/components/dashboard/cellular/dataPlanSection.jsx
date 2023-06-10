import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/cellular/dataplansection.module.css';


export default function DataPlanSection({ data }) {
    return (
        <div className={styles.dataPlanSection}>
            <div className={styles.dataPlanWrapper}>
                <p className={glStyles.smallTitle}>DATA PLAN</p>
                <div className={styles.currentPlan}>
                    <p className={glStyles.subHeadKey}>Current plan</p>
                    <p className={glStyles.subHeadValue}>{data.cellular.dataPlan.currentPlan}</p>
                </div>
                <div className={styles.dataInfo}>
                    <div className={styles.usedData}>
                        <p className={glStyles.subHeadKey}>Used data</p>
                        <p className={glStyles.subHeadValue}>{data.cellular.dataPlan.used} GB</p>
                    </div>
                    <div className={styles.availableData}>
                        <p className={glStyles.subHeadKey}>Available data</p>
                        <p className={glStyles.subHeadValue}>{data.cellular.dataPlan.available} GB</p>
                    </div>
                </div>
                <div className={styles.totalUsage}>
                    <p className={glStyles.subHeadKey}>Total usage</p>
                    <p className={glStyles.subHeadValue}>{data.cellular.dataPlan.percentage}%</p>
                </div>
            </div>
        </div>
    )
}