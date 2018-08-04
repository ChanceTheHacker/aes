import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
// import Page from './components/page/page';
import Home from './components/page/home/home';
import Project1 from './components/page/projects/project1';
import Project2 from './components/page/projects/project2';
import Project3 from './components/page/projects/project3';
import Project4 from './components/page/projects/project4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="helvetica"/>
        <Home/>
      </div>
    );
  }
}

export default App;
