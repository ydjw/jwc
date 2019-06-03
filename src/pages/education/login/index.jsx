import React, {Component} from 'react'
import './style.less'
import {Toast} from 'antd-mobile';
import EducationApi from '../../../api/educations'


export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.doLogin = this.doLogin.bind(this);
    }

    componentDidMount() {
        document.getElementById('login-root').style.height = window.screen.height + 'px'
        window.onresize = function () {
            document.getElementById('login-root').style.height = window.screen.height + 'px'
        }

    }

    async doLogin() {
        var username = document.getElementById('input-username').value;
        var password = document.getElementById('input-password').value;
        if (password.length > 6 && username.length > 8) {
            Toast.loading('登陆中...', 0);
           let res=await EducationApi.login(`/app.do?method=authUser&xh=${username}&pwd=${password}`)
           if (res.data.success){
               Toast.hide()
               window.util.setStorage('token',res.data.token)
               Toast.info("欢迎你，"+res.data.user.username,3)
               this.props.history.push('/home');

           }else {
               Toast.info("登陆信息有误...",1)
           }
        } else {
            Toast.info('请确保账号密码正确...', 2);
        }
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
                    <input id='input-password' placeholder='信息门户密码' type='password'/>
                    <div id='login-container'>
                        <span id='btn-login' onClick={this.doLogin}>戳我登陆</span>
                        <span id='forget-password'>忘记密码？</span>
                    </div>
                    <span id='team-info'>掌上曲园团队出品</span>
                </div>
            </div>
        )
    }

}