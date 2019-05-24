import React, {Component} from 'react'
import './style.less'

export default class Dynamic extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div id='dynamic-card'>
                    <span id='new-dynamic-info'>一个新的动态来自▶</span>
                    <span id="dynamic-author">哈哈</span>
                </div>
            </div>
        )
    }
}
