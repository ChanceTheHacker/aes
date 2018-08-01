import React from 'react';
import tachyons from 'tachyons';

const style = {
	height: '64px',
	width: '64px',
}

const Navbar = () => {
	return (
		<header className="bg-white black tc pv4 avenir">
		  <a href="" >
		  	<img style={style} className="dib pa0 br-pill" src="https://image.ibb.co/mXrpmK/Logo.jpg" alt="Logo"/>
		  </a>
		  <h1 className="mt2 mb0 baskerville i fw1 f1">Alliance Environmental Systems</h1>
		  <nav className="bt bb tc mw7 center mt4">
		    <a className="f6 f5-l link bg-animate black hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l hide-child" href="/projects">Projects
    		  <div class="child absolute">
			    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb bl mt3 ph4-l" href="/project1">Project 1</a>
			    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project2">Project 2</a>
			    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project3">Project 3</a>
			    <a className="f6 f5-l link bg-animate black hover-bg-light-green dib pa3 br bb ph4-l" href="/project4">Project 4</a>
			  </div>
		    </a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-blue dib pa3 ph4-l" href="/aboutus">About Us</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-purple dib pa3 ph4-l" href="/services">Services</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-pink dib pa3 ph4-l" href="/community">Community</a>
		    <a className="f6 f5-l link bg-animate black hover-bg-light-red dib pa3 ph4-l" href="/contact">Contact</a>
		  </nav>
		</header>
	);
}

export default Navbar;