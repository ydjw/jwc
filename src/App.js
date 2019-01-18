import React, { Component } from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import PersonManage from './pages/personManage.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/personManage" component={PersonManage}/>

                </div>
            </Router>
        );
    }
}

export default App;
