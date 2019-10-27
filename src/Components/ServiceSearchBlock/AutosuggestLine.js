import React, {Component} from 'react';
import './ServiceInput.css';

class AutosuggestLine extends Component {
    constructor(){
        super();
        this.state ={
            clicked:''
        };
        this.handleclick=this.handleclick.bind(this);
    }

    handleclick(){
        this.setState({
            clicked:this.props.suggested.service
        });
        this.props.update(this.props.suggested);
    }

    render() {
        return(
            <div id="line">
                <button id="Autosuggest" onClick={this.handleclick}>{this.props.suggested.service}</button>
            </div>
        )
    }

}
export default AutosuggestLine;