import React, { useState, useEffect } from 'react';

import './TimeClock.css'

const TimeClock = () => {
    const [time, setTime] = useState(new Date());

    const [format, setFormat] = useState('12-hour');

    function handleClick() {
        setFormat((term) => {
            if (term === '12-hour') {
                return '24-hour';
            }
            return '12-hour';
        });
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    return (
        <>
            <div className="app">
                {format === '12-hour' && time.toLocaleTimeString()}
                {format === '24-hour' && time.toLocaleTimeString('en-GB')}

                <button onClick={handleClick} id='btn'>
                    <p>
                        {format === '12-hour'
                            ? '12-Hour'
                            : '24-Hour'}
                    </p>

                </button>
            </div>

        </>
    )
}

export default TimeClock
