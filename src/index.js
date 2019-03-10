import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './Components/Login/Login';
import Main from './Components/Main';
import './main.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component ={Main} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
