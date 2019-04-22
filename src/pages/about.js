import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="view">
				<h1 style={{ fontFamily: 'Dokdo' }}>About</h1>
				<div className="content">
					<div className="content--inner">
						<div className="content--image">
							<img src="https://sxakil.github.io/img/about.jpg" alt="sXakil" />
						</div>
						<div>
							<h4>About Myself</h4>
							<p>
								Hi there! I'm Shakil Ahmed from Dhaka, Bangladesh. I am currently a Student of Computer Science and
								Engineering. I have been learning and developing mobile apps and websites for past two years. I have
								experience programming in many different languages such as C, Java, Kotlin, JavaScript, TypeScript{' '}
								<font style={{ textDecoration: 'line-through', opacity: 0.4 }}>PHP</font> and Python, however most of my
								projects involve working in JavaScript for both web and cross-platform mobile application development.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
