import React, { Component } from 'react'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

export default class TopBar extends Component {

    state = {
        searchData: '' 
    }

    getData = e => this.setState({ searchData: e.target.value })

    logout = _ => {
        cookie.remove('token');
        cookie.remove('email');
        this.props.history.push('/login');
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>


                <form onSubmit={e => this.searchData(e)} className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search Here..."
                            aria-label="Search" aria-describedby="basic-addon2" onChange={e => this.getData(e)} />
                        <div className="input-group-append">
                            <Link className="btn btn-primary" to={`/dashboard/search/${this.state.searchData}`} >
                                <i className="fas fa-search fa-sm"></i>
                            </Link>
                        </div>
                    </div>
                </form>
                <div className="logout-button ml-auto mx-2">
                    <button onClick={this.logout} className="btn btn-outline-danger">
                        Logout <i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </nav>
        )
    }
}
