import React, { Component } from 'react';
import $ from 'jquery';
import Helper from '../../inc/Helper';
import { ToastContainer, toast } from 'mdbreact';

var loginData = {};
export default class Login extends Component {


    loginHit = e => {
        e.preventDefault();
        Helper('POST', '/users/login', loginData)
            .then(res => {
                console.log(res);
                if (res.success) {
                    this.props.history.push('/dashboard');
                }
                else {
                    toast.error(res.msg, {
                        position: "top-right",
                    });

                }
            })
    }

    getData = e => {
        loginData[e.target.name] = e.target.value;
    }

    componentDidMount() {
        $(document).ready(function () {

            $('.pour') //Pour Me Another Drink, Bartender!
                .delay(0)
                .animate({
                    height: '150px'
                }, 1500)
                .delay(15600);

            $('.pourTube') //Pour Me Another Drink, Bartender!
                .delay(0)
                .animate({
                    height: '150px'
                }, 0)
                .delay(15600);

            $('#liquid') // I Said Fill 'Er Up!
                .delay(1300)
                .animate({
                    height: '170px'
                }, 15000);

            $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
                .delay(3400)
                .animate({
                    bottom: '200px'
                }, 2500);
        });
    }

    render() {
        return (
            <div className="bg-gradient-primary" style={{ height: "100vh" }}>
                <ToastContainer
                    className="toaster"
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={5000}
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center align-items-center py-5">
                                            <div id="containerBlood">
                                                <div className="pour"></div>
                                                <div className="pourTube"></div>
                                                <div id="beaker">
                                                    <div className="beer-foam">

                                                    </div>
                                                    <div id="plastic">

                                                    </div>

                                                    <div className="drop firstDrop"></div>
                                                    <div className="drop secondDrop"></div>
                                                    <div className="drop thirdDrop"></div>


                                                    <div id="liquid">
                                                        <div className="bubble bubble1"></div>
                                                        <div className="bubble bubble2"></div>
                                                        <div className="bubble bubble3"></div>
                                                        <div className="bubble bubble4"></div>
                                                        <div className="bubble bubble5"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                            <div className="w-100 p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={e => this.loginHit(e)}>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" name="email" placeholder="Enter Email Address..." onChange={e => this.getData(e)} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" name="password" placeholder="Password" onChange={e => this.getData(e)} required />
                                                    </div>
                                                    <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                                                    <hr />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
