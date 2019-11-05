import React, { Component } from 'react';
import Helper from '../../inc/Helper';
import { ToastContainer, toast } from 'react-toastify';

var formValues = {};

export default class RegisterAdmin extends Component {

    getData = e => {
        formValues[e.target.name] = e.target.value
    }

    saveForm = e => {
        e.preventDefault();
        Helper('POST', '/users/signup', formValues)
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
                        <h1 className="h3 mb-0 text-gray-800">Register Admin</h1>
                    </div>
                </div>
                <div className="row">
                    <h6 className="pl-3"><span className="required-input">*</span> fields are mandatory</h6>
                </div>
                <form className="mt-3 pl-3 pb-3" onSubmit={e => this.saveForm(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label>Enter User Name <span className="required-input">*</span></label>
                            <input type="text" className="form-control" name="userName" placeholder="Enter User Name Here" required onBlur={e => this.getData(e)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Email<span className="required-input">*</span></label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Email Here" required onBlur={e => this.getData(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password<span className="required-input">*</span></label>
                            <input type="text" className="form-control" name="password" placeholder="Enter Email Here" required onBlur={e => this.getData(e)} />
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
