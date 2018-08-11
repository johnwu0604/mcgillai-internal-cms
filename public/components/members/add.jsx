import React from 'react'

class AddMember extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-fluid">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Student Number</label>
                            <input className="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>First Name</label>
                            <input className="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input className="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input className="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Phone Number</label>
                            <input className="form-control"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Resume URL</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>School</label>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" checked></input>
                                    <label className="form-check-label">
                                        McGill 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Concordia
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Polytechnique
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
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
                                    <input className="form-check-input" type="radio" checked></input>
                                    <label className="form-check-label">
                                        U0 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        U1
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        U2
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
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
                                    <input className="form-check-input" type="radio" checked></input>
                                    <label className="form-check-label">
                                        Undergraduate 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Masters
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
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
                                    <input className="form-check-input" type="radio" checked></input>
                                    <label className="form-check-label">
                                        Subscriber 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Active Member
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Contributer
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio"></input>
                                    <label className="form-check-label">
                                        Executive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Member</button>
                </form>
            </div>
        )
    }

}

export default AddMember