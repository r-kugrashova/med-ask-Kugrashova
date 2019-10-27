import React, {Component} from 'react';

import './App.css';
import SKType from './Components/PolisNumberBlock/SKType.js';
import ServiceInput from './Components/ServiceSearchBlock/ServiceInput';
import PolisNumberInput from './Components/PolisNumberBlock/PolisNumberInput';
import SKCompanys from './Data/SKCompanys';
import matchingFound from './Components/PolisNumberBlock/matchingFound';
import CompanyNameInput from './Components/PolisNumberBlock/CompanyNameInput';
import PolisDate from './Components/PolisNumberBlock/PolisDate';
import Phone from './Components/PolisNumberBlock/Phone';
import CheckResults from './Components/ServiceSearchBlock/CheckResults'


class App extends Component {

    constructor() {
        super();
        this.state = {
            SKType: 'ОМС',
            SKName: '',
            PolisNumber: '',
            matchID: '-1',
            dateSelected: '',
            SKCompanyPhone: '',
            choosenS: [],
            checked: false
        }
        this.upDateSKType = this.upDateSKType.bind(this);
        this.suGgest = this.suGgest.bind(this);
        this.upDatePolisNumber = this.upDatePolisNumber.bind(this);
        this.updateCompanyName = this.updateCompanyName.bind(this);
        this.sendToS = this.sendToS.bind(this);
        this.delFromS = this.delFromS.bind(this);
        this.check = this.check.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    upDateSKType(inp) {
        if (matchingFound(this.state.PolisNumber) < 0) {
            this.setState({
                SKType: inp,
            })
        }
    }

    upDatePolisNumber(inp) {
        this.setState({
            PolisNumber: inp
        });
        const ID = matchingFound(inp);
        if (ID >= 0) {
            this.suGgest(ID)
        } else {
            this.setState({
                SKName: '',
                dateSelected: '',
                SKCompanyPhone: '',
                matchID: ID
            })
        }
        ;
    }

    suGgest = (ID) => {
        this.setState({
            SKType: SKCompanys[ID].SKCompanyType,
            SKName: SKCompanys[ID].SKCompanyName,
            matchID: ID,
            dateSelected: SKCompanys[ID].SKCompanyDate,
            SKCompanyPhone: SKCompanys[ID].SKCompanyTel
        })
    }

    updateCompanyName = (name) => {
        const SKName = this.companyName.getSelectedValue();
        if (matchingFound(this.state.PolisNumber) < 0) {
            this.setState({
                SKName
            })
        }
    }

    sendToS(choosen) {
        this.setState({
            choosenS: this.state.choosenS.concat(choosen)
        })
    };

    delFromS(del) {
        const matchedIdDel = this.state.choosenS.indexOf(del);
        this.setState(prevState => {
            let newData = prevState.choosenS.slice()
            newData.splice(matchedIdDel, 1)
            return {choosenS: newData}
        });
    };

    check() {
        this.setState({
            checked: !this.state.checked
        })
    }

    clearAll() {
        window.location.reload();
    }

    render() {
        return (
            <div className="App">
                <h1 id="CheckervH">Проверка услуг медицинского страхования</h1>
                <SKType
                    update={this.upDateSKType}
                    SKType={this.state.SKType}
                />
                <PolisNumberInput
                    suggest={this.suGgest}
                    polisNumber={this.state.PolisNumber}
                    upDatePolisNumber={this.upDatePolisNumber}

                />
                {this.state.dateSelected ?
                    <PolisDate
                        date={this.state.dateSelected}
                    /> : ''}
                {this.state.SKCompanyPhone ?
                    <Phone
                        date={this.state.SKCompanyPhone}
                    /> : ''}

                {!this.state.checked ?
                    (this.state.choosenS[0] ?
                        <button id="NewReqBut" onClick={this.check}>Проверить</button>
                        : <button id="NewReqButUn">Проверить</button>)
                    : <button onClick={this.clearAll} id="refreshBut">Новый запрос</button>}

                <h2 id="ChooseServH">Выберите медицинские услуги</h2>
                <ServiceInput
                    sendChoosen={this.sendToS}
                    delChosen={this.delFromS}
                    choosenS={this.state.choosenS}
                    checked={this.state.checked}
                />
                <CompanyNameInput
                    ref={companyName => this.companyName = companyName}
                    update={this.updateCompanyName}
                    SKName={this.state.SKName}
                    matchID={this.state.matchID}
                />
                {this.state.checked ?
                    <CheckResults
                        choosen={this.state.choosenS}
                    /> : ''}

            </div>
        );
    }
}

export default App;
