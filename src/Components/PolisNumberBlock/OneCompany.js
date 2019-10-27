import React from 'react';

function OneCompany(props) {

    const name = props.name;
    console.log('NAME_ONECOMP', name);
    return(
        <div>
            {name}
        </div>
    )
}
export default OneCompany