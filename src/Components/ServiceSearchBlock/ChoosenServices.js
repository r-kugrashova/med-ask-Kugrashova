import React from 'react';
import ChosenItem from './ChosenItem';
import './ChoosenServices.css';

function ChosenServices(props) {
    const list = props.chos
    const bu1 = list.map(item =>{
    return (<ChosenItem
                item={item}
                delete={props.delete}
                key={item.id}/>)});

    const list2=bu1.splice(0,  Math.floor(list.length/2));
    return(
        <div>
            <div id="container1">{bu1}</div>
            <div id="container2">{list2}</div>
        </div>
    )
}
export default ChosenServices;