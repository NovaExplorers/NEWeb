import styles from '../styles/dashboard.module.css'

import { useDispatch } from 'react-redux'
import { useData } from '../hooks/useData';
import { useEffect } from 'react';
import { setLoader } from '../state/ui.state';

import Header from '../components/header'
import Battery from '../components/dashboard/battery/battery';
import Cellular from '../components/dashboard/cellular/cellular';
import LTERepeater from '../components/dashboard/lterepeater/lterepeater';
import InternetConnection from '../components/dashboard/internet/internet';
import Drone from '../components/dashboard/drone/drone';




export default function Dashboard() {
    const dispatch = useDispatch();
    const data = useData()
    
    

    useEffect(()=> {    
        setTimeout(() => {
            dispatch(setLoader(false))
        }, 1000);
    }, [])

    return (
    <div className={styles.genWrapper}>
        <Header />
        <div className={styles.main}>
            <div className={styles.col}>
                <Battery data={data} />
                <div className={styles.separator}></div>
                <Cellular data={data} />
            </div>
            <div className={styles.col}>
                <LTERepeater data={data} />
                <div className={styles.separator}></div>
                <InternetConnection data={data} />
                <div className={styles.separator}></div>
                <Drone data={data} />
            </div>
        </div>
    </div>
    )
}