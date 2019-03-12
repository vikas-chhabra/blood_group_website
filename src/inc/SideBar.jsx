import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SideBar extends Component {
    toggleSidebar = (e) => {
        document.getElementsByTagName('BODY')[0].classList.toggle("sidebar-toggled");
        document.getElementById('accordionSidebar').classList.toggle('toggled');
    }
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Blood Donate</div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                    <hr className="sidebar-divider" />

                </li>
                <div className="sidebar-heading">
                    Blood Bank Section
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/blood-banks" >
                        <i className="fas fa-users"></i>
                        <span>Blood Banks</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/add-blood-bank" >
                        <i className="fas fa-plus"></i>
                        <span>Add Blood Bank</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Donor Section
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/view-donors" >
                        <i className="fas fa-users"></i>
                        <span>View Donors</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/add-donor" >
                        <i className="fas fa-plus"></i>
                        <span>Add Donor</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Users Section
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/registered-users" >
                        <i className="fas fa-user"></i>
                        <span>Registered Users</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={(e) => { this.toggleSidebar(e) }}></button>
                </div>
            </ul>
        )
    }
}
