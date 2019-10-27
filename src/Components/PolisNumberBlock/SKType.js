import React, {Component} from 'react';

import './SKType.css';

class SKType extends Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.update(e.target.id)
    }

    render() {

        return (
            <div>
                <button
                    className={this.props.SKType === "ОМС" ? "leftButtonActive" : "leftButton"}
                    onClick={this.handleChange} id="ОМС">
                    <label
                        className={this.props.SKType === "ОМС" ? "activeLabel" : "passiveLabel"}
                        onClick={this.handleChange}
                        id="ОМС">OMC
                    </label>
                </button>
                <button
                    className={this.props.SKType === "ДМС" ? "rightButtonActive" : "rightButton"}
                    onClick={this.handleChange}
                    id="ДМС">
                    <label
                        className={this.props.SKType === "ДМС" ? "activeLabel" : "passiveLabel"}
                        onClick={this.handleChange}
                        id="ДМС">ДMC
                    </label>
                </button>
            </div>
        )
    }
}

export default SKType;