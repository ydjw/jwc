import React, {Component} from 'react'
import './style.less'

/**
 * 培养方案
 */
export default class Pyfa extends Component {


    openNewPage = async (pageIndex) => {
        window.open(`http://202.194.188.5:8057/${pageIndex}index.htm`, "_self")
    }


    render() {
        return (
            <div id='pyfa-root'>
                <p>
                    全日制本科生培养方案
                </p>
                <div onClick={() => this.openNewPage(2015)}>
                    2015级各专业培养方案
                </div>
                <div onClick={() => this.openNewPage(2016)}>
                    2016级各专业培养方案
                </div>
                <div onClick={() => this.openNewPage(2017)}>
                    2017级各专业培养方案
                </div>
                <div onClick={() => this.openNewPage(2018)}>
                    2018级各专业培养方案
                </div>
            </div>
        )
    }
}