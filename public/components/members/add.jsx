import React from 'react'
import axios from 'axios'
import qs from 'qs'

class AddMember extends React.Component {

    constructor() {
        super()
        this.state = {
            form_first_name: '',
            form_last_name: '',
            form_email: '',
            form_phone: '',
            form_resume: '',
            form_pronoun: 'He/Him',
            form_school: 'McGill',
            form_year: 'U0',
            form_degree: 'Undergraduate',
            form_type: 'Subscriber',
            message: ''
        }
    }

    onFirstNameChange(evt) {
        this.setState({
            form_first_name: evt.target.value
        })
    }

    onLastNameChange(evt) {
        this.setState({
            form_last_name: evt.target.value
        })
    }

    onEmailChange(evt) {
        this.setState({
            form_email: evt.target.value
        })
    }

    onPhoneChange(evt) {
        this.setState({
            form_phone: evt.target.value
        })
    }

    onResumeChange(evt) {
        this.setState({
            form_resume: evt.target.value
        })
    }

    onPronounChange(evt) {
        this.setState({
            form_pronoun: evt.target.value
        })
    }

    onSchoolChange(evt) {
        this.setState({
            form_school: evt.target.value
        })
    }

    onYearChange(evt) {
        this.setState({
            form_year: evt.target.value
        })
    }

    onDegreeChange(evt) {
        this.setState({
            form_degree: evt.target.value
        })
    }

    onTypeChange(evt) {
        this.setState({
            form_type: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        var self = this
        var formData = qs.stringify({
            'first_name': this.state.form_first_name,
            'last_name': this.state.form_last_name,
            'email': this.state.form_email,
            'phone': this.state.form_phone,
            'resume_url': this.state.form_resume,
            'subscribed': true,
            'pronoun': this.state.form_pronoun,
            'school': this.state.form_school,
            'year': this.state.form_year,
            'degree': this.state.form_degree,
            'member_type': this.state.form_type
        })
        axios({
            method: 'post',
            url: '/api/member',
            data: formData,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
            })
            .then(function (response) {
                window.location.href = '/members'
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
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label>First Name</label>
                            <input className="form-control" value={this.state.form_first_name} onChange={evt => this.onFirstNameChange(evt)}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input className="form-control" value={this.state.form_last_name} onChange={evt => this.onLastNameChange(evt)}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input className="form-control" value={this.state.form_email} onChange={evt => this.onEmailChange(evt)}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Phone Number</label>
                            <input className="form-control" value={this.state.form_phone} onChange={evt => this.onPhoneChange(evt)}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Resume URL</label>
                            <input className="form-control" value={this.state.form_resume} onChange={evt => this.onResumeChange(evt)}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Pronoun</label>
                            <div>
                                <div className="form-check">
                                    <input onChange={evt => this.onPronounChange(evt)} className="form-check-input" name="pronoun" type="radio" value="He/Him" checked={this.state.form_pronoun === "He/Him"}></input>
                                    <label className="form-check-label">
                                        He/Him 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={evt => this.onPronounChange(evt)} className="form-check-input" name="pronoun" value="She/Her" type="radio" checked={this.state.form_pronoun === "She/Her"}></input>
                                    <label className="form-check-label">
                                        She/Her
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onPronounChange(evt)} className="form-check-input" name="pronoun" value="They/Their" type="radio" checked={this.state.form_pronoun === "They/Their"}></input>
                                    <label className="form-check-label">
                                        They/Their
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onPronounChange(evt)} className="form-check-input" name="pronoun" value="Other" type="radio" checked={this.state.form_pronoun === "Other"}></input>
                                    <label className="form-check-label">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>School</label>
                            <div>
                                <div className="form-check">
                                    <input onChange={evt => this.onSchoolChange(evt)} className="form-check-input" name="school" type="radio" value="McGill" checked={this.state.form_school === "McGill"}></input>
                                    <label className="form-check-label">
                                        McGill 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={evt => this.onSchoolChange(evt)} className="form-check-input" name="school" value="Concordia" type="radio" checked={this.state.form_school === "Concordia"}></input>
                                    <label className="form-check-label">
                                        Concordia
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onSchoolChange(evt)} className="form-check-input" name="school" value="Polytechnique" type="radio" checked={this.state.form_school === "Polytechnique"}></input>
                                    <label className="form-check-label">
                                        Polytechnique
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onSchoolChange(evt)} className="form-check-input" name="school" value="Other" type="radio" checked={this.state.form_school === "Other"}></input>
                                    <label className="form-check-label">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Year</label>
                            <div>
                                <div className="form-check">
                                    <input onChange={evt => this.onYearChange(evt)} className="form-check-input" name="year" type="radio" value="U0" checked={this.state.form_year === "U0"}></input>
                                    <label className="form-check-label">
                                        U0 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={evt => this.onYearChange(evt)} className="form-check-input" name="year" type="radio" value="U1" checked={this.state.form_year === "U1"}></input>
                                    <label className="form-check-label">
                                        U1
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onYearChange(evt)} className="form-check-input" name="year" type="radio" value="U2" checked={this.state.form_year === "U2"}></input>
                                    <label className="form-check-label">
                                        U2
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onYearChange(evt)} className="form-check-input" name="year" type="radio" value="U3+" checked={this.state.form_year === "U3+"}></input>
                                    <label className="form-check-label">
                                        U3+
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Degree</label>
                            <div>
                                <div className="form-check">
                                    <input onChange={evt => this.onDegreeChange(evt)} className="form-check-input" name="degree" type="radio" value="Undergraduate" checked={this.state.form_degree === "Undergraduate"}></input>
                                    <label className="form-check-label">
                                        Undergraduate 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={evt => this.onDegreeChange(evt)} className="form-check-input" name="degree" value="Masters" type="radio" checked={this.state.form_degree === "Masters"}></input>
                                    <label className="form-check-label">
                                        Masters
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onDegreeChange(evt)} className="form-check-input" name="degree" value="PhD" type="radio" checked={this.state.form_degree === "PhD"}></input>
                                    <label className="form-check-label">
                                        PhD
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Member Type</label>
                            <div>
                                <div className="form-check">
                                    <input onChange={evt => this.onTypeChange(evt)} className="form-check-input" name="type" type="radio" value="Subscriber" checked={this.state.form_type === "Subscriber"}></input>
                                    <label className="form-check-label">
                                        Subscriber 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={evt => this.onTypeChange(evt)} className="form-check-input" name="type" value="Active Member" type="radio" checked={this.state.form_type === "Active Member"}></input>
                                    <label className="form-check-label">
                                        Active Member
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onTypeChange(evt)} className="form-check-input" name="type" value="Contributer" type="radio" checked={this.state.form_type === "Contributer"}></input>
                                    <label className="form-check-label">
                                        Contributer
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input onChange={evt => this.onTypeChange(evt)} className="form-check-input" name="type" value="Executive" type="radio" checked={this.state.form_type === "Executive"}></input>
                                    <label className="form-check-label">
                                        Executive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Member</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }

}

export default AddMember