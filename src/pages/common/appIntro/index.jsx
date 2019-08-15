import React, {Component} from 'react'
import './style.less'

class AppIntro extends Component {

    openNativeAboutUs = async () => {
        if (window.zhuandian) {
            window.zhuandian.openAboutUsPage()
        }

    }

    render() {
        return (
            <div id='intro-root-view'>
                <img className="img-content" src='https://i.loli.net/2019/08/14/AeHJ2FIoOzbSG5r.png'/>
                <img className="img-content" src='image/app_intro_01.png'/>
                <img className="img-title" src='image/ic_app_home_title.jpg'/>
                <img className="img-content" src='image/ic_app_home.jpg'/>
                <img className="img-title" src='image/ic_app_jiaowu_title.jpg'/>
                <img className="img-content" src='image/ic_app_jiaowu.jpg'/>
                <img className="img-title" src='image/ic_app_social_title.jpg'/>
                <img className="img-content" src='image/ic_app_social.jpg'/>
                <span id='about-us' onClick={this.openNativeAboutUs}>关于我们</span>
                <span id='copyright'>Copyright © 2014, 掌上曲园团队 , All Rights Reserved</span>
            </div>
        )
    }
}

export default AppIntro
