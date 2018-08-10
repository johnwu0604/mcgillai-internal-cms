import React from 'react'
import axios from 'axios'

class Table extends React.Component {

    constructor() {
        super()
        this.state = {
            members: {},
            membersFiltered: {},
            searchValue: ''
        }
    }

    componentDidMount() {
        axios.get('/members')
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
                member.id === this.state.searchValue ||
                member.first_name === this.state.searchValue ||
                member.last_name === this.state.searchValue ||
                member.email === this.state.searchValue ||
                member.phone === this.state.searchValue ||
                member.school === this.state.searchValue ||
                member.year === this.state.searchValue ||
                member.degree === this.state.searchValue ||
                member.member_type === this.state.searchValue
            ))
            this.setState({
                membersFiltered: filtered
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
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
                                {createTable(this.state.membersFiltered)}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var createTable = (members) => {
    let table = []
    for (let i = 0; i < members.length; i++) {
        table.push(<tr key={members[i].id}>
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