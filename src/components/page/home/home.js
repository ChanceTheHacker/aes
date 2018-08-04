import React from 'react';
import '../page.css';
import excavator from './alliance-ex.jpg'



const Home = () => {
	return ( 
		<main className="w-100 cf helvetica dark-gray bg-white pa3 pa4-m pa5-l mw9 center">
		    <div className="fl w-100 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l">
		      <div className="cover pv5 pv6-m pv7-l
		      	{/* This is an image defined in ../page.css*/} 
		      	img4
		      "></div> 
		    </div>
		    <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 ba b--blue maxh512">
		      <div className="pa4">
		        <h1 className="f4 shrink-font f2-l fw4 mt0 pv4-l bb-l b--blue">
		        	<div>Our <span className="fw9 blue">success</span> is</div>
		        	<div className="tl pl6-l pl4-m pl3">your <span className="fw9 blue">satisfaction</span></div>
		        </h1>
		        <p className="lh-copy mt2 mt3-m f6">
		          <span className="db-l pb4-l measure-wide">
		          	Our Employees. . .
					Experienced, knowledgeable, and committed professionals.
					Keep current on all appropriate federal, state, and local regulations.
					Bring to every project a management team with more than 200 years of combined experience 
					in our industry.
					From supervisory and management personnel to field and office staff, our employees are our 
					most valuable resource. We are committed to their safety, and to strict implementation of 
					health and safety programs and procedures at all our workplaces. 

					We´re proud of our safety record, and we are always looking to improve, with one goal in 
					mind. . . the prevention of jobsite accidents. We retain a 3rd party safety consultant that 
					performs jobsite safety audits and meets regularly with our safety committee.
		        </span>
		        </p>
		      </div>
		    </div>
		    <div className="cf">
		      <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
		          <div className="cover pv5 pv6-m pv7-l 
		          	{/* This is an image defined in ../page.css*/} 
		          	img5
		          "></div>
		      </div>
		    </div>
		</main>
	);
}

export default Home;