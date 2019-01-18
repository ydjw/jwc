import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home.jsx'
import Page1 from './pages/Page1.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="'/" component={Home}/>
                    <Route path="'/Page1" component={Page1}/>
                </div>
            </Router>
        );
    }
}

export default App;
