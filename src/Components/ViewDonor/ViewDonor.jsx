import React, { Component } from 'react'

export default class ViewDonor extends Component {

    state = {
        donors: []
    }

    componentWillMount() {
        fetch(`https://bg-test-api.herokuapp.com/api/donors`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    donors: res.donors
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <table className="table">
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
                                    <td>{v.donorName}</td>
                                    <td>{v.bloodGroup}</td>
                                    <td>{v.dob}</td>
                                    <td>{v.gender}</td>
                                    <td>{v.mobile}</td>
                                    <td>{v.anotherMobile}</td>
                                    <td>{v.address}</td>
                                    <td>{v.occupation}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
