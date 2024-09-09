import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter.js';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter count={count} increment={increment} decrement={decrement}/>
    </div>
  );
}

export default App;
