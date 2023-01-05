import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let data = this.imageData()

    return(
      
        <div className="App">
           <h1>Kalvium Gallery</h1>       

          {/* <img src={elephant} alt=""/> */}
        <div className="image">
          <img src={data[0].img} alt=""/>
          <img src={data[1].img} alt=""/>
        </div>

        <div className="image">
          <img src={data[2].img} alt=""/>
          <img src={data[3].img} alt=""/>
        </div>
      </div>
    )
  }


}



