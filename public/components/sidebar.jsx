import React from 'react'

class Sidebar extends React.Component {

    render() {
        return(
            <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/members">
                        <span>Members</span>
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/newsletter">
                        <span>Newsletter</span>
                    </a>
                </li>
            </ul>
        )
    }

}

export default Sidebar