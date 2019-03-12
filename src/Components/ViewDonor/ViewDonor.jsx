import React, { Component } from 'react';
import Loader from '../../inc/Loader';
import Helper from '../../inc/Helper';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'mdbreact';

export default class ViewDonor extends Component {

    state = {
        donors: [],
        loader: false
    }

    deleteDonor = id => {
        this.toggleLoader();
        Helper('DELETE', `/donors/${id}`)
            .then(res => {
                if (res.success) {
                    Helper('GET', '/donors')
                        .then(donors => {
                            this.setState({
                                donors: donors.donors
                            });
                            this.toggleLoader();
                        });
                }
                else {
                    this.toggleLoader();
                    toast.success(res.msg, {
                        position: "top-right",
                    });
                }
            })
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
                <ToastContainer
                    className="toaster"
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
                <Loader loader={this.state.loader} />
                <h1 className="h3 mb-0 text-gray-800">Donor List</h1>
                <table className="ui celled table mt-3">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Blood Group</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Mobile No.</th>
                            <th>Address</th>
                            <th>Occupation</th>
                            <th>Options</th>
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
                                    <td data-table="Address">{v.address}</td>
                                    <td data-table="Occupation">{v.occupation}</td>
                                    <td data-table="Options" className="d-flex">
                                        <Link to={`/dashboard/edit-donor/${v._id}`} className="btn btn-success"><i className="fas fa-pen"></i></Link>
                                        <button onClick={_ => this.deleteDonor(v._id)} className="btn btn-danger ml-1"><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
