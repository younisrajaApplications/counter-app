import React from "react";
import { useState } from "react";

function Counter({name}) {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => {
      if (count > 0) setCount(count - 1);
    }

    const reset = () => setCount(0);

    return (
        <div className="Counter">
            <h2>{name}: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count===0}>Decrement</button>
            <button onClick={reset} disabled={count===0}>Reset</button>
        </div>
    );
}

export default Counter;