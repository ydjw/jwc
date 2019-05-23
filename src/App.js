import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import PersonManage from './pages/personManage.jsx'
import GoodsItemDetail from './pages/community/GoodsItemDetails'
import QyPicture from './pages/community/qypicture'


class App extends Component {
    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/personManage" component={PersonManage}/>
                    <Route path="/community/goodsItemDetail" component={GoodsItemDetail}/>
                    <Route path="/community/qyPicture" component={QyPicture}/>
                </div>
            </Router>
        );
    }
}

export default App;
