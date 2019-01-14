import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeMenu from './components/HomeMenu.jsx'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="header-container"></div>
                <div id="menu-item">
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                </div>
                <div id="menu-item">
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                </div>
                <div id="menu-item">
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                </div>
                <div id="menu-item">
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                    <HomeMenu menuTitle="发送到"
                              menuImg="https://upload.jianshu.io/users/upload_avatars/7274320/c09aed26-1224-4f89-92ed-5c8e1d810785.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></HomeMenu>
                </div>
            </div>
        );
    }
}

export default App;
