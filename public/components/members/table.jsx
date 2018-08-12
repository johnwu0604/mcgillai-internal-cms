import React from 'react'
import axios from 'axios'
import { CSVLink } from 'react-csv'

class MemberTable extends React.Component {

    constructor() {
        super()
        this.state = {
            members: {},
            membersFiltered: {},
            searchValue: '',
            deleteMemberId: ''
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

    deleteMember(evt) {
        evt.preventDefault()
        axios.delete('/api/member/'+ this.state.deleteMemberId, { params: {} })
        .then(res => {
            this.setState({ 
                deleteMemberId: '', 
                members: res.data,
                membersFiltered: res.data
          })
        })
    }

    onDeleteMemberIdChange(evt) {
        this.setState({
            deleteMemberId: evt.target.value
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
        for (let i = 0; i < this.state.membersFiltered.length; i++) {
            table.push(<tr key={this.state.membersFiltered[i].id}>
                        <td>{this.state.membersFiltered[i].id}</td>
                        <td>{this.state.membersFiltered[i].first_name}</td>
                        <td>{this.state.membersFiltered[i].last_name}</td>
                        <td><a href={'mailto:'+this.state.membersFiltered[i].email}>{this.state.membersFiltered[i].email}</a></td>
                        <td>{this.state.membersFiltered[i].phone}</td>
                        <td><a href={this.state.membersFiltered[i].resume_url} target="__blank">{this.state.membersFiltered[i].resume_url}</a></td>
                        <td>{this.state.membersFiltered[i].subscribed.toString()}</td>
                        <td>{this.state.membersFiltered[i].school}</td>
                        <td>{this.state.membersFiltered[i].year}</td>
                        <td>{this.state.membersFiltered[i].degree}</td>
                        <td>{this.state.membersFiltered[i].member_type}</td>
                       </tr>)
        }
        return table
    }

    buildCSV() {
        var table = []
        table.push(['Student ID', 'First Name', 'Last Name', 'Email', 'Phone Number', 'Resume URL', 'Subcribed To Newsletter', 'School', 'Year', 'Degree', 'Member Type'])
        for (let i = 0; i < this.state.membersFiltered.length; i++) {
            var item = []
            item.push(this.state.membersFiltered[i].id)
            item.push(this.state.membersFiltered[i].first_name)
            item.push(this.state.membersFiltered[i].last_name)
            item.push(this.state.membersFiltered[i].email)
            item.push(this.state.membersFiltered[i].phone)
            item.push(this.state.membersFiltered[i].resume_url)
            item.push(this.state.membersFiltered[i].subscribed.toString())
            item.push(this.state.membersFiltered[i].school)
            item.push(this.state.membersFiltered[i].year)
            item.push(this.state.membersFiltered[i].degree)
            item.push(this.state.membersFiltered[i].member_type)
            table.push(item)
        }
        return table
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-6 float-left">
                    <a className="btn btn-primary" href="/add-member">Add New Member</a>  
                </div>  
                <div className="col-md-6 float-right">
                    <form className="form-inline" onSubmit={evt => this.deleteMember(evt)}>
                        <div className="form-group">
                            <input className="form-control" placeholder="Student ID" value={this.state.deleteMemberId} onChange={evt => this.onDeleteMemberIdChange(evt)}></input>
                        </div>
                        <button type="submit" className="btn btn-danger">Delete Member</button>
                    </form>
                </div>  
                <div className="col-md-12 card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <h5>McGill AI Society Members</h5>
                        </div>
                        <div className="float-right">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Search</span>
                                </div>
                                <input value={this.state.searchValue} onChange={evt => this.updateSearchValue(evt)}/>
                                <CSVLink data={this.buildCSV()} filename={"mcgillai-members.csv"}  className="btn btn-success" target="_blank">
                                    Download As CSV
                                </CSVLink>
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