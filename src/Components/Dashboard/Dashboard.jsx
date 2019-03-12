import React, { Component } from 'react'
import Loader from '../../inc/Loader';
import Helper from '../../inc/Helper';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    state = {
        loader: false,
        donorInfo: [],
        bloodBankCount: 0,
    };

    toggleLoader = _ => this.setState({ loader: !this.state.loader });

    componentWillMount() {
        this.toggleLoader();
        Helper('GET', '/donors/bloodInfo')
            .then(donorInfo => {
                if (donorInfo.success) {
                    this.setState({
                        donorInfo
                    });
                }
                else
                    console.log(donorInfo.msg);
            });

        Helper('GET', '/bloodBanks')
            .then(res => {
                if (res.success) {
                    this.setState({
                        bloodBankCount: res.bloodBanks.length
                    });
                }
                else
                    console.log(res.msg);
            });
    }

    componentDidMount() {
        this.toggleLoader();
    }

    render() {
        return (
            <div className="container-fluid">
                <Loader loader={this.state.loader} />
                <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
                <h3 className="h4 mb-2 text-gray-800">Total Registered Blood Banks: {this.state.bloodBankCount}</h3>
                <h3 className="h4 mb-5 text-gray-800">Total Registered Donors: {this.state.donorInfo.totalDonors}</h3>
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <Link to="/dashboard/filter-blood-type/oPositive" style={{ textDecoration: "none" }} className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">O Positive</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.oPositive}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link to="/dashboard/filter-blood-type/oNegative" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">O Negative</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.oNegative}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/filter-blood-type/aPositive" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">A Positive</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.aPositive}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/filter-blood-type/aNegative" style={{ textDecoration: "none" }} div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">A Negative</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.aNegative}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/dashboard/filter-blood-type/bPositive" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">B Positive</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.bPositive}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/filter-blood-type/bNegative" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">B Negative</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.bNegative}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/filter-blood-type/abPositive" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">AB Positive</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.abPositive}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/filter-blood-type/abNegative" style={{ textDecoration: "none" }} className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">AB Negative</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.donorInfo.abNegative}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
