
/* type ButtonProps = {
    children?: string,
    text?: number,
} */

import { useState } from "react";

export function Button() {
    // let counter = 0
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);

        return counter
    }

    return (
        // <button>{props.children || props.text || 'Default' }</button>
        <button onClick={increment}>
            {counter}
        </button>
    )
}
