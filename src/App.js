import { useState,useEffect } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';


function App() {
  const [name, setname] = useState("deniz")
  
  useEffect(() => {
    setTimeout(() => {
      setname('güncellendi')
    }, 4000);
    

  }, [])
  
  return (
    <>
      {name}
    </>
  );
}

export default App;
