



import React, {lazy, Suspense} from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Spinner,  } from "reactstrap";
const Home = lazy(() => import("./Pages/Home"))
const Contact = lazy(() => import("./Pages/Contact"))
const About =lazy(() => import("./Pages/About"))

function App() {
 
  return ( 
    <Suspense fallback={<Spinner
       type ={"grow"} className="text-primary position-absolute top-50 start-50 translate-middle"/>}>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element ={<Contact/>}/>
  </Routes></BrowserRouter></Suspense>
  );
}

export default App;
