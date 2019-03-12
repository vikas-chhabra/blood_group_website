import React, { Component } from 'react'
import Helper from '../../inc/Helper'
import Loader from '../../inc/Loader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'mdbreact'

export default class RegisteredUsers extends Component {

  state = {
    loader: false,
    users: []
  }

  toggleLoader = _ => this.setState({ loader: !this.state.loader })


  deleteAdmin = id => {
    this.toggleLoader();
    Helper('DELETE', `/users/${id}`)
      .then(res => {
        if (res.success) {
          toast.success(res.msg, {
            position: "top-right",
          });
          Helper('GET', '/users')
            .then(user => {
              this.setState({
                users: user.users
              });
              this.toggleLoader();
            });
        }
        else {
          toast.error(res.msg, {
            position: "top-right",
          });
          this.toggleLoader();
        }
      })
  }

  componentWillMount() {
    this.toggleLoader();
    Helper('GET', '/users')
      .then(user => {
        this.setState({
          users: user.users
        });
        this.toggleLoader();
      });
  }

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
        <div className="d-flex">
          <h1 className="h3 mb-0 text-gray-800">Registered Admin List</h1>
          <div className="ml-auto">
            <Link to="/dashboard/register-admin" className="btn btn-outline-primary">Register Here</Link>
          </div>
        </div>
        <table className="ui celled table mt-3">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Registered At</th>
              <th>Active</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(v => {
              let date = new Date(v.updatedAt).toDateString();
              return (
                <tr key={v._id}>
                  <td data-table="User Name">{v.userName}</td>
                  <td data-table="Email">{v.email}</td>
                  <td data-table="Registered At">{date}</td>
                  <td data-table="Active">{v.active ? 'Active' : "Inactive"}</td>
                  <td data-table="Options" className="d-flex">
                    {/* <Link to={`/dashboard/edit-donor/${v._id}`} className="btn btn-success"><i className="fas fa-pen"></i></Link> */}
                    {v.active ? <button onClick={_ => this.deleteAdmin(v._id)} className="btn btn-danger ml-1"><i class="fas fa-trash-alt"></i></button> : <button onClick={_ => this.deleteAdmin(v._id)} className="btn btn-success ml-1"><i className="fas fa-check"></i></button>}
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
