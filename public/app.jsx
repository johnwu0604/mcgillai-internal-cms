import React from 'react';
import Table from './components/table.jsx'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper">
              <Table></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;