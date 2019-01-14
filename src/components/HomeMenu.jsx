import React, { Component } from 'react';
import './css/homeMenu.css'

class HomeMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="menu-container">
                <img id="menu-img" src={this.props.menuImg}></img>
                <span id="menu-title">{this.props.menuTitle}</span>
            </div>
        )
    }
}

export default HomeMenu