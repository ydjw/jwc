import React, {Component} from 'react';
import "./style.less"
import EducationApi from "../../../api/educations";

export default class ScoreQuery extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.getUserScore()
    }

    async getUserScore() {
        let useraccount = window.util.getStorage('useraccount')
        let data = {
            'method': 'getCjcx',
            'xh': useraccount,
            // 'xqxnid': '2019-2020-1' //非必填，不填输出全部成绩
        }

        let res = await EducationApi.commonGet(data)
        this.setState({
            data: res
        })
    }

    render() {
        let {data} = this.state
        return (
            <div id='score-root'>

                {
                    data.success ?
                        <div id='score-item'>
                            <div id='score-type'>
                                优
                            </div>
                            <div id='score-content'>
                                <span>数学与应用数据</span>
                                <span>公共基础课 · 必修</span>
                                <span>85分</span>
                            </div>
                        </div>
                        :
                        <div id = 'no-score'>
                           <img src = 'image/ic_no_data.png'/>
                           <span>请先完成评教...</span>
                        </div>
                }


            </div>
        )
    }
}