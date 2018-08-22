import React from 'react'
import MemberTable from './components/members/table.jsx'
import AddMember from './components/members/add.jsx'
import UpdateMember from './components/members/update.jsx'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Newsletter from './components/newsletter.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return(
      <Router>
          <div>
            <Navbar></Navbar>
            <div id="wrapper">
              <Sidebar></Sidebar>
              <div id="content-wrapper">
                <Route path="/" exact={true} render={() => { return ( <h1>Home page</h1> ) }}/>
                <Route path="/members" exact={true} component={MemberTable} />
                <Route path="/members/add" exact={true} component={AddMember} />
                <Route path="/members/update/:id" exact={true} component={UpdateMember} />
                <Route path="/newsletter" exact={true} component={Newsletter} />
              </div>
            </div>
          </div>
      </Router>
      )
  }

}

export default App;