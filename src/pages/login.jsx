import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { ReactSVG } from 'react-svg';

import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setLoggedIn, setUser } from '../state/user.state';
import styles from '../styles/login.module.css';
import { toggleLoader } from '../state/ui.state';


export default function Login() {

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [usernameForm, setUsernameForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async () => {
        if(!usernameForm || !passwordForm) return setErrorMessage('Please enter a username/password.');

        dispatch(toggleLoader())

        const req = await axios({
            url: 'http://localhost:8080/api/v1/auth',
            method: 'POST',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: usernameForm,
                password: passwordForm
            },
            validateStatus: false
        });

        if(req.status == 401) {
            dispatch(toggleLoader())
            setErrorMessage('Incorrect username/password')
        }

        if(req.status == 200 && req.data.success) {
            dispatch(setLoggedIn(true));
            dispatch(setUser(req.data.user))
            setTimeout(() => {
                navigate('/choose')
            }, 100);
        }

    }


    const getUser = async () => {
        const req = await axios({
            url: 'http://localhost:8080/api/v1/getUser',
            method: 'GET',
            withCredentials: true,
            validateStatus: false
        });

        return req.data;
    }

    useEffect(()=> {
        getUser().then(res => {
            if(res.loggedIn) {
                dispatch(setLoggedIn(true));
                dispatch(setUser(res.user))
                navigate('/choose')
            }
        })    
    }, [])



    return (
        <div className={styles.sections}>
            <div className={styles.login}>
                <div className={styles.loginWrapper}>
                    <div className={styles.loginHeader}>
                        <ReactSVG src={"./src/assets/svg/logo.svg"}/>
                        <p className={styles.titleBold}>Skylinker Portal</p>
                        <p className={styles.titleNormal}>For Agencies</p>
                    </div>

                    <div className={styles.errorPopup} style={!errorMessage ? { display: "none" } : {} }>
                        <p className={styles.errorPopupText}>{errorMessage}</p>
                    </div>

                    <div className={styles.loginForm}>
                        <div className={styles.username + " " + styles.loginInputWrapper}>
                            <FontAwesomeIcon icon={faUser} className={styles.loginIcon} />
                            <input type="text" id="username" className={styles.loginInput} placeholder="Username" onChange={e => setUsernameForm(e.target.value)} />
                        </div>
                        <div  className={styles.username  + " " + styles.loginInputWrapper}>
                            <FontAwesomeIcon icon={faLock} className={styles.loginIcon}/>
                            <input type="password" id="password" placeholder="Password" className={styles.loginInput}  onChange={e => setPasswordForm(e.target.value)} />
                        </div>

                        <button className={styles.loginBtn} onClick={login}>
                            <p className={styles.loginBtnLabel}>LOGIN</p>
                        </button>
                    </div>
                    <p className="copyright">© Nova Explorers Robotics Team 2023</p>
                </div>

            </div>
            <div className={styles.imageRight}>
                <div className={styles.droneImg}></div>
            </div>
        </div>
    )
}