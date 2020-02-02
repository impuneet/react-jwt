import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import Protected from './Protected';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}  ></Route>
                    <Route path="/login" component={Login}  ></Route>
                    <Profile>
                        <Route path="/profile" component={Protected}  ></Route>
                    </Profile>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
