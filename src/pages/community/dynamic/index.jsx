import React, {Component} from 'react'
import './style.less'
import icLikeImg from './img/share_likes.png'
import icReplyImg from './img/share_reply.png'
import heartSharePen from './img/heart_share_pen.png'


export default class Dynamic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dynamicEntity: {},
            dynamicAuthor: {},
            commentEntity: [],
        }


    }

    componentDidMount() {
        let objectId = window.util.getSearchByName('objectId')
        window.bmob.Query('HeartShare').get(objectId)
            .then(res => {
                window.bmob.Query('_User')
                    .get(res.author.objectId).then(result => {
                    this.setState({
                        dynamicEntity: res,
                        dynamicAuthor: result
                    })
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
        let {dynamicEntity, dynamicAuthor, commentEntity} = this.state
        console.log(commentEntity, 111)
        return (
            <div id='dynamic-root'>
                <div id='dynamic-card'>
                    <span id='new-dynamic-info'>一个新的动态来自▶</span>
                    <span id="dynamic-author">{dynamicAuthor.realName}</span>
                    <div id='dynamic-title'>
                        <img id='dynamic-author-header' src={dynamicAuthor.headImgUrl}/>
                        <span id='dynamic-type'>{dynamicEntity.contentType}</span>
                        <span id='dynamic-school'>曲园</span>
                        <span id='dynamic-time'>{dynamicEntity.updatedAt}</span>
                    </div>
                    <div id="dynamic-content">{dynamicEntity.content}</div>
                    <div>
                        <img className='dynamic-reply-img' src={icLikeImg}/>
                        <span className='dynamic-reply-text'>40</span>
                        <img className='dynamic-reply-img' src={icReplyImg}/>
                        <span className='dynamic-reply-text'>{commentEntity.length}</span>
                    </div>
                </div>

                {

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
                }

                <div id='round-btn'>
                    <img id='new-pen' src={heartSharePen}/>
                </div>

            </div>
        )
    }
}
