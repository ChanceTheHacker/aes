import React from 'react';
// eslint-disable-next-line
import tachyons from 'tachyons';
import './navbar.css';
import logo from "./logo2.jpg";

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isNavMenuOpen: false,
		}
	}


	toggleMenu = () => {
	    this.setState(this.state.isNavMenuOpen ? {isNavMenuOpen:false} : {isNavMenuOpen:true});
	    document.querySelector('.menu-icon').classList.toggle('change');
	    document.querySelector('.collapse').classList.toggle('hidden');
  	}
  	render(){
  		const { onRouteChange} = this.props;
		return (
			<header className="">
				<img className= "flex center mt4 mb0 pointer" onClick={() => onRouteChange('home')} src={logo} alt="logo"/>
				<h1 className="w-100 tc mt2 f2 shrinkH1">
					<span>A</span>lliance <span>E</span>nvironmental <span>S</span>ystems
				</h1>
				<nav className="flex center bt bb b--blue f5 mw8 center pa0 ma0 justify-around">

				{/*navbar for large screens over 765 pixels*/}

					<div className="navBig pa2 pr4 pl4 black bg-animate hover-bg-lightest-blue pointer" onClick={() => onRouteChange('home')}>
						Home
					</div>
					<div className="navBig project pointer flex pa2 pr4 pl4 black bg-animate hover-bg-light-green">
						Projects
						<div className="mw7 project-child center goLeft">
							<div className="pa2 pr4 pl4 black bg-animate hover-bg-light-green no-underline pointer" id="p1" onClick={() => onRouteChange('project1')}>
								Project 1
							</div>
							<div className="pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline pointer" id="p2" onClick={() => onRouteChange('project2')}>
								Project 2
							</div>
							<div className="pa2 pr4 pl4 black bg-animate hover-bg-light-purple no-underline pointer" id="p3" onClick={() => onRouteChange('project3')}>
								Project 3
							</div>
							<div className="pa2 pr4 pl4 black bg-animate hover-bg-light-pink no-underline pointer" id="p4" onClick={() => onRouteChange('project4')}>
								Project 4
							</div>
						</div>
					</div>
					<div className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-blue pointer" onClick={() => onRouteChange('about')}>
						About Us
					</div>
					<div className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-purple pointer" onClick={() => onRouteChange('services')}>
						Services
					</div>
					<div className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-pink pointer" onClick={() => onRouteChange('community')}>
						Community
					</div>
					<div className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-red pointer" onClick={() => onRouteChange('contact')}>
						Contact
					</div>

				{/*Navbar for small screens under 765 pixels*/}

					<div className="navSmall pa2 pr4 w-10 black bg-animate hover-bg-lightest-blue pointer" onClick={() => onRouteChange('home')}>
						Home
					</div>
					<div className="navSmall w-40"></div>
					<div className="menu-icon navSmall w-10 tr link bg-animate black hover-bg-lightest-blue pa0 mt0 order-7 pointer" onClick={this.toggleMenu}>
	                  <div className="bar1"></div>
	                  <div className="bar2"></div>
	                  <div className="bar3"></div>
	                </div>
				</nav>
				<nav className="collapse hidden bg-white absolute flex flex-column justify-right">
					<div className="bg-white project pointer flex pa2 pr4 pl4 black bg-animate hover-bg-light-green pointer">
						Projects
						<div className="mw6 project-child center">
							<div className="bg-white pa2 black bg-animate hover-bg-light-green no-underline pointer" id="p1" onClick={() => onRouteChange('project1')}>
								Project 1
							</div>
							<div className="bg-white pa2 black bg-animate hover-bg-light-blue no-underline pointer" id="p2" onClick={() => onRouteChange('project2')}>
								Project 2
							</div>
							<div className="bg-white pa2 black bg-animate hover-bg-light-purple no-underline pointer" id="p3" onClick={() => onRouteChange('project3')}>
								Project 3
							</div>
							<div className="bg-white pa2 black bg-animate hover-bg-light-pink no-underline pointer" id="p4" onClick={() => onRouteChange('project4')}>
								Project 4
							</div>
						</div>
					</div>
					<div className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-blue pointer" onClick={() => onRouteChange('about')}>
						About Us
					</div>
					<div className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-purple pointer" onClick={() => onRouteChange('services')}>
						Services
					</div>
					<div className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-pink pointer" onClick={() => onRouteChange('community')}>
						Community
					</div>
					<div className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-red pointer" onClick={() => onRouteChange('contact')}>
						Contact
					</div>
				</nav>
			</header>
		);
	}
}

export default Navbar;