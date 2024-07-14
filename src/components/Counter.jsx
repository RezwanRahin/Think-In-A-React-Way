import { useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCounter((prevState) => prevState + 1);
            i++;
        }
    }

    return (
        <div>
            {count}
            <p>
                <button type="button" onClick={() => setCounter((prevState) => prevState + 1)}>Add 1</button>
            </p>
            <p>
                <button type="button" onClick={addFive}>Add 5</button>
            </p>
        </div>
    );
}

export default Counter;
