import React, { Component } from 'react';
import './style.css';
import io from 'socket.io-client'

const ENDPOINT = "http://localhost:5000"
const socket = io(ENDPOINT);

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      messageObj : [
        {
          text: ""
        }
      ],
      value:''
       // this is where we are connecting to with sockets
    }
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
      }
    );
  }
 
  componentWillMount (){
    socket.on('chat message', (msg) => {
      this.setState(
        {
        messageObj: this.state.messageObj.concat({text: msg})
        }
        );
    })

  }
  send = (event) => {
    event.preventDefault();
      console.log(this.state.value);
      socket.emit('chat message', this.state.value);
      this.state.value = '';
  }
  render() {
    

    return ( 
      <div>
        <ul>
          {
            this.state.messageObj.map((obj,i)=>{
              return (<li key={i}>{obj.text}</li>)
            })
          }
        </ul>

        <form action="">
          < input  value={this.state.value} onChange={this.handleChange}/>
          <button onClick={ this.send } >Send</button>
        </form>
      </div>

    );
  }
}

export default Form;


/*$(function () {
  var socket = io();
  $('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
  });
  socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
  });
});*/