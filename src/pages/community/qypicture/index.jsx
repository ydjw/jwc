import React, {Component} from 'react'
import './style.css'
import app_logo from "../GoodsItemDetails/app_logo.png";


export default class QyPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            userEntity: {}
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData = async () => {
        let objectId =window.util.getSearchByName('objectId')
        let result = await window.bmob.Query('QyPictureEntity').get(objectId);
        if (result != null) {
            let userEntity = await window.bmob.Query('_User').get(result.userEntity.objectId)
            this.setState({
                result,
                userEntity
            })
        }

    }

    render() {
        let {result, userEntity} = this.state
        return (
            <div id='picture-root'>
                <div id='user-info'>
                    <img id='user-header-img' src={userEntity.headImgUrl}/>
                    <div id='user-name-and-time'>
                        <span id='user-name'>{userEntity.realName}</span>
                        <span id='picture-time'>{result.createdAt}</span>
                    </div>
                </div>

                <img id='picture' src={result.pictureUrl}/>

                <div id='bottom'>
                    <div id="bottom-app-info">
                        <img id='app_logo' src={app_logo}/>
                        <div id='app-info'>
                            <span id='app-name'>掌上教务</span>
                            <span id='app-desc'>最懂你的教务社交APP</span>
                        </div>
                    </div>
                    <span id='download-now'><a id='herf-app' href='app://ydjw/social?page=qy_picture'>去看看</a></span>
                </div>
            </div>
        );
    }
}