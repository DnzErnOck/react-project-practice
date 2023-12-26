import { useRef } from "react";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/product" element={<Product />}></Route>
        
         </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
