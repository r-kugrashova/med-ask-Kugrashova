import React, {Component} from 'react';
import './ServiceInput.css';

import AutosuggestLine from './AutosuggestLine'

class Autosuggest extends Component {

    render(){
        const inpText = this.props.inpText;
        const itemList = this.props.startItemList.map(serv => {
            return serv.service
        })

        const lowerCaseInpText = inpText.toLowerCase();
        const lowerCaseList = itemList.map(ite => {
            return ite.toLowerCase();
        })

        const matches = lowerCaseList.map(inp =>{
            const res = inp.match(lowerCaseInpText);
            if (res){
                const matchedId = lowerCaseList.indexOf(inp);
                return <AutosuggestLine
                    suggested={this.props.startItemList[matchedId]}
                    update={this.props.update}
                    id={matchedId}
                    />}
            else {
                return
                console.log('not match')
            }
        })

        return(
            <div id="autosuggest_BG">
                <div id="matches">
                    {matches}
                </div>
            </div>
        )
    }
}
export default Autosuggest;