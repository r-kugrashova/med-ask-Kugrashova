import React from 'react';
import './PolisNumberInput.css';

function PolisDate(props) {
    return(
        <div className="Caption" id="PolisDate">
            <p>Срок окончания полиса:{props.date}</p>
        </div>
    )

}
export default PolisDate