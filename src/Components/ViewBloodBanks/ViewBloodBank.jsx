import React, { Component } from 'react';
import Loader from '../../inc/Loader';
import Helper from '../../inc/Helper';
import { Link } from 'react-router-dom';

export default class ViewBloodBank extends Component {

    state = {
        bloodBanks: [],
        loader: false
    }

    toggleLoader = _ => this.setState({ loader: !this.state.loader })

    componentWillMount() {
        this.toggleLoader();
        Helper('GET', '/bloodBanks')
            .then(bloodBanks => {
                this.setState({
                    bloodBanks: bloodBanks.bloodBanks
                })
                this.toggleLoader();
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <Loader loader={this.state.loader} />
                <h1 className="h3 mb-0 text-gray-800">Donor List</h1>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Blood Bank</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Address</th>
                            <th>No. of Donors</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bloodBanks.map(v => {
                                return (
                                    <tr key={v._id}>
                                        <td data-table="Blood Bank">{v.name}</td>
                                        <td data-table="Contact">{v.contactNo}</td>
                                        <td data-table="Country">{v.country}</td>
                                        <td data-table="State">{v.state}</td>
                                        <td data-table="Address">{v.address}</td>
                                        <td data-table="No. of Donors">{v.noOfDonors}</td>
                                        <td data-table="Options">
                                            <Link to={"/dashboard/edit-blood-bank/"+v._id} className="btn btn-success"><i className="fas fa-pen"></i></Link>
                                            <button className="btn btn-danger ml-1"><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>

                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
