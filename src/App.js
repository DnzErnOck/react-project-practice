import { useRef } from "react";

function App() {
 const inputRef = useRef(0)
 
 

 const focusFuc = () =>{
    inputRef.current.focus()
 }

  return (
    <>
    <input type="text" ref={inputRef}></input>
    <button onClick={focusFuc}>
       focus
    </button>
    </>
  );
}

export default App;
