import { vh, vw } from '../../../utils/viewport.utils'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
import styles from '../../../styles/components/dashboard/battery/percentage.module.css';
import glStyles from '../../../styles/dashboard.module.css';

export default function ANV(props) {
    return (
        <div className={styles.batteryPercentage}>
            <div className={styles.batteryPercentageWrapper}>
                <p className={glStyles.subHeadKey}>Battery percentage</p>
                <p className={glStyles.subHeadValue}>{props.data.battery.remaining.percentage}%</p>
            </div>
            <LineChart className={styles.batteryPercentageGraph} width={vw(15)} height={vh(20)} data={props.data.battery.remaining.data} >
                <Line type="monotone" dataKey="data" stroke="#8884d8" />
                <CartesianGrid stroke="#fff" />
                <XAxis dataKey="time" tick={()=> null}/>
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}