import React from 'react'

class Sidebar extends React.Component {

    render() {
        return(
            <ul class="sidebar navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="/">
                    <span>Dashboard</span>
                </a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">
                    <span>Members</span></a>
                </li>
            </ul>
        )
    }

}

export default Sidebar