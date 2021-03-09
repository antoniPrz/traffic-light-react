import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";










function App() {


const [lightON ,setColor] = useState ("red");
  return (

    <div>
     
      <div className="container">
  <div className="circle red" color="red" onClick={() => setColor("on") }> </div>
  <div className="circle yellow" color="yelow"></div>
  <div className="circle green" color="green"></div>
</div>
    </div>
  );
}

export default App;
