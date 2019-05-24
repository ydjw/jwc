import React, {Component} from 'react';
import './style.css'
import app_logo from "./app_logo.png"


class GoodsItemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            userEntity: {}
        }
    }

    componentDidMount() {
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


    render() {
        let {result, userEntity} = this.state
        return (

            <div id='root-view'>
                <div id='user-info'>
                    <img id='user-head-img' src={userEntity.headImgUrl}/>
                    <div id='goods-info'>
                        <span id='user-name'>{userEntity.realName}</span>
                        <span id='goods-time'>{result.createdAt}</span>
                    </div>
                </div>
                <p id='goods-title'>{result.goodsTitle}</p>

                <div>
                    <span id='goods-price'>{"￥" + result.goodsPrice}</span>
                    <span>{result.tradeType == 1 ? "可议价" : "一口价"}</span>
                </div>
                {
                    (result && result.goodsUrl || []).map((item, index) => {
                        return <img id='goods-img' src={item} key={index}/>
                    })
                }

                <div id='bottom'>
                    <div id="bottom-app-info">
                        <img id='app_logo' src={app_logo}/>
                        <div id='app-info'>
                            <span id='app-name'>掌上教务</span>
                            <span id='app-desc'>最懂你的教务社交APP</span>
                        </div>
                    </div>
                    <span id='download-now'><a id='herf-app' href='app://ydjw/social?page=flea_market'>去看看</a></span>
                </div>
            </div>


        )
    }
}

export default GoodsItemDetail