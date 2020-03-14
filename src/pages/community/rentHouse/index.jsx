import React, {Component} from 'react'
import './style.less'

export default class RentHouse extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id='rent-house-root'>
                <span id='rent-house-title'>热门房子出租</span>
                <img id='top-img' src='http://pic.3h3.com/up/2019-4/201904131049369108.png'/>
            </div>

        )
    }

}