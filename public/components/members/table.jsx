import React from 'react'
import axios from 'axios'

class MemberTable extends React.Component {

    constructor() {
        super()
        this.state = {
            members: {},
            membersFiltered: {},
            searchValue: ''
        }
    }

    componentDidMount() {
        axios.get('/api/members')
          .then(res => {
              this.setState({ 
                  members: res.data,
                  membersFiltered: res.data
            })
          })
    }

    updateSearchValue(evt) {
        this.setState({
            searchValue: evt.target.value
        })
        if (evt.target.value == '') {
            this.setState({
                membersFiltered: this.state.members
            })
        } else {
            const filtered = this.state.members.filter(member => (
                member.id === this.state.searchValue || member.id.includes(this.state.searchValue) ||
                member.first_name === this.state.searchValue || member.first_name.includes(this.state.searchValue) ||
                member.last_name === this.state.searchValue || member.last_name.includes(this.state.searchValue) ||
                member.email === this.state.searchValue || member.email.includes(this.state.searchValue) ||
                member.phone === this.state.searchValue || member.phone.includes(this.state.searchValue) ||
                member.school === this.state.searchValue || member.school.includes(this.state.searchValue) ||
                member.year === this.state.searchValue || member.year.includes(this.state.searchValue) ||
                member.degree === this.state.searchValue || member.degree.includes(this.state.searchValue) ||
                member.member_type === this.state.searchValue || member.member_type.includes(this.state.searchValue) 
            ))
            this.setState({
                membersFiltered: filtered
            })
        }
    }

    createTable() {
        let table = []
        for (let i = 0; i < this.state.members.length; i++) {
            table.push(<tr key={this.state.members[i].id}>
                        <th scope="row">{this.state.members[i].id}</th>
                        <td>{this.state.members[i].first_name}</td>
                        <td>{this.state.members[i].last_name}</td>
                        <td>{this.state.members[i].email}</td>
                        <td>{this.state.members[i].phone}</td>
                        <td>{this.state.members[i].resume_url}</td>
                        <td>{this.state.members[i].subscribed.toString()}</td>
                        <td>{this.state.members[i].school}</td>
                        <td>{this.state.members[i].year}</td>
                        <td>{this.state.members[i].degree}</td>
                        <td>{this.state.members[i].member_type}</td>
                       </tr>)
        }
        return table
    }

    render() {
        return (
            <div className="container-fluid">
                <a class="btn btn-primary" href="/add-member">Add New Member</a>    
                <div className="card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <h4>McGill AI Society Members</h4>
                        </div>
                        <div className="float-right">
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Search</span>
                            </div>
                            <input value={this.state.searchValue} onChange={evt => this.updateSearchValue(evt)}/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Student #</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Resume URL</th>
                                    <th>Subscribed</th>
                                    <th>School</th>
                                    <th>Year</th>
                                    <th>Degree</th>
                                    <th>Member Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.createTable(this.state.membersFiltered)}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberTable