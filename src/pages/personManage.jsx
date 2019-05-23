import React, {Component} from 'react';
class PersonManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {}
        }
    }

    componentDidMount() {
        let aa= window.util.getSearchByName("id")
        if (aa!=null){
            window.bmob.User.login(aa, aa).then(res => {
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