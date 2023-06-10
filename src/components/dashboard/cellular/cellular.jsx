import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/cellular/main.module.css';
import SignalSection from './signalSection';
import DataPlanSection from './dataPlanSection';
import DataConsumptionSection from './dataConsumptionSection';

export default function Cellular({ data }) {
    return (
        <div className={glStyles.cellular}>
            <p className={glStyles.sectionTitle}>Cellular</p>
            <div className={styles.cellularSections + ' ' + glStyles.sectionHorizontalItems}>
                <SignalSection data={data} />
                <DataPlanSection data={data} />
                <DataConsumptionSection data={data} />
            </div>
        </div>
    )
}