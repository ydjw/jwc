import React, {Component} from 'react'
import './style.less'
import {Toast} from 'antd-mobile';

class LostAndFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            userEntity: {}
        }
    }

    componentDidMount() {
        let objectId = window.util.getSearchByName('objectId')
        let query = window.bmob.Query('LostAndFoundEntity');
        query.get(objectId).then((res) => {
            window.bmob.Query('_User').get(res.userEntity.objectId)
                .then(result => {
                    this.setState({
                        result: res,
                        userEntity: result
                    })
                })
        }).catch(err => {
            console.log(err)
        })
    }


    openNativeChatPage = (objectId) => {
        if (window.zhuandian) {
            window.zhuandian.openChatPage(objectId)
        }else {
            Toast.loading("请在登陆后APP查看...", 1,()=>{
                window.open("http://android.myapp.com/myapp/detail.htm?apkName=com.qfnu.ydjw&ADTAG=mobile", "_self")
            })
        }
    }

    openNativeUserInfo(objectId) {
        if (window.zhuandian) {
            window.zhuandian.scanUserInfo(objectId);
        } else {
            Toast.loading("请在登陆后APP查看...", 1,()=>{
                window.open("http://android.myapp.com/myapp/detail.htm?apkName=com.qfnu.ydjw&ADTAG=mobile", "_self")
            })
        }
    }

    render() {
        let {userEntity, result} = this.state
        return (
            <div id='lost-and-found-root-view'>

                <div id='user-info'>
                    <img id='user-header-img' src={userEntity.headImgUrl}
                         onClick={() => this.openNativeUserInfo(userEntity.objectId)}/>
                    <div id='user-name'>
                        <span>{userEntity.realName}</span>
                        <span id='release-time'>{result.createdAt}</span>
                    </div>
                </div>

                <div id='type-lost'>
                    <span>{result.type == 1 ? '丢失:' : '捡到:'}</span>
                    <span> {result.title}</span>
                </div>
                <p id='lost-content'>
                    {result.content}
                </p>

                {
                    result.goodsUrl || [].length > 0
                        ? <p className='img-tips'>如下图</p>
                        : <p className='img-tips'>暂无物品图片信息</p>
                }
                {
                    (result.goodsUrl || []).map((item, index) => {
                        return <img className='goods-url' src={item}/>
                    })
                }

                <div id='bottom-btn'>
                    <span onClick={() => this.openNativeUserInfo(userEntity.objectId)}>看TA资料</span>
                    <span onClick={() => this.openNativeChatPage(userEntity.objectId)}>联系TA</span>
                </div>
            </div>
        );
    }
}

export default LostAndFound