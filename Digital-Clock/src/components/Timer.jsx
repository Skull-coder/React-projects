import React from 'react'
import './Timer.css'
import { useEffect, useState } from 'react'

const Timer = () => {

    const [second, setSecond] = useState(0)

    const [action, setAction] = useState('start')

    function handleClick(){
        setAction((act)=>{
        if(act === 'start'){
            return 'pause'
        }
        return 'start'
        })
    }

    function reset(){
        setAction('start');
        setSecond(0);
    }

    useEffect(() => {

        if (action == "start") return;

        const interval = setInterval(() => {
            setSecond((sec) => sec + 1);
        }, 1000);

        // Return a function for cleanup
        return () => clearInterval(interval);
    }, [action]);

    const minutes = String(Math.floor(second / 60)).padStart(2, '0');
    const seconds = String(second % 60).padStart(2, '0');
    const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
    return (
        <>
            <div className="app" id='timer'>
                {`${hours}:${minutes}:${seconds}`}
                <div className="buttons">
                    <img src={`./public/${action}.png`} onClick={handleClick}/>
                    <img src="./public/reset.png" alt="" onClick={reset} />
                    
                </div>
            </div>
        </>
    )
}

export default Timer
