import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import SideBar from '../inc/SideBar';
import TopBar from '../inc/TopBar';
import Footer from '../inc/Footer';
import Dashboard from './Dashboard/Dashboard';
import { PageUp } from '../inc/PageUp';
import AddDonor from './AddDonor/AddDonor';
import ViewDonor from './ViewDonor/ViewDonor';
import RegisteredUsers from './RegisteredUsers/RegisteredUsers';
import AddBloodBank from './AddBloodBank/AddBloodBank';
import ViewBloodBank from './ViewBloodBanks/ViewBloodBank';
import EditBloodBank from './EditBloodBank/EditBloodBank';
import EditDonor from './EditDonor/EditDonor';
import cookie from 'react-cookies';
import SearchState from './SearchState/SearchState';
import RegisterAdmin from './RegisterAdmin/RegisterAdmin';
import FilterBloodType from './FilterBloodType/FilterBloodType';

export default class Main extends Component {

    constructor(props) {
        super(props);
        if (!cookie.load('token') || !cookie.load('email')) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <>
                <div id="wrapper">
                    <SideBar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar history={this.props.history} />
                            {/* <BrowserRouter> */}
                            <Switch>
                                <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/add-donor`} component={AddDonor} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/view-donors`} component={ViewDonor} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/edit-donor/:id`} component={EditDonor} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/registered-users`} component={RegisteredUsers} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/add-blood-bank`} component={AddBloodBank} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/blood-banks`} component={ViewBloodBank} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/register-admin`} component={RegisterAdmin} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/search/:searchTitle`} component={SearchState} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/edit-blood-bank/:id`} component={EditBloodBank} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard/filter-blood-type/:bloodType`} component={FilterBloodType} />
                                {/* <Route path="/dashboard/components" component={DashboardComponent} /> */}
                            </Switch>
                            {/* </BrowserRouter> */}
                        </div>
                        <Footer />
                    </div>
                </div>
                <PageUp />
            </>
        )
    }
}