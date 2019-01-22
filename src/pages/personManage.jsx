import React, {Component} from 'react';
import bmob from "hydrogen-js-sdk";
import util from '../util/util'
class PersonManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {}
        }
        bmob.initialize('67be1cdcf5559af1366b88f688f56473', 'd522e6953340491e6cec8e840543183b')
    }

    componentDidMount() {
        let aa= util.getSearchByName("id")
        if (aa!=null){
            bmob.User.login(aa, aa).then(res => {
                this.setState({
                    result: res
                })
            }).catch(err => {
            })
        }

    }

    render() {
        let {result} = this.state
        return (
            <div>
                <div>{result.username}</div>
            </div>
        )
    }
}

export default PersonManage