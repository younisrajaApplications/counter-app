import React from "react";
import { useReducer, useState } from "react";

function counterReducer(state, action) {
    switch(action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return {count: 0};
        default:
            throw new Error();
    }
}

function Counter({name}) {

    const [state, dispatch] = useReducer(counterReducer,{count : 0});

    return (
        <div className="Counter">
            <h2>{name}: {state.count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})} disabled={state.count===0}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})} disabled={state.count===0}>Reset</button>
        </div>
    );
}

export default Counter;