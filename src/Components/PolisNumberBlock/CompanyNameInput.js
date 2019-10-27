import React, {Component} from 'react';
import SKCompanys from '../../Data/SKCompanys';
import './CompanyNameInput.css';

export default class CompanyNameInput extends Component {

    getSelectedValue() {
        const e = document.getElementById("select");
        const val = e.options[e.selectedIndex].value;
        return val
    }

    onChange = () => {
        this.props.update(document.getElementById("select").value)
    }

    render() {
        const companyNames = SKCompanys.map(company => company.SKCompanyName);
        const companiesSet = [...new Set(companyNames)];
        return (
            <div>{this.props.matchID>=0?
                <select id="select" className='CompanyNameInput' onChange={this.onChange}>
                    <option value={this.props.SKName}>{this.props.SKName}</option>
                </select>
                :
                <select id="select" className='CompanyNameInput' onChange={this.onChange}>
                    {companiesSet.map(num => {
                        return <option value={num} key={num}>{num}</option>
                    })}
                </select>}
            </div>
        )
    }
}
