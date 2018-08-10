import React from 'react';
import Table from './components/table.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Members</h1>
        <Table></Table>
      </div>
    );
  }
}

export default App;