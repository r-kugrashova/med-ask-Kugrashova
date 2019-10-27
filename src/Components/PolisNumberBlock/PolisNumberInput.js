import React, {Component} from 'react';

import './PolisNumberInput.css';
import '../../Data/SKCompanys';

class PolisNumberInput extends Component {

    constructor() {
        super();
        this.updateInputValue = this.updateInputValue.bind(this);
    }


    updateInputValue(event) {
        if (event.keyCode === 13) {
            this.props.upDatePolisNumber(event.target.value);
        }
        ;
    };

    render() {

        return (
            <div>
                <input
                    type='text'
                    className='PolisNumberInput'
                    placeholder='Введите номер полиса'
                    onKeyDown={this.updateInputValue}
                />
            </div>
        )
    }

}

export default PolisNumberInput