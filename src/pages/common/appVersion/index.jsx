import React, {Component} from 'react'
import './style.less'
import appLogo from '../../../img/app_logo.png'

export default class AppVersion extends Component {
    render() {
        return (
            <div className="version-root-view">
                <div className="app-info" onclick="window.zhuandian.openAboutUsPage()">
                    <img src={appLogo}/>
                    <div>曲园掌上教务
                    </div>
                    <div>-最新版本 V3.2.1-</div>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.2.1 </span>
                    <div className="version-time">更新
                        日志：2018-12-16
                    </div>

                    <div className="line"/>
                    1.修复教务资源无法正常访问时软件崩溃异常<br/>
                    2.社交页新增一闪模块<br/>
                    3.个人中心新增用户修改昵称入口<br/>


                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.2.0</span>
                    <div className="version-time">更新
                        日志：2018-12-07
                    </div>

                    <div className="line"/>
                    1.修复用户头像跟跳蚤市场图片不能正常显示的问题<br/>
                    2.跳蚤市场发布商品新增类型逻辑处理<br/>
                    3.优化部分教务资源访问逻辑处理

                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.1.3</span>
                    <div className="version-time">更新
                        日志：2018-10-30
                    </div>

                    <div className="line"/>
                    1.修复教务处强行修改教务咨询导致APP闪退问题
                    <br/>

                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.1.2</span>
                    <div className="version-time">更新
                        日志：2018-10-24
                    </div>

                    <div className="line"/>
                    1.修复部分用户发帖异常崩溃问题
                    <br/>
                    2.解决访问教务资源不能自动登录问题<br/>
                </div>
                <div className="line"/>
                <div className="version-item">
                    <span className="version-title">版本 3.1.1</span>
                    <div className="version-time">更新
                        日志：2018-09-30
                    </div>

                    <div className="line"/>
                    1.教务处添加验证码登录校验<br/>
                    2.升级用户表部分字段，解决部分重名用户信息冲突问题<br/>
                    3.引入社交首页功能导航（围绕社区开展子业务）<br/>
                    4.完善跳蚤市场模块<br/>
                    5.完善失物招领模块<br/>
                    6.校友动态模块化，为接入教务服务做准备工作<br/>
                    7.社交首页功能索引导航优化<br/>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.1.0  </span>
                    <div className="version-time">更新日志：2018-08-28</div>

                    <div className="line"/>
                    1.社区点击用户头像新增查看大图功能<br/>
                    2.增加查看别人全部动态功能（匿名不可查）<br/>
                    3.解决查询历年课表崩溃问题<br/>
                    4.优化web推广页，支持回退功能<br/>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.0.9</span>
                    <div className="version-time">更新日志：2018-08-16</div>

                    <div className="line"/>
                    1.适配低版本手机确保线上用户正常在线升级<br/>
                    2.配置360手机市场、应用宝、百度手机助手等渠道自动打包<br/>
                    3.首页下架bing每日一览图片，添加banner及闪屏页在线json参数配置<br/>
                    4.适配API16-27 Notification适配，适配API26手机上应用图标<br/>
                    5.迁移umeng数据到转点<br/>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.0.8</span>
                    <div className="version-time">更新日志：2018-08-06</div>

                    <div className="line"/>
                    1.修复发帖人删除帖子后，参入回帖的人检索“我参与的”奔溃退出异常<br/>
                    2.升级uPush，正式打通3.0之后的消息通道<br/>
                    3.每日一览新增用户自主开启开关功能、替换日课表周课表切换图标<br/>
                    4.细化匿名发动态用户头像处理，防止部分情况下，匿名帖子显示用户真是头像<br/>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.0.7</span>
                    <div className="version-time">更新日志：2018-08-06</div>

                    <div className="line"/>
                    1.教务系统升级金智教育平台，重新做登录适配<br/>
                    2.教务处升级金智教育平台后原2.x版本（采用老教务系统）<br/>
                    全部不能正常访问教务资源，老版本全部为废弃版本
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 3.0.6</span>
                    <div className="version-time">更新日志：2018-06-12</div>

                    <div className="line"/>
                    1.UI、UE全新升级更棒的体验<br/>
                    2.新增用户修改头像功能（被要求了好久，终于加上了）<br/>
                    3.优化曲园校友动态社区、匿名动态、实名制评论<br/>
                    4.部分细节优化<br/>
                </div>
                <div className="line"/>

                <div className="version-item">
                    <span className="version-title">版本 2.x</span>
                    <div className="version-time">更新日志：废弃版本</div>

                    <div className="line"/>
                    原2.x 版本定义为废弃版本，不再更新维护，<br/>
                    请下载最新版使用！
                </div>
                <div className="line"/>

            </div>
        )
    }
}