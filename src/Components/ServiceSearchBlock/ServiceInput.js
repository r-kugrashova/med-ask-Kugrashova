import React, {Component} from 'react';

import './ServiceInput.css';
import allServices from '../../Data/Services';
import Autosuggest from '../ServiceSearchBlock/Autosuggest';
import ChosenServices from "../ServiceSearchBlock/ChoosenServices";


class ServiceInput extends Component {

    constructor() {
        super();
        this.state = {
            Service: '',
            allServ: allServices
        };
        this.updateInputValue = this.updateInputValue.bind(this);
        this.updateAutosuggest = this.updateAutosuggest.bind(this);
        this.deleteItemFromList = this.deleteItemFromList.bind(this);

    }

    updateInputValue(evt) {
        this.setState({
            Service: evt.target.value
        });
    }

    updateAutosuggest(inp) {

        this.setState({
            Service: '',
        });
        this.props.sendChoosen(inp);

        const matchedId = this.state.allServ.indexOf(inp);

        this.setState(prevState => {
            let newData = prevState.allServ.slice()
            newData.splice(matchedId, 1)
            return {allServ: newData}
        });

    }

    deleteItemFromList(del) {
        this.props.delChosen(del);
        this.setState({
            allServ: this.state.allServ.concat(del)
        });
    }

    render() {
        return (
            <div>
                <div id="InpBg"></div>
                {this.props.choosenS === [] ?
                    ''
                    : (!this.props.checked ?
                            <ChosenServices
                                chos={this.props.choosenS}
                                delete={this.deleteItemFromList}
                            /> : ''
                    )}

                {this.state.Service === '' ?
                    ''
                    :
                    <Autosuggest
                        startItemList={this.state.allServ}
                        inpText={this.state.Service}
                        update={this.updateAutosuggest}
                    />
                }
                <input
                    value={this.state.Service}
                    onChange={this.updateInputValue}
                    className='ServiceInput'
                    type='text'
                    placeholder='Введите название услуги'
                />


            </div>
        )
    }
}

export default ServiceInput;