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
       let commentStr = document.getElementById("comment-input").value;
        const pointer = window.bmob.Pointer("TopicEntity")
        const pointerId = pointer.set(window.util.getSearchByName('objectId'))
       const query= window.bmob.Query("TopicCommentEntity")
       query.set("commentContent",commentStr);
       query.set("topicEntity",pointerId);
       query.save().then(
           res=>{
            this.getCommentList();
            this.setState({
                showType: 1
            })
           }
       )

        
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
      

    }

    getCommentList(){
        let objectId = window.util.getSearchByName('objectId')
        let queryCommentList = window.bmob.Query('TopicCommentEntity');
        queryCommentList.equalTo("topicEntity", "==", objectId);
        queryCommentList.find().then(result => {
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
                                   
                                   <div id='comment-index'>
                                   <div>{index+1}楼</div>
                                   <div id='commenter-time'>{item.createdAt}</div>
                                   </div>
                                    <span id='comment-content'>{item.commentContent}</span>
                                    
                                </div>
                            )
                        })
                        :
                        <div id='root'>
                            <input id='comment-input' 
                            type="text"
                          />
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
