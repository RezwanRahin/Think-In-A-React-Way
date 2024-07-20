import { useEffect, useRef } from "react";

function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                <input ref={inputRef} type="text" placeholder="enter something" />
            </p>
        </div>
    );
}

export default Form;
