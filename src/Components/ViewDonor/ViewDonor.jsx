import React, { Component } from 'react';
import Loader from '../../inc/Loader';
import Helper from '../../inc/Helper';

export default class ViewDonor extends Component {

    state = {
        donors: [],
        loader: false
    }

    toggleLoader = _ => this.setState({ loader: !this.state.loader })

    componentWillMount() {
        this.toggleLoader();
        Helper('GET', '/donors')
            .then(donors => {
                this.setState({
                    donors: donors.donors
                });
                this.toggleLoader();
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <Loader loader={this.state.loader} />
                <h1 className="h3 mb-0 text-gray-800">Donor List</h1>
                <table className=" ui celled table mt-3">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Blood Group</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Mobile No.</th>
                            <th>Another Mobile No.</th>
                            <th>Address</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.donors.map(v => {
                            return (
                                <tr key={v._id}>
                                    <td data-table="Donor Name">{v.donorName}</td>
                                    <td data-table="Blood Group">{v.bloodGroup}</td>
                                    <td data-table="DOB">{v.dob}</td>
                                    <td data-table="Gender">{v.gender}</td>
                                    <td data-table="Mobile No.">{v.mobile}</td>
                                    <td data-table="Another Mobile No.">{v.anotherMobile}</td>
                                    <td data-table="Address">{v.address}</td>
                                    <td data-table="Occupation">{v.occupation}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
