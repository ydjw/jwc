import React, {Component} from 'react';
import './style.css'
import app_logo from "./app_logo.png"
import ic_goods_sold_out from './ic_goods_sold_out.png'
import {Toast} from "antd-mobile";


class GoodsItemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            userEntity: {}
        }
    }


    componentDidMount() {
        document.title = '商品详情'
        let objectId = window.util.getSearchByName('objectId')
        const query = window.bmob.Query('GoodsEntity');
        query.get(objectId).then(res => {
            window.bmob.Query('_User').get(res.goodsOwner.objectId).then(result => {
                this.setState({
                        result: res,
                        userEntity: result
                    }
                )
            })
        }).catch(err => {
            console.log(err);
        })

    }

    scanUserInfo(objectId) {
        if (window.zhuandian) {
            window.zhuandian.scanUserInfo(objectId)
        } else {
            Toast.loading("请在登陆后APP查看...", 1, () => {
                window.open(global.constants.app_down_url, "_self")
            })
        }
    }

    openChatPage(objectId) {
        if (window.zhuandian) {
            window.zhuandian.openChatPage(objectId)
        } else {
            Toast.loading("请在登陆后APP查看...", 1, () => {
                window.open(global.constants.app_down_url, "_self")
            })
        }

    }

    showPictureDetail(url, imageArray, index) {
        if (window.zhuandian) {
            try {
                window.zhuandian.showMultiPictureDetail(imageArray, index)
            } catch (e) {
                window.zhuandian.showPictureDetail(url)
            }
        }

    }

    render() {
        let {result, userEntity} = this.state
        return (

            <div id='goods-root-view'>
                <div id='user-info'>
                    <img id='user-head-img' onClick={() => this.scanUserInfo(userEntity.objectId)}
                         src={userEntity.headImgUrl}/>
                    <div id='goods-info'>
                        <span id='user-name'>{userEntity.realName}</span>
                        <span id='goods-time'>{result.createdAt}</span>
                    </div>
                </div>
                <div id='goods-desc'>
                    <div>


                        <div>
                            <span id='goods-price'>{"￥" + result.goodsPrice}</span>
                            <span>{result.tradeType == 1 ? "可议价" : "一口价"}</span>
                        </div>
                        <p id='goods-title'>{result.goodsTitle}</p>

                        <p id='goods-content'>{result.goodsContent}</p>

                        <p id='goods-content'>{result.ownerContactNum}</p>

                    </div>
                    {
                        result.tradeState == 3
                            ? <img id='goods-sold-out' src={ic_goods_sold_out}/>
                            : <div></div>
                    }

                </div>
                {
                    (result && result.goodsUrl || []).map((item, index) => {
                        return <img id='goods-img' onClick={() => this.showPictureDetail(item, result.goodsUrl, index)}
                                    src={item} key={index}/>
                    })
                }

                {/*<div id='bottom'>*/}
                {/*<div id="bottom-app-info">*/}
                {/*<img id='app_logo' src={app_logo}/>*/}
                {/*<div id='app-info'>*/}
                {/*<span id='app-name'>掌上教务</span>*/}
                {/*<span id='app-desc'>最懂你的教务社交APP</span>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<span id='download-now'><a id='herf-app' href='app://ydjw/social?page=flea_market'>去看看</a></span>*/}
                {/*</div>*/}
                <div id='bottom-btn'>
                    <span id='scan-user-info' onClick={() => this.scanUserInfo(userEntity.objectId)}>
                        看TA资料
                    </span>
                    <span id='chat-to-user' onClick={() => this.openChatPage(userEntity.objectId)}>
                        问问TA
                    </span>
                </div>
            </div>


        )
    }
}

export default GoodsItemDetail