import React, { Component } from 'react'
import SideBar from '../inc/SideBar';
import TopBar from '../inc/TopBar';
import Footer from '../inc/Footer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Menu from './menu/Menu';
import {PageUp} from '../inc/PageUp';
import Login from '../components/login/Login'

export default class Main extends Component {
    render() {
        return (
            <span>
            <div id="wrapper">
                <SideBar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar/>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/dashboard/kuchvi" component={Menu}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
            <PageUp/>
            </span>
        )
    }
}