import React from 'react';


class Page extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	changePage = () => {
		const { route } = this.props;
		if (route === 'home') {
			<Home/>
		} else if (route === 'project1') {
			<Project1/>
		}
	}

	render() {
		return (
			
		);
	}
}

export default Page;