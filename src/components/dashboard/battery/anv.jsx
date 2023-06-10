import { vh, vw } from '../../../utils/viewport.utils'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
import styles from '../../../styles/components/dashboard/battery/anv.module.css';
import glStyles from '../../../styles/dashboard.module.css';
import { useState } from 'react';

export default function ANV({ data }) {
    const [aOrV, setaOrV] = useState('V');
    return (
        <div className={styles.anv}>
            <div className={styles.anvWrapper}>
                <div className={styles.outputContainers} onClick={()=> setaOrV('V')}>
                    <p className={glStyles.subHeadKey}>Output voltage</p>
                    <p className={glStyles.subHeadValue}>{data.battery.voltage.volts}V</p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.outputContainers} onClick={()=> setaOrV('A')}>
                    <p className={glStyles.subHeadKey}>Output amperage</p>
                    <p className={glStyles.subHeadValue}>{data.battery.amperage.amps}A</p>
                </div>
            </div>
            
            <LineChart className={styles.anvGraph} width={vw(15)} height={vh(20)} data={aOrV == 'V' ? data.battery.voltage.data : data.battery.amperage.data} >
                <Line type="monotone" dataKey="data" stroke="#8884d8" />
                <CartesianGrid stroke="#fff" />
                <XAxis dataKey="time" tick={()=> null}/>
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}