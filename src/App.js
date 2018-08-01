import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App bg-light-blue">
        <Navbar className='bg-light-blue'/>
        <Page/>
      </div>
    );
  }
}

export default App;
