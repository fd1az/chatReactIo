import React, { Component } from 'react';
import Mensaje from './Mensaje';
import './style.css';

class Mensajes extends Component {
  constructor(props){
    super(props)
    
  }
  

    render() {
      return (
        <div className="message-candidate center-block">
          {
            this.props.data.map((obj,i) =>{
                return (<Mensaje key={i} data={obj} />)
            })
          }
        </div>


          
      );
    }
  }
  
  export default Mensajes;