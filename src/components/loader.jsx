import { useUI } from '../hooks/useUI';

import { useLottie } from 'lottie-react';
import animationData from '../assets/lottie/drone.json'
import { useEffect, useRef } from 'react';

import { animated, useSpring } from '@react-spring/web'


export default function Loader() {

    const loader = useUI();
    const [springs, api] = useSpring(() => ({
        from: { opacity: 0 },
        config: { duration: 100 }
    }))
    const loaderEl = useRef()

    useEffect(()=> {
        if(loader.loader) {
            loaderEl.current.classList.remove('hiddenLoader')
            loaderEl.current.classList.add('loader')
            api.start({
                from: {
                   opacity: 0 
                },
                to: {
                    opacity: 1
                }
            })
        } else {
            api.start({
                from: {
                   opacity: 1 
                },
                to: {
                    opacity: 0
                },
            })

            setTimeout(() => {
                loaderEl.current.classList.add('hiddenLoader')
                loaderEl.current.classList.remove('loader')
            }, 300);
        }
    }, [loader])
    
    const options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    };
    const lottie = useLottie(options)
    
    lottie.animationContainerRef?.current?.classList.add('droneLoader');
    return (
        <animated.div className="hiddenLoader" style={springs} ref={loaderEl}>
            <>{lottie.View}</>
        </animated.div>
    )
}