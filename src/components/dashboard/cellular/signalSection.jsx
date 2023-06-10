import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/cellular/signalsection.module.css';


export default function SignalSection({ data }) {
    return (
        <div className={styles.signalSection}>
            <div className={styles.signalSectionWrapper}>
                <div className={styles.signalInfo}>
                    <p className={glStyles.subHeadKey}>Signal strength</p>
                    <div className={styles.signalStrengthVertical}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V5.6536C19.9288 5.6536 34.306 19.7865 34.306 39.5731H40C40 16.9599 22.7758 0 0 0Z" fill={data.cellular.signal.percentage < 90 ? '#B0B0B0' : 'white'} />
                            <path d="M28.6121 39.5731H22.9182C22.9182 25.4398 11.3879 16.9601 0 16.9601V11.3065C17.0819 11.3065 28.6121 22.6132 28.6121 39.5731Z" fill={data.cellular.signal.percentage < 75 ? '#B0B0B0' : 'white'} />
                            <path d="M0 22.613V28.2666C5.69395 28.2666 11.5302 33.9198 11.5302 39.5731H17.2242C17.2242 31.0931 8.54093 22.613 0 22.613Z" fill={data.cellular.signal.percentage < 50 ? '#B0B0B0' : 'white'} />
                            <path d="M0 34.3464V40H5.69397C5.69397 36.8765 3.14591 34.3464 0 34.3464Z" fill={data.cellular.signal.percentage < 25 ? '#B0B0B0' : 'white'} />
                        </svg>
                        <p className={styles.signalStrength}>{data.cellular.signal.percentage}%</p>
                    </div>
                </div>
                <div className={styles.signalInfo}>
                    <p className={glStyles.subHeadKey}>Connectivity</p>
                    <p className={glStyles.subHeadValue}>{data.cellular.connectivity.generation}</p>
                </div>
                <div className={styles.signalInfo}>
                    <p className={glStyles.subHeadKey}>Carrier</p>
                    <p className={glStyles.subHeadValue}>{data.cellular.dataPlan.carrier}</p>
                </div>
            </div>
        </div>
    )
}