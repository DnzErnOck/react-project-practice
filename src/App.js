import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';


function App() {
  const [count, setcount] = useState(0)
  const plus = () => {
    setcount(count+1)
  }

  return (
    <>
    <Button name={"azalt"} onClick={() => setcount(count-1)}/>
      <button onClick={() => setcount(count-1)}>Azalt</button>
      <div>{count}</div>
      <button onClick={plus}>Artır</button>
    </>
  );
}

export default App;
