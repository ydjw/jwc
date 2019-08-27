import React, {Component} from 'react'
import './style.less'
import icReplyImg from './img/share_reply.png'
import heartSharePen from './img/heart_share_pen.png'
import icAddPicture from './img/ic_add_picture.png'
import {Toast} from "antd-mobile";


export default class Dynamic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dynamicEntity: {},
            dynamicAuthor: {},
            commentEntity: [],
            commentPictureUrl: "",
            showType: 1 //1 显示评论列表 2，显示发布评论界面
        }
    }

    changeShowType() {
        this.setState({
            commentPictureUrl: "",
            showType: !this.state.showType
        })
    }


    showPictureDetail(url) {
        if (window.zhuandian)
            window.zhuandian.showPictureDetail(url)
    }

    /**
     * 发布评论
     * @returns {Promise<void>}
     */
    releaseNewComment = async () => {
        let commentStr = document.getElementById("comment-input").value;
        const pointer = window.bmob.Pointer("TopicEntity")
        const pointerId = pointer.set(window.util.getSearchByName('objectId'))
        const query = window.bmob.Query("TopicCommentEntity")
        if (commentStr.length < 1) {
            Toast.info('请输入内容参与讨论...', 2)
        } else {
            query.set("commentContent", commentStr);
            query.set("commentPictureUrl", this.state.commentPictureUrl);
            query.set("topicEntity", pointerId);
            query.save().then(
                res => {
                    this.getCommentList();
                    this.setState({
                        showType: 1
                    })
                }
            )

        }


    }

    componentDidMount() {
        let objectId = window.util.getSearchByName('objectId')

        window.bmob.Query('TopicEntity').get(objectId)
            .then(res => {
                this.setState({
                    dynamicEntity: res,
                })
            })

        this.getCommentList();

        //挂载图片选择回调函数到window给原生Android使用
        window['onPictureSelector'] = (picUrl) => {
            this.setState({
                commentPictureUrl: picUrl,
            })
        }

    }

    getCommentList() {
        let objectId = window.util.getSearchByName('objectId')
        let queryCommentList = window.bmob.Query('TopicCommentEntity');
        queryCommentList.equalTo("topicEntity", "==", objectId);
        queryCommentList.find().then(result => {
            this.setState({
                commentEntity: result
            })
        })
    }

    openNativePictureSelector = () => {
        if (window.zhuandian) {
            window.zhuandian.openPictureSelector()
        } else {
            Toast.loading("请登陆后APP并升级到最新版本后添加图片评论...", 5, () => {
                window.open(global.constants.app_down_url, "_self")
            })
        }
    }


    render() {
        let {dynamicEntity, dynamicAuthor, commentEntity, showType, commentPictureUrl} = this.state
        return (
            <div id='dynamic-root'>
                <div id='dynamic-card'>
                    <span id='new-dynamic-info'>本期话题</span>
                    <span id="dynamic-author">{dynamicAuthor.realName}</span>
                    <span id='dynamic-time'>{dynamicEntity.updatedAt}</span>
                    <div id="dynamic-content">{dynamicEntity.content}</div>
                    <div id='img-contaniner'>
                        {
                            (dynamicEntity && dynamicEntity.dynamicImgUrl || []).map((item, index) => {
                                return <img src={item} onClick={() => this.showPictureDetail(item)}/>
                            })
                        }

                    </div>
                    <div id='reply-count'>
                        <img className='dynamic-reply-img' src={icReplyImg}/>
                        <span className='dynamic-reply-text'>{commentEntity.length}人参与</span>
                    </div>
                </div>

                {
                    showType == 1 ?
                        (commentEntity || []).map((item, index) => {
                            return (
                                <div id='comment-item'>

                                    <div id='comment-index'>
                                        <div>{index + 1}楼</div>
                                        <div id='commenter-time'>{item.createdAt}</div>
                                    </div>
                                    <span id='comment-content'>{item.commentContent}</span>

                                    {
                                        item.commentPictureUrl && item.commentPictureUrl.length > 0 ?
                                            <img id='comment-pic' src={item.commentPictureUrl}
                                                 onClick={() => this.showPictureDetail(item.commentPictureUrl)}/> :
                                            <div></div>
                                    }

                                </div>
                            )
                        })
                        :
                        <div id='root'>
                            <input id='comment-input'
                                   type="text"
                            />
                            <img id='comment-pic'
                                 src={commentPictureUrl.length > 0 ? commentPictureUrl : icAddPicture}
                                 onClick={this.openNativePictureSelector}/>
                            <div id='release-comment' onClick={this.releaseNewComment}>

                                <span>发布评论</span>
                            </div>
                        </div>

                }

                {
                    showType == 1 ?
                        <div id='round-btn' onClick={this.changeShowType.bind(this)}>
                            <img id='new-pen' src={heartSharePen}/>
                        </div>
                        :
                        <div>
                        </div>
                }

            </div>
        )
    }
}
