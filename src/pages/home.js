import React, { Component } from 'react';

class Home extends Component {
	cursor = document.querySelector('.cursor');
	follower = document.querySelector('.follow');
	render() {
		return (
			<h1 style={{ fontFamily: 'Dokdo' }} id="greet">
				<div>Hello, </div>
				<div>
					{"I'm "}
					<span
						className="with--accent"
						onMouseOver={() => {
							this.cursor.style.backgroundColor = '#fff';
							this.follower.style.display = 'none';
						}}
						onMouseLeave={() => {
							this.cursor.style.backgroundColor = '#333';
							this.follower.style.display = 'block';
						}}
					>
						Shakil Ahmed
					</span>.
				</div>
				<div>Happy to see</div>
				<div>
					<span
						className="with--accent"
						onMouseOver={() => {
							this.cursor.style.backgroundColor = '#fff';
							this.follower.style.display = 'none';
						}}
						onMouseLeave={() => {
							this.cursor.style.backgroundColor = '#333';
							this.follower.style.display = 'block';
						}}
					>
						you
					</span>
					{' here :)'}
				</div>
			</h1>
		);
	}
}

export default Home;
