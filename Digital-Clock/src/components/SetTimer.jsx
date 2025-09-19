import React from 'react'
import './SetTimer.css'
import { useState, useEffect } from 'react'

const SetTimer = () => {

    const [hourvalue, setHourValue] = useState('00')
    const [minvalue, setMinValue] = useState('02')
    const [secvalue, setSecValue] = useState('00')
    const [action, setAction] = useState(false);


    const handleToggle = () => {
        if (action) {
            
            setAction(false);
        } 

        else {
            
            if ( parseInt(hourvalue,10) > 0 || parseInt(minvalue,10) > 0 || parseInt(secvalue,10) > 0) {
                setAction(true);
            }
        }
    };

    useEffect(() => {
        let minutes = parseInt(minvalue, 10);
        let seconds = parseInt(secvalue, 10);
        let hours = parseInt(hourvalue, 10);

        if (seconds > 59) {
            setSecValue('00');
            seconds = 0;
        }
        if (minutes > 59) {
            setMinValue('00');
            minutes = 0;
        }


        const interval = setInterval(() => {

            if (action === false) return;

            if(hours ===0 && minutes ===0 && seconds ===0){
                setAction(false);
                return;
            }

            if (hours > 0 && minutes === 0 && seconds == 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }

            else if (minutes > 0 && seconds === 0) {
                minutes--;
                seconds = 59;
            }
            else if (seconds > 0) {
                seconds--;
            }


            setHourValue(String(hours).padStart(2, "0"));
            setMinValue(String(minutes).padStart(2, "0"));
            setSecValue(String(seconds).padStart(2, "0"));



        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [minvalue, secvalue, hourvalue, action])





    return (
        <div className='app' id='SetTimer'>
            <div className="inputs">
                <input type="Text" name="" id="hour" value={hourvalue} maxLength={2} onChange={(e) => setHourValue(e.target.value)} />
                :
                <input type="Text" name="" id="min" value={minvalue} maxLength={2} onChange={(e) => setMinValue(e.target.value)} />
                :
                <input type="Text" name="" id="sec" value={secvalue} maxLength={2} onChange={(e) => setSecValue(e.target.value)} />


            </div>

            <button onClick={handleToggle}>{action? 'Stop': 'Start'}</button>
        </div>
    )
}

export default SetTimer
