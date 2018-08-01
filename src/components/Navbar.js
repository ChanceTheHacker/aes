import React from 'react';
import tachyons from 'tachyons';

const style = {
	height: '64px',
	width: '64px',
}

const Navbar = () => {
	return (
		<header className="bg-lightest-blue black tc pv4 avenir">
		  <a href="" >
		  	<img style={style} className="dib pa0 br-pill" src="https://image.ibb.co/mXrpmK/Logo.jpg" alt="Logo"/>
		  </a>
		  <h1 className="mt2 mb0 baskerville i fw1 f1">Alliance Environmental Systems</h1>
		  <nav className="bt bb tc mw7 center mt4">
		    <a className="f6 f5-l link bg-animate black hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l" href="/aboutus">About Us</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-blue dib pa3 ph4-l" href="/services">Services</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-purple dib pa3 ph4-l" href="/projects">Projects</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-pink dib pa3 ph4-l" href="/community">Community</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-red dib pa3 ph4-l" href="/contact">Contact</a>
		  </nav>
		</header>
	);
}

export default Navbar;