import glStyles from '../../../styles/dashboard.module.css';
import styles from '../../../styles/components/dashboard/internet/main.module.css';
import { Tooltip } from 'react-tooltip'
import prettyMilliseconds from 'pretty-ms';



export default function InternetConnection({ data }) {

    return (
        <div className={glStyles.internet}>
            <div className={styles.internetWrapper}>
                <p className={glStyles.sectionTitle}>Internet Connection</p>
                <div className={styles.connections}>
                    <div className={styles.ethernet}>
                        <svg width="67" height="51" viewBox="0 0 67 51" style={data.internet.ethernetStatus == 0 ? { opacity: 0.5 } : {}} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.9062 16.9753H58.625V10.6096C58.625 9.44252 57.6828 8.48765 56.5312 8.48765H50.25V2.12191C50.25 0.954861 49.3078 0 48.1562 0H18.8438C17.6922 0 16.75 0.954861 16.75 2.12191V8.48765H10.4688C9.31719 8.48765 8.375 9.44252 8.375 10.6096V16.9753H2.09375C0.942188 16.9753 0 17.9302 0 19.0972V48.804C0 49.9711 0.942188 50.9259 2.09375 50.9259H12.5625V33.9506H16.75V50.9259H25.125V33.9506H29.3125V50.9259H37.6875V33.9506H41.875V50.9259H50.25V33.9506H54.4375V50.9259H64.9062C66.0578 50.9259 67 49.9711 67 48.804V19.0972C67 17.9302 66.0578 16.9753 64.9062 16.9753Z" fill="#ECEEF3" />
                        </svg>
                        <div className={styles.connectionTitle}>Ethernet</div>
                        <div className={styles.connectionInfo}>{data.internet.ethernetStatus == 0 ? 'Disconnect' : 'Connected'}</div>
                    </div>
                    <div className={styles.wifi}>
                        <svg width="72" height="51" viewBox="0 0 72 51" style={data.internet.wifi.status == 0 ? { opacity: 0.5 } : {}} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5233 22.5111C50.4897 6.22285 21.6406 6.11798 7.4303 22.5372L0 15.1116C18.1824 -5.09305 54.0203 -4.96624 72 15.0664L64.5233 22.5111ZM58.6188 28.3908L51.1045 35.8737C44.2365 26.1817 27.7526 26.0967 20.7481 35.8456L13.2864 28.3895C24.3462 14.9293 47.7166 15.0301 58.6188 28.3908ZM44.6446 42.3066L35.9144 51L27.1412 42.2332C30.5141 35.4645 41.4197 35.5468 44.6446 42.3066Z" fill="#ECEEF3" />
                        </svg>
                        <div className={styles.connectionTitle}>Wi-Fi AP</div>
                        <div className={styles.connectionInfo}>{data.internet.wifi.connectedClients} clients connected</div>
                    </div>
                </div>

                <div className={styles.connectStats}>
                    <div className={styles.connectStatsRow}>
                        <Tooltip id="downloadTime" style={{ fontFamily: 'Epilogue' }} />
                        <div
                            className={styles.stat + ' ' + styles.downloadStat}
                            data-tooltip-id="downloadTime"
                            data-tooltip-content={prettyMilliseconds(data.internet.downloadSpeed.time, { verbose: true }) + ' ago'}
                            data-tooltip-place="top"
                        >
                            <div className={styles.statName}>Download</div>
                            <div className={styles.statValue}>{data.internet.downloadSpeed.value} Mbps</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statName}>Ping</div>
                            <div className={styles.statValue}>{data.internet.ping} ms</div>
                        </div>
                    </div>
                    <div className={styles.connectStatsRow}>
                        <Tooltip id="uploadTime" style={{ fontFamily: 'Epilogue' }} />
                        <div
                            className={styles.stat}
                            data-tooltip-id="uploadTime"
                            data-tooltip-content={prettyMilliseconds(data.internet.uploadSpeed.time, { verbose: true }) + ' ago'}
                            data-tooltip-place="bottom"
                        >
                            <div className={styles.statName}>Upload</div>
                            <div className={styles.statValue}>{data.internet.uploadSpeed.value} Mbps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}