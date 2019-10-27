import React, {Component} from 'react';
import './ChoosenServices.css';

class ChosenItem extends Component{

    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    };

    handleClick(){
        this.props.delete(this.props.item)
    };

    render(){
        return(
            <div id="choosenItem">
                <div className="icon"></div>
                <p>{this.props.item.service}</p>
                <button id="cancelBut" onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default ChosenItem