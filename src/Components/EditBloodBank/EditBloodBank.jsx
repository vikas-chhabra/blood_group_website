import React, { Component } from 'react'
import Helper from '../../inc/Helper';
import { countries } from '../../inc/Countries';
import { ToastContainer, toast } from 'mdbreact'

var formValues = {};

export default class EditBloodBank extends Component {

    state = {
        bloodBank: [],
        states: [],
        country: '',
        address: ''
    }

    componentWillMount() {
        Helper('GET', `/bloodBanks/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    bloodBank: res.bloodBank,
                    country: res.bloodBank.country,
                    address: res.bloodBank.address,
                    state: res.bloodBank.state,
                }, _ => {
                    countries.forEach(v => {
                        if (v.country === this.state.bloodBank.country) {
                            this.setState({
                                states: v.states
                            })
                        }
                    })
                })
            })
    }

    saveForm = e => {
        e.preventDefault();
        Helper('PUT', `/bloodBanks/${this.props.match.params.id}`, formValues)
            .then(res => {
                console.log(res);
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
        formValues[e.target.name] = e.target.value;
        if (e.target.name === 'address') {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        if (e.target.name === 'state') {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        if (e.target.name === 'country') {
            this.setState({
                [e.target.name]: e.target.value
            });
            countries.forEach(v => {
                if (v.country === e.target.value) {
                    this.setState({
                        states: v.states
                    })
                }
            })
        }
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
                            <input type="text" className="form-control" name="name" placeholder="Enter blood bank Name Here" defaultValue={this.state.bloodBank.name} required onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Mobile No.<span className="required-input">*</span></label>
                            <input type="number" className="form-control" name="contactNo" placeholder="Enter Mobile No. Here" defaultValue={this.state.bloodBank.contactNo} required onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Country <span className="required-input">*</span></label>
                            <select className="form-control" name="country" value={this.state.country} onChange={e => this.getData(e)} required>
                                <option value="">Please Select</option>
                                {
                                    countries.map(v => {
                                        return (
                                            <option key={v.country} value={v.country}>{v.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>State<span className="required-input">*</span></label>
                            <select className="form-control" name="state" value={this.state.state} onChange={e => this.getData(e)} required>
                                <option value="">Please Select</option>
                                {
                                    this.state.states.map(v => {
                                        return (
                                            <option key={v} value={v}>{v}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Number of Donors<span className="required-input">*</span></label>
                            <input type="number" className="form-control" name="noOfDonors" defaultValue={this.state.bloodBank.noOfDonors} onBlur={e => this.getData(e)} required />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Address<span className="required-input">*</span></label>
                        <textarea name="address" className="form-control" cols="4" rows="3" value={this.state.address} onChange={e => this.getData(e)} required></textarea>
                    </div>
                    <div className="form-row">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
