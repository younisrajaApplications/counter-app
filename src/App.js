import './App.css';
import Counter from './Counter.js';
import { CounterProvider } from './CounterContext.js';

function App() {

  return (
    <CounterProvider>
      <div className="App">
        <h1>Adkhar Counter</h1>
        <Counter name={"Alhamdulillah"}/>
        <Counter name={"Subhan Allah"}/>
        <Counter name={"Allah u Akbar"}/>
        <Counter name={"Other Adhkar"}/>
      </div>
    </CounterProvider>
  );
}

export default App;
