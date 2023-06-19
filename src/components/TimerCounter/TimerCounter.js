import { memo, useEffect, useState } from 'react';

function TimerCounter() {
    const [time, setTime] = useState(formatAMPM(new Date()));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(formatAMPM(new Date()));
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime;
    }

    return <div>{time}</div>;
}

export default memo(TimerCounter);
