import React from 'react';
// eslint-disable-next-line
import tachyons from 'tachyons';
import './navbar.css';
import logo from "./logo2.jpg";

class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			isMenuOpen: false,
		}
	}

	toggleMenu = () => {
	    this.setState(this.state.isMenuOpen ? {isMenuOpen:false} : {isMenuOpen:true});
	    document.querySelector('.menu-icon').classList.toggle('change');
	    document.querySelector('.collapse').classList.toggle('hidden');
  	}
  	render(){
		return (
			<header className="">
				<img className= "flex center mt4 mb0" src={logo} alt="logo"/>
				<h1 className="w-100 tc mt2 f2">
					<span>A</span>lliance <span>E</span>nvironmental <span>S</span>ystems
				</h1>
				<nav className="flex center bt bb b--blue f5 mw8 center pa0 ma0 justify-around">

				{/*navbar for large screens over 765 pixels*/}

					<a className="navBig pa2 pr4 pl4 black bg-animate hover-bg-lightest-blue" href="/">
						Home
					</a>
					<div className="navBig project pointer flex pa2 pr4 pl4 black bg-animate hover-bg-light-blue" href="/projects">
						Projects
						<div className="mw7 project-child center goLeft">
							<a className="pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p1" href="/project1">
								Project 1
							</a>
							<a className="pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p2" href="/project1">
								Project 2
							</a>
							<a className="pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p3" href="/project1">
								Project 3
							</a>
							<a className="pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p4" href="/project1">
								Project 4
							</a>
						</div>
					</div>
					<a className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-green" href="/about">
						About Us
					</a>
					<a className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-purple" href="/services">
						Services
					</a>
					<a className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-pink" href="/community">
						Community
					</a>
					<a className="navBig pa2 pr4 pl4 black bg-animate hover-bg-light-red" href="/contact">
						Contact
					</a>

				{/*Navbar for small screens under 765 pixels*/}
				
					<a className="navSmall pa2 pr4 w-10 black bg-animate hover-bg-lightest-blue" href="/">
						Home
					</a>
					<div className="navSmall w-40"></div>
					<div className="menu-icon navSmall w-10 tr link bg-animate black hover-bg-lightest-blue pa0 mt0 order-7" onClick={this.toggleMenu}>
	                  <div className="bar1"></div>
	                  <div className="bar2"></div>
	                  <div className="bar3"></div>
	                </div>
				</nav>
				<nav className="collapse hidden bg-white absolute flex flex-column justify-right">
					<div className="bg-white project pointer flex pa2 pr4 pl4 black bg-animate hover-bg-light-blue" href="/projects">
						Projects
						<div className="mw6 project-child center goLeft">
							<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p1" href="/project1">
								Project 1
							</a>
							<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p2" href="/project1">
								Project 2
							</a>
							<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p3" href="/project1">
								Project 3
							</a>
							<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-blue no-underline" id="p4" href="/project1">
								Project 4
							</a>
						</div>
					</div>
					<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-green" href="/about">
						About Us
					</a>
					<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-purple" href="/services">
						Services
					</a>
					<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-pink" href="/community">
						Community
					</a>
					<a className="bg-white pa2 pr4 pl4 black bg-animate hover-bg-light-red" href="/contact">
						Contact
					</a>
				</nav>
			</header>
		);
	}
}

export default Navbar;