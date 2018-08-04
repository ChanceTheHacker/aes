import React from 'react';
// eslint-disable-next-line
import tachyons from 'tachyons';
import './navbar.css';

const style = {
	height: '64px',
	width: '64px',
}

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
	    document.querySelector('.header-items').classList.toggle('expand');
	    document.querySelector('.collapse').classList.toggle('hidden');
	    document.querySelector('.hideDiv').classList.toggle('hidden');
	    document.querySelector('.showDiv').classList.toggle('hidden');  
  	}


	// clickOpen = () => {
	// 	if (displayHamburger === 'show') {
	// 		this.setstate({displayHamburger: 'hide'});
	// 	} else {
	// 		this.setstate({displayHamburger: 'show'});
	// 	}

	// }

	// // burger click
	// $('.burger').click(function () {
	//   $(this).toggleClass('open'); expand
	// });

	render() {
		return (
			<header className="header-items bg-white black tc pv4 ">
			  <a href="" >
			  	<img style={style} className="dib pa0 br-pill" src="https://image.ibb.co/mXrpmK/Logo.jpg" alt="Logo"/>
			  </a>
			  <h1 className="mt2 mb0 baskerville i fw1 f1">Alliance Environmental Systems</h1>
			  <nav className="bt bb mw8 mt4 pb0 center flex-container">
				<a className="f6 f5-l link bg-animate black hover-bg-lightest-blue dib pa3 ph4-l tl" href="/">Home</a>
				<div className="dib showDiv">
					<a className="f6 f5-l link bg-animate black hover-bg-light-blue dib pa3 ph4-l" href="/aboutus">About Us</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-purple dib pa3 ph4-l " href="/services">Services</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-pink dib pa3 ph4-l" href="/community">Community</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-red dib pa3 ph4-l" href="/contact">Contact</a>
					<div className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l hide-child pointer" href="/projects">Projects
					   	<div className="child absolute medium-drop">
							<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb bl mt3 ph4-l" href="/project1">Project 1</a>
							<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project2">Project 2</a>
							<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project3">Project 3</a>
							<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project4">Project 4</a>
						</div>
					</div>
				</div>
				<div className="hideDiv dib w-80"></div>
				<div className="menu-icon w-10 dib tr link bg-animate black hover-bg-lightest-blue pa0 mt0 order-7" onClick={this.toggleMenu}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
                <div className="dib collapse hidden w-80 order-1">
                  <div>
                    <a className="f6 f5-l link bg-animate black hover-bg-light-blue dib pa3 ph4-l order-2" href="/aboutus">About Us</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-purple dib pa3 ph4-l order-3" href="/services">Services</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-pink dib pa3 ph4-l order-4" href="/community">Community</a>
					<a className="f6 f5-l link bg-animate black hover-bg-light-red dib pa3 ph4-l order-5" href="/contact">Contact</a>
					<div className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l hide-child pointer order-6" href="/projects">Projects
			    	<div className="child absolute medium-drop">
						<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb bl mt3 ph4-l" href="/project1">Project 1</a>
						<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project2">Project 2</a>
						<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project3">Project 3</a>
						<a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project4">Project 4</a>
					</div>
				</div>
                  </div>
                </div>

			  </nav>
			</header>
		);
	}
}

export default Navbar;