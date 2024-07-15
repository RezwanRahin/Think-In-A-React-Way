import { useEffect, useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('starting timer');
        setInterval(tick, 2000);
    }, []);

    const tick = () => {
        setDate(new Date());
    };

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}

export default MyComponent;
