import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import SideBar from '../inc/SideBar';
import TopBar from '../inc/TopBar';
import Footer from '../inc/Footer';
import Dashboard from './Dashboard/Dashboard';
// import Menu from './Menu/Menu';
import { PageUp } from '../inc/PageUp';
import AddDonor from './AddDonor/AddDonor';
import ViewDonor from './ViewDonor/ViewDonor';

export default class Main extends Component {
    render() {
        return (
            <>
                <div id="wrapper">
                    <SideBar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <Switch>
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route path="/dashboard/add-donor" component={AddDonor} />
                                <Route path="/dashboard/view-donors" component={ViewDonor} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
                <PageUp />
            </>
        )
    }
}