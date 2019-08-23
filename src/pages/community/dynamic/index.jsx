import React, {Component} from 'react'
import './style.less'
import icReplyImg from './img/share_reply.png'
import heartSharePen from './img/heart_share_pen.png'


export default class Dynamic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dynamicEntity: {},
            dynamicAuthor: {},
            commentEntity: [],
            showType: 1 //1 显示评论列表 2，显示发布评论界面
        }
    }

    changeShowType() {
        this.setState({
            showType: !this.state.showType
        })
    }

    /**
     * 发布评论
     * @returns {Promise<void>}
     */
    releaseNewComment = async () => {
        let currentUserId = window.util.getSearchByName('currentUserId')

        this.setState({
            showType: 1
        })
    }

    componentDidMount() {
        let objectId = window.util.getSearchByName('objectId')
        window.bmob.Query('TopicEntity').get(objectId)
            .then(res => {
                this.setState({
                    dynamicEntity: res,
                })
            })

        let query = window.bmob.Query('Comment');
        query.equalTo("heartshare", "==", objectId);
        query.include('myuser', '_User');
        query.find().then(result => {
            this.setState({
                commentEntity: result
            })
        })

    }

    render() {
        let {dynamicEntity, dynamicAuthor, commentEntity, showType} = this.state
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
                                return <img src={item}/>
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
                                    <div>
                                        <img id='commenter-header' src={commentEntity[index].myuser.headImgUrl}/>
                                        <span id='commenter-name'>{commentEntity[index].myuser.username}</span>
                                        <span id='commenter-time'>{commentEntity[index].createdAt}</span>
                                    </div>
                                    <span id='comment-content'>{commentEntity[index].content}</span>
                                </div>
                            )
                        })
                        :
                        <div id='root'>
                            <input id='comment-input'/>
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
                        <div></div>
                }

            </div>
        )
    }
}
