import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
// import Page from './components/page/page';
import Home from './components/page/home/home';
import Project1 from './components/page/projects/project1';
import Project2 from './components/page/projects/project2';
import Project3 from './components/page/projects/project3';
import Project4 from './components/page/projects/project4';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home',
			page: <Home/>
		}
	}

	onRouteChange = (route) => {
		if (route === 'home'){
	    	this.setState({page: <Home/>})
		}
		else if (route === 'project1'){
	    	this.setState({page: <Project1/>})
	    } 
	    else if (route === 'project2'){
	    	this.setState({page: <Project2/>})
	    } 
		else if (route === 'project3'){
	    	this.setState({page: <Project3/>})
		} 
		else if (route === 'project4'){
	    	this.setState({page: <Project4/>})
		}
	}


  render() {
  	const { state, onRouteChange } = this;
  	const { page } = state;

    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {page}
      </div>
    );
  }
}

export default App;
