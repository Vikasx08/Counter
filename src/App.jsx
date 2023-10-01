import { useState } from 'react';
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => { (counter => 0) ? setCounter(counter + 1) : setCounter(0) };
  const dec = () => { (counter > 0) ? setCounter(counter - 1) : setCounter(0) };
  const res = () => { setCounter(0) };
  return (
    <>
      <div id="wrap">
        <h1>Counter: {counter}</h1>
        <button onClick={() => inc()}>Increase</button>
        <button onClick={() => dec()}>Decrease</button>
        <button onClick={() => res()}>Reset Value</button>
      </div>
    </>
  )
}

export default App
