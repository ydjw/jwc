import React, {Component} from 'react'
import './style.less'

class AppIntro extends Component {

    openNativeAboutUs = async () => {
        if (window.zhuandian) {
            window.zhuandian.openAboutUsPage()
        }

    }

    downAppPage = async () => {
        window.open(global.constants.app_down_url, "_self")
    }

    render() {
        return (
            <div id='intro-root-view'>



                <div id='btn-container'>
                    <span id = 'app-info'>教务深度结合社区，一款超炫酷的校园社区APP</span>
                    <img src='image/ic_we_chat.jpg'/>
                    <span id = 'we-chat-info'>微信扫描我，体验最丰富的校园生活</span>
                    <span id='down-btn' onClick={this.downAppPage}>下载APP</span>

                </div>
                {/*<img className="img-content" src='https://i.loli.net/2019/08/14/AeHJ2FIoOzbSG5r.png'/>*/}
                {/*<img className="img-content" src='image/app_intro_01.png'/>*/}
                <img className="img-title" src='image/ic_app_home_title.jpg'/>
                <img className="img-content" src='image/ic_app_home.png'/>
                <img className="img-title" src='image/ic_app_jiaowu_title.jpg'/>
                <img className="img-content" src='image/ic_app_jiaowu.png'/>
                <img className="img-title" src='image/ic_app_social_title.jpg'/>
                <img className="img-content" src='image/ic_app_social.png'/>
                <span id='about-us' onClick={this.openNativeAboutUs}>关于我们</span>
                <span id='copyright'>Copyright © 2014, 掌上曲园团队 , All Rights Reserved</span>
            </div>
        )
    }
}

export default AppIntro
