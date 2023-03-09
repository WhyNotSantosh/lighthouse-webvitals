import React from "react";
import ReactDOM from "react-dom/client";
import lighthouse from "./assets/Lighhouse.jpg"
import compressedLighthouse from "./assets/tinified/Lighhouse.jpg"
const App = () => {
  return (
    <>
    <div style={{textAlign:"center", fontSize:"30px", padding: "5px" , color:"indigo", fontWeight:"bold", backgroundColor:"ivory"}}>Lighthouse - Web Vitals</div>
    <img src={lighthouse} alt="" style={{maxWidth:"100%"}}/>
    </>
  )
}

const domElement = document.getElementById("root");
const root = ReactDOM.createRoot(domElement);
root.render(<App/>)