import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";










// function App() {


// const [lightON ,setColor] = useState ("red");
//   return (

//     <div>
     
//   <div className="container">
//   <div className="circle red" color="red" onClick={() => setColor("on") }> </div>
//   <div className="circle yellow" color="yelow"></div>
//   <div className="circle " color="green"></div>
// </div>
//     </div>
//   );
// }

class Traffic extends React.Component{

state = {

  on: false
}
brillo = () => {
  this.setState({on: !this.state.on})

}
render(){
  if (this.state.on){
    return(
      <div>
     
      <div className="container">
      <div className={"circle red  "} onClick={this.brillo }> </div>
      <div className={"circle  yellow  "} onClick={this.brillo}> </div>
      <div className={"circle green  "} onClick={this.brillo}> </div>
    </div>
        </div>
    )
    }
    else{
      return (
        <div>
     
        <div className="container">
        <div className={"circle red on "} onClick={this.brillo}> </div>
        <div className={"circle yellow on "} onClick={this.brillo}> </div>
        <div className={"circle green on "} onClick={this.brillo}> </div>
      </div>
          </div>
      )
    }

}


}

export default Traffic;

