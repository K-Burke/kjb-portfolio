import { useState, useEffect } from 'react'

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);
    }, [time]);

    return <p>{time}</p>;
}

export default Timer;
