import React from "react";
import ReactDOM from "react-dom/client";
import lighthouse from "./assets/Lighhouse.jpg"
import compressedLighthouse from "./assets/tinified/Lighhouse.jpg"
const App = () => {
  return (
    <>
    <div style={{textAlign:"center", fontSize:"30px", padding: "5px" , color:"indigo", fontWeight:"bold", backgroundColor:"ivory"}}>Lighthouse - Web Vitals</div>
    {/* <img src={lighthouse} alt="" style={{maxWidth:"100%"}}/> -- This line will decrease performance as it has large size image and no width and height to the image*/}
    <img src={compressedLighthouse} alt="" style={{maxWidth:"100%", width:"600", height:"600"}}/> {/*This is more optimized */}
    </>
  )
}

const domElement = document.getElementById("root");
const root = ReactDOM.createRoot(domElement);
root.render(<App/>)