import React, { Component } from 'react';
import './css/home.css';
import HomeMenu from '../components/HomeMenu.jsx'
import personManageImg from "../img/ic_people_black_48dp.png"
import xuankeImg from "../img/social.png"
import jiaoxueImg from "../img/ic_domain_black_48dp.png"
import kaowuImg from "../img/ic_event_note_black_48dp.png"
import zongheImg from "../img/ic_quick_contacts_dialer_black_48dp.png"
import jiaoxuepingguImg from "../img/ic_local_library_black_48dp.png"
import { Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div id="header-container"></div>
                <div id="menu-item">
                    <Link to="/personManage">
                        <HomeMenu menuTitle="个人管理"
                                  menuImg={personManageImg}></HomeMenu>
                    </Link>
                    <HomeMenu menuTitle="选课管理"
                              menuImg={xuankeImg}></HomeMenu>
                </div>
                <div id="menu-item">
                    <HomeMenu menuTitle="教学资源"
                              menuImg={jiaoxueImg}></HomeMenu>
                    <HomeMenu menuTitle="考务管理"
                              menuImg={kaowuImg}></HomeMenu>
                </div>
                <div id="menu-item">
                    <HomeMenu menuTitle="综合查询"
                              menuImg={zongheImg}></HomeMenu>
                    <HomeMenu menuTitle="教学评价"
                              menuImg={jiaoxuepingguImg}></HomeMenu>
                </div>
            </div>
        );
    }
}

export default Home;
