import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import SideBar from '../inc/SideBar';
import TopBar from '../inc/TopBar';
import Footer from '../inc/Footer';
import Dashboard from './Dashboard/Dashboard';
import { PageUp } from '../inc/PageUp';
import AddDonor from './AddDonor/AddDonor';
import ViewDonor from './ViewDonor/ViewDonor';
import DashboardComponent from './Dashboard/Dashboard-component';
import RegisteredUsers from './RegisteredUsers/RegisteredUsers';
import AddBloodBank from './AddBloodBank/AddBloodBank';
import ViewBloodBank from './ViewBloodBanks/ViewBloodBank';
import EditBloodBank from './EditBloodBank/EditBloodBank';
import EditDonor from './EditDonor/EditDonor';

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
                                <Route path="/dashboard/edit-donor/:id" component={EditDonor} />
                                <Route path="/dashboard/registered-users" component={RegisteredUsers} />
                                <Route path="/dashboard/add-blood-bank" component={AddBloodBank} />
                                <Route path="/dashboard/blood-banks" component={ViewBloodBank} />
                                <Route path="/dashboard/edit-blood-bank/:id" component={EditBloodBank} />
                                <Route path="/dashboard/components" component={DashboardComponent} />
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