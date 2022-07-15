import React from 'react';
import ReactDOM from 'react-dom';
import { SpecialitiesUI } from 'specialities';
import App from './App';
import Football from './events';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props){
  return <h1>Hello {props.name}</h1>
}
const info = {
  name :"Md. Sakibur Reza",
  dob  :{
    date : 9,
    month: "April",
    year : 1997
  },
  pob: "Tangail"
}
function MyInfo(props){
  return(
    <div>
    <div className="Name">My name is {props.namee}</div>
    <div className='Date of Birth'> My Birthdate is {props.dobb} </div>
    <div className='Place of Birth'>Place is {props.pobb}</div>
    </div>
    
  )
}
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color:"Red",
      price: 120,
      speed: 150
    };
  }
  changeColor=()=>{
    this.setState({color: "Blue"});
  }
  render(){
    return(
      <div>It's BMW. It's color is{this.state.color}
      <p>The model is {this.props.model}</p>
      <button type='button' onClick={this.changeColor}>
            Color is {this.state.color}
      </button>
      </div>
    )
  }
}
/*function tick(){
  const element =<div><h1>Hello World</h1>
                  <h2>It is {new Date().toLocaleTimeString()}</h2>
                  </div> 
  root.render(element);
}
setInterval(tick,1000);
*/
/*
root.render(
    <MyInfo namee={info.name} dobb={info.dob.date} pobb={info.pob} ></MyInfo>
)*/
/*root.render(<Car model="B8"/>);*/
//root.render(<Football/>)
root.render(<App/>)

/*
root.render(
  <div>
  <Welcome name="Shisir"></Welcome>
  <Welcome name ="Mouri"></Welcome>
  <Welcome name ="Nahid"></Welcome>
  </div>

)
*/

