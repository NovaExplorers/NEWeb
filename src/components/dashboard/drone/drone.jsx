import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/drone/main.module.css';
import DroneMap from './droneMap';


export default function Drone({ data }) {
    return (
        <div className={glStyles.drone}>
            <div className={styles.mainDrone}>
                <div className={styles.mainDroneWrapper}>
                    <p className={glStyles.sectionTitle}>Drone</p>
                    <div className={styles.mainDroneColumns}>
                        <div className={styles.droneModel}>
                            <p className={glStyles.subHeadKey}>Drone model</p>
                            <p className={glStyles.subHeadValue}>{data.drone.model}</p>
                            <img src={data.drone.modelImage} className={styles.droneModelImage} />
                        </div>

                        <div className={styles.mainDroneCol}>
                            <div className={styles.droneBatteryContainer}>
                                <div className={styles.droneBatteryMain}>
                                    <div className={styles.droneBatteryPercRepresentation} style={{ width: `${data.drone.battery.percentage}%` }}></div>
                                    <div className={styles.droneBatteryWrapper}>
                                        <p className={glStyles.subHeadKey}>Battery perc.</p>
                                        <p className={glStyles.subHeadValue}>{data.drone.battery.percentage}%</p>
                                    </div>
                                </div>
                                <div className={styles.droneBatteryAbstract}></div>
                            </div>
                            <div className={styles.sensorDataContainer}>
                                <div className={styles.sensorDataWrapper}>
                                    <div className={styles.altitude}>
                                        <p className={glStyles.subHeadKey}>Altitude</p>
                                        <p className={glStyles.subHeadValue}>{data.drone.altitude}m</p>
                                    </div>
                                    <div className={styles.pressure}>
                                        <p className={glStyles.subHeadKey}>Atmospheric pressure</p>
                                        <p className={glStyles.subHeadValue}>{data.drone.pressure} hPa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DroneMap data={data} />
        </div>
    )
}