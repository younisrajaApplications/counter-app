import React from "react";

function Counter({count, increment, decrement}) {
    return (
        <div className="Counter">
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;