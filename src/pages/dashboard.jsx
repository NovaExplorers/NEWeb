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
import { io } from 'socket.io-client';

import { useUser } from '../hooks/useUser';
import { useDevice } from '../hooks/useDevice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setValue } from '../state/data.state';


export default function Dashboard() {
    const dispatch = useDispatch();
    const data = useData();
    const { user } = useUser();
    const device = useDevice();
    const centralServerURL = 'ws://localhost:8070';


    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoader(false))
        }, 1000);

        const socket = io(centralServerURL, {
            reconnection: true
        });

        socket.emit('handshake', {
            type: 1,
            id: user._id,
            secret: user.password,
            deviceSelected: device._id
        })

        socket.on('handshakeResponse', arg => {
            if(arg.success) toast.success('Established connecting to central server')
            else toast.error('Could not connect to central server')
        })

        socket.on('setInfo', ({key, value}) => {
            dispatch(setValue({ key, value }));
        })

    }, [])

    return (
        <>
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}