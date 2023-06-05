import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
import { useDevice } from '../hooks/useDevice';
import { ReactSVG } from 'react-svg';
import axios from 'axios';

import styles from '../styles/choose.module.css';
import { useDispatch } from 'react-redux';
import { setObj } from '../state/device.state';
import { setLoader, toggleLoader } from '../state/ui.state';

export default function Choose() {

    const user = useUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [devices, setDevices] = useState();

    useEffect(()=> {
        if(!user || !user?.isLoggedIn) navigate('/')

        getDevices()
    }, []);

    const getDevices = async () => {
        const req = await axios({
            url: 'http://localhost:8080/api/v1/getDevices',
            withCredentials: true,
            method: 'POST'
        });

        setDevices(req.data.data);
        dispatch(setLoader(false))
    }

    const selectDevice = e => {
        dispatch(setLoader(true))
        dispatch(setObj(e));
        setTimeout(() => {
            navigate('/dashboard')
        }, 100);
    }

    return (
        <div className={styles.genWrapper}>
            <div className={styles.header}>
                <ReactSVG src={"./src/assets/svg/logo.svg"} className={styles.logo} onClick={() => dispatch(toggleLoader())} />
                <p className={styles.titleBold}>WELCOME</p>
                <p className={styles.titleNormal}>PLEASE CHOOSE A DEVICE</p>
            </div>
            <div className={styles.deviceList}>
                {devices?.map(e => (
                    <div className={styles.device} key={e._id} onClick={() => selectDevice(e)}>
                        <div className={styles.deviceCircle}>
                            <img src="./src/assets/svg/drone.svg" className={styles.drone} />
                        </div>
                        <p className={styles.deviceName}>{e.name}</p>
                        <p className={styles.deviceInfo}>Connection Info <br/> {e.hostname}:{e.port}</p>
                    </div>
                ))} 
                
            </div>
        </div>
    )
}