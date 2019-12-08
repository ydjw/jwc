import './style.less'
import React,{Component} from 'react'

export default class GetPassword extends Component{
    render(){
        return(
            <div id='getpassword-root'>
               
               <span id = "title">您可以通过以下方式找回密码</span>
               <div className="item-root">
                   <span>1.关注微博《曲园掌上教务》留言</span>
                   <img  src='image/ic_weibo.png'/>
               </div>
               <div className="item-root">
                   <span>2.关注微信公众号留言找回密码</span>
                   <img  src='image/ic_we_chat.jpg'/>
               </div>
               <div className="item-root">
                   <span>3.添加QQ群联系管理员</span>
                   <img  src='image/ic_qq_qun.png'/>
               </div>
            </div>
        )
    }
}