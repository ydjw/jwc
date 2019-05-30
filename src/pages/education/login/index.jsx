import React, {Component} from 'react'
import './style.less'


export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.getElementById('login-root').style.height = window.screen.height + 'px'
    }


    render() {
        return (
            <div id='login-root'>
                <div id='top-view'>
                    <span id='app-title'>曲园掌上教务系统</span>
                    <span id='app-info'>曲阜师范大学信息门户</span>
                </div>
                <div id='bottom-view'>

                    <input id='input-username' placeholder='信息门户账号'/>
                    <input id='input-password' placeholder='信息门户密码'/>
                    <div id='login-container'>
                        <span id='btn-login'>戳我登陆</span>
                        <span id='forget-password'>忘记密码？</span>
                    </div>
                    <span id='team-info'>掌上曲园团队出品</span>
                </div>
            </div>
        )
    }

}