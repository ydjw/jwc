import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import PersonManage from './pages/personManage.jsx'
import GoodsItemDetail from './pages/community/GoodsItemDetails'
import QyPicture from './pages/community/qypicture'
import Dynamic from './pages/community/dynamic'
import LostAndFound from './pages/community/lostAndFound'
import LoginPage from './pages/education/login'
import SyllabusPage from './pages/education/syllabus'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/personManage" component={PersonManage}/>
                    <Route path="/community/goodsItemDetail" component={GoodsItemDetail}/>
                    <Route path="/community/qyPicture" component={QyPicture}/>
                    <Route path="/community/lostAndFound" component={LostAndFound}/>
                    <Route path="/community/dynamic" component={Dynamic}/>
                    <Route path="/education/login" component={LoginPage}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/education/syllabus" component={SyllabusPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
