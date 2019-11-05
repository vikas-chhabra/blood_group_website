import React, { Component } from 'react';
import Loader from '../../inc/Loader';
import Helper from '../../inc/Helper';
import { ToastContainer, toast } from 'react-toastify';
import { countries } from '../../inc/Countries';

var formValues = {};
export default class EditDonor extends Component {

    state = {
        loader: false,
        states: [],
        country: '',
        address: '',
        donor: '',
        gender: '',
        bloodGroup: '',
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
        if (e.target.name === 'gender') {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        if (e.target.name === 'bloodGroup') {
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

    editDonor = e => {
        e.preventDefault();
        Helper('PUT', `/donors/${this.props.match.params.id}`, formValues)
            .then(res => {
                if (res.success) {
                    toast.success(res.msg, {
                        position: "top-right",
                    });
                    this.context.histroy.push('/dashboard/view-donors');
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

    componentWillMount() {
        Helper('GET', `/donors/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    donor: res.donor,
                    country: res.donor.country,
                    address: res.donor.address,
                    state: res.donor.state,
                    gender: res.donor.gender,
                    bloodGroup: res.donor.bloodGroup,
                }, _ => {
                    countries.forEach(v => {
                        if (v.country === this.state.donor.country) {
                            this.setState({
                                states: v.states
                            })
                        }
                    })
                })
            })
    }

    toggleLoader = _ => this.setState({ loader: !this.state.loader })

    render() {
        return (
            <div className="container-fluid">
                <Loader loader={this.state.loader} />
                <ToastContainer
                    className="toaster"
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
                <div className="row">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Add Donor</h1>
                    </div>
                </div>
                <div className="row">
                    <h6 className="pl-3"><span className="required-input">*</span> fields are mandetory</h6>
                </div>
                <form className="mt-3 pl-3 pb-3" onSubmit={e => this.editDonor(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label>Enter Name <span className="required-input">*</span></label>
                            <input type="text" className="form-control" name="donorName" placeholder="Enter Name Here" defaultValue={this.state.donor.donorName} required onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Date of Birth<span className="required-input">*</span></label>
                            <input type="date" className="form-control" name="dob" placeholder="Enter Date of Birth Here" defaultValue={this.state.donor.dob} required onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Mobile No.<span className="required-input">*</span></label>
                            <input type="number" className="form-control" name="mobile" placeholder="Enter Mobile No. Here" defaultValue={this.state.donor.mobile} required onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Another Mobile No.</label>
                            <input type="number" className="form-control" name="anotherMobile" placeholder="Enter Another Mobile No. Here" defaultValue={this.state.donor.anotherMobile} onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Occupation</label>
                            <input type="text" className="form-control" name="occupation" placeholder="Enter Occupation Here" defaultValue={this.state.donor.occupation} onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Gender <span className="required-input">*</span></label>
                            <select name="gender" className="form-control" required value={this.state.gender} onChange={e => this.getData(e)}>
                                <option value="">Please Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Blood Group <span className="required-input">*</span></label>
                            <select name="bloodGroup" className="form-control" required value={this.state.bloodGroup} onChange={e => this.getData(e)}>
                                <option value="">Please Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
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
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Any type of disease</label>
                            <input type="text" name="disease" className="form-control" placeholder="Enter Disease Here" defaultValue={this.state.donor.disease} onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Previous date of donated blood</label>
                            <input type="date" name="lastTimeDonate" className="form-control" defaultValue={this.state.donor.lastTimeDonate} onChange={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Address</label>
                            <textarea name="address" className="form-control" cols="4" rows="3" value={this.state.address} onChange={e => this.getData(e)}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
