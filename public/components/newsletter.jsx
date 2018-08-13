import React from 'react'
import axios from 'axios'
import qs from 'qs'

class Newsletter extends React.Component {

    constructor() {
        super()
        this.state = {
            subscribers: true,
            active_members: true,
            contributers: true,
            executives: true,
            sender_name: '',
            sender_email: '',
            subject: '',
            template: '',
            message: ''
        }
    }

    handleSubmit(evt) {
        evt.preventDefault()
        var emails = ''
        axios.get('/api/members')
          .then(res => {
            var members = res.data
            for (let i = 0; i < members.length; i++) {
                if ( (members[i].member_type == 'Subscriber' && this.state.subscribers) ||
                     (members[i].member_type == 'Active Member' && this.state.active_members) ||
                     (members[i].member_type == 'Contributer' && this.state.contributers) ||
                     (members[i].member_type == 'Executive' && this.state.executives ) ) {
                        emails = emails + members[i].email + ', '
                }
            }
            this.sendNewsletter(this, emails)
        })
    }

    sendNewsletter(self, emails) {
        var formData = qs.stringify({
            'sender_name': this.state.sender_name,
            'sender_email': this.state.sender_email,
            'emails': emails,
            'subject': this.state.subject,
            'template': this.state.template
        })
        axios({
            method: 'post',
            url: '/api/newsletter',
            data: formData,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
            })
            .then(function (response) {
                self.setState({
                    subscribers: true,
                    active_members: true,
                    contributers: true,
                    executives: true,
                    sender_name: '',
                    sender_email: '',
                    subject: '',
                    template: '',
                    message: 'Newsletter succesfully sent!'
                })
            })
            .catch(function (response) {
                self.setState({
                    message: 'Error occurred :('
                })
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <h2>McGill AI Society Newsletter</h2>
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Recipients</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={this.state.subscribers}
                                    onChange={evt => this.setState({ subscribers: !this.state.subscribers })}></input>
                                <label className="form-check-label">
                                    Subscribers
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={this.state.active_members}
                                    onChange={evt => this.setState({ active_members: !this.state.active_members })}></input>
                                <label className="form-check-label">
                                    Active Members
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={this.state.contributers}
                                    onChange={evt => this.setState({ contributers: !this.state.contributers })}></input>
                                <label className="form-check-label">
                                    Contributers
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={this.state.executives}
                                    onChange={evt => this.setState({ executives: !this.state.executives })}></input>
                                <label className="form-check-label">
                                    Executives
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Sender Name</label>
                            <input className="form-control" value={this.state.sender_name} 
                                onChange={evt => this.setState({ sender_name: evt.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Sender Email</label>
                            <input className="form-control" value={this.state.sender_email} 
                                onChange={evt => this.setState({ sender_email: evt.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Subject</label>
                            <input className="form-control" value={this.state.subject} 
                                onChange={evt => this.setState({ subject: evt.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email Template</label>
                            <input className="form-control" type="file" onChange={evt => this.setState({ template: evt.target.files[0] })}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Newsletter</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Newsletter