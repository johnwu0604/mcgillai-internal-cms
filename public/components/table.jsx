import React from 'react'
import axios from 'axios'

class Table extends React.Component {

    constructor() {
        super()
        this.state = {
            members: {}
        }
    }

    componentDidMount() {
        axios.get('/members')
          .then(res => {
              this.setState({ members: res.data })
          })
    }

    render() {
        return (
            <div class="table">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Student #</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Resume URL</th>
                        <th scope="col">Subscribed</th>
                        <th scope="col">School</th>
                        <th scope="col">Year</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Member Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {createTable(this.state.members)}
                    </tbody>
                </table>
            </div>
        );
    }
}

var createTable = (members) => {
    let table = []
    for (let i = 0; i < members.length; i++) {
        table.push(<tr>
                    <th scope="row">{members[i].id}</th>
                    <td>{members[i].first_name}</td>
                    <td>{members[i].last_name}</td>
                    <td>{members[i].email}</td>
                    <td>{members[i].phone}</td>
                    <td>{members[i].resume_url}</td>
                    <td>{members[i].subscribed.toString()}</td>
                    <td>{members[i].school}</td>
                    <td>{members[i].year}</td>
                    <td>{members[i].degree}</td>
                    <td>{members[i].member_type}</td>
                   </tr>)
    }
    return table;
}  

export default Table;