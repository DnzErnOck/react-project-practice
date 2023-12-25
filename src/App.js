import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';


function App() {
  const [name, setname] = useState()

  const [data, setdata] = useState([])
  const clickFunc = ()=> {
    setdata(prev => ([...prev,name]))
  }
  
  return (
    <>
      <input type='text' onChange={ (e) =>setname(e.target.value)}></input> 
      <button onClick={clickFunc}>Ekle</button>
      <div>{name}</div>   
      <br/>
      <div>{
          data.map((dt,index) => (
              <div key={index}>
                  {dt}
              </div>
          ))
        }</div>
    </>
  );
}

export default App;
