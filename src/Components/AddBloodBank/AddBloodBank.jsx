import React, { Component } from 'react';
import { ToastContainer, toast } from 'mdbreact';
import Helper from '../../inc/Helper';
import { countries } from '../../inc/Countries';

var formValues = {};

export default class AddBloodBank extends Component {

    state = {
        states: []
    }

    saveForm = e => {
        e.preventDefault();
        Helper('POST', '/donors', formValues)
            .then(res => {
                if (res.success) {
                    toast.success(res.msg, {
                        position: "top-right",
                    });
                }
                else {
                    toast.warn(res.msg, {
                        position: "top-right",
                    });
                }
            })
            .catch(error => {
                toast.warn(error, {
                    position: "top-right",
                });
            })
    }

    getData = e => {
        formValues[e.target.value] = e.target.name;
        if (e.target.name === 'country') {
            countries.forEach(v => {
                if (v.country === e.target.value) {
                    this.setState({
                        states: v.states
                    })
                }
            })
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <ToastContainer
                    className="toaster"
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
                <div className="row">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Add Blood Bank</h1>
                    </div>
                </div>
                <div className="row">
                    <h6 className="pl-3"><span className="required-input">*</span> fields are mandatory</h6>
                </div>
                <form className="mt-3 pl-3 pb-3" onSubmit={e => this.saveForm(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label>Enter Blood Bank Name <span className="required-input">*</span></label>
                            <input type="text" className="form-control" name="name" placeholder="Enter blood bank Name Here" required onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Mobile No.<span className="required-input">*</span></label>
                            <input type="number" className="form-control" name="contactNo" placeholder="Enter Mobile No. Here" required onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Country <span className="required-input">*</span></label>
                            <select className="form-control" name="country" onBlur={e => this.getData(e)} required>
                                <option value="">Please Select</option>
                                {
                                    countries.map(v => {
                                        return (
                                            <option value={v.country}>{v.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>State<span className="required-input">*</span></label>
                            <select className="form-control" name="state" onBlur={e => this.getData(e)} required>
                                <option value="">Please Select</option>
                                {
                                    this.state.states.map(v => {
                                        return (
                                            <option value={v}>{v}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Number of Donors<span className="required-input">*</span></label>
                            <input type="number" className="form-control" name="noOfDonors" onBlur={e => this.getData(e)} required />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Address<span className="required-input">*</span></label>
                        <textarea name="address" className="form-control" cols="4" rows="3" onBlur={e => this.getData(e)} required></textarea>
                    </div>
                    <div className="form-row">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
