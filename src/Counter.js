import React, { useContext } from "react";
import { useReducer } from "react";
import { CounterContext } from "./CounterContext";

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

    const {lowLimit} = useContext(CounterContext);
    const [state, dispatch] = useReducer(counterReducer,{count : 0});

    return (
        <div className="Counter">
            <h2>{name}: {state.count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})} disabled={state.count <= lowLimit}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})} disabled={state.count <= lowLimit}>Reset</button>
        </div>
    );
}

export default Counter;

