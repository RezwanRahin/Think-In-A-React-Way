import { useEffect, useState, useRef } from "react";

function Time() {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            clearInterval(buttonRef.current);
        };
    }, []);

    const tick = () => {
        setDate(new Date());
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={() => clearInterval(buttonRef.current)}>Cleanup</button>
            </p>
        </div>
    );
}

export default Time;
