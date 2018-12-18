import React, { Component } from 'react';
import moment from 'moment';
import './style.css';

class Mensaje extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div className="row">
                <div className="col-xs-8 col-md-6">
                    <h4 className="message-name">{this.props.data.id}</h4>
                </div>
                <div className="col-xs-4 col-md-6 text-right message-date">
                    {moment(this.props.data.sendDate).format("DD-MM-YYYY")}
                </div>
                
                <div className="row message-text">
                    {this.props.data.text}
                </div>
            </div>
        );
    }
        
}

export default Mensaje;