
import './App.css';
import React, {useState} from "react";



class App extends React.Component{

  constructor(){
    super();
    this.state = {
        brilloOn: null
    };
}

render(){

  let redOn = '';
  if (this.state.brilloOn == 'red') redOn = 'on';
  let yellowOn = '';
  if (this.state.brilloOn == 'yellow') yellowOn = 'on';
  let greenOn = '';
  if (this.state.brilloOn == 'green') greenOn = 'on';



  
    return(
      <div>
     
      <div className="container">
      <div className={"circle red  " +redOn } onClick={() => this.setState({brilloOn : 'red'}) }> </div>
      <div className={"circle  yellow " +yellowOn } onClick={() => this.setState({ brilloOn : 'yellow'}) }> </div>
      <div className={"circle green  " + greenOn} onClick={() => this.setState({brilloOn : 'green'}) }> </div>
    </div>
        </div>
    )
    

}


}

export default App;

