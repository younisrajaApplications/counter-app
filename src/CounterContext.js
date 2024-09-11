import React, { createContext, useState } from 'react';
import './App.css';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [lowLimit, setLowLimit] = useState(0);

    return (
        <CounterContext.Provider value={{ lowLimit, setLowLimit }}>
            {children}
        </CounterContext.Provider>
    );
};