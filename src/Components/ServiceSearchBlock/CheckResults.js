import React, {Component} from 'react';
import CheckedItem from "./CheckItem";
import './ChoosenServices.css';

class CheckResults extends Component{
    render(){
        const list = this.props.choosen
        const bu1 = list.map(item =>{
            return (<CheckedItem
                item={item}
                key={item.id}/>)});

        const list2=bu1.splice(0,  Math.floor(list.length/2));
        return(
            <div>
                <div id="container1">{bu1}</div>
                <div id="container2">{list2}</div>
            </div>
        )
    }
}
export default CheckResults;