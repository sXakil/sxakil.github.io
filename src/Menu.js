import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power1 } from 'gsap';
import './menu.css';
const routes = [
	{
		to    : '/',
		label : 'Home',
	},
	{
		to    : '/projects',
		label : 'Projects',
	},
	{
		to    : '/about',
		label : 'About',
	},
	{
		to    : '/contact',
		label : 'Contact',
	},
];

class Menu extends Component {
	state = {
		isVisible : false,
	};
	
	handleMouseDown() {
		this.setState({ isVisible: !this.state.isVisible });
		if (this.state.isVisible) {
			TweenMax.to(this.refs.myElement, 0.5, {
				x : '-100vw',
			});
		} else {
			TweenMax.to(this.refs.myElement, 0.5, {
				x    : '0vw',
				ease : Power1.easeInOut,
			});
			TweenMax.staggerFrom(this.refs.myElement.childNodes, 0.5, { xPercent: -100 }, 0.1);
			TweenMax.staggerTo(this.refs.myElement.childNodes, 1, { x: 0 }, 0.5);
		}
	}

	follow = document.querySelector('.follow');
	cursor = document.querySelector('.cursor');

	render() {
		let v = this.state.isVisible ? 'show' : 'hide';
		return (
			<div
				onMouseEnter={() => {
					this.follow.style.borderColor = 'white';
					this.cursor.style.backgroundColor = 'white';
				}}
				onMouseLeave={() => {
					this.follow.style.borderColor = '#333';
					this.cursor.style.backgroundColor = '#333';
				}}
			>
				<div
					onMouseEnter={() => (this.follow.style.display = 'none')}
					onMouseLeave={() => (this.follow.style.display = 'block')}
					id='hambmenu'
					className={v}
					onClick={() => this.handleMouseDown()}
				>
					<span />
					<span />
					<span />
					<span />
				</div>

				<div ref={'myElement'} id='flyoutMenu' onClick={() => this.handleMouseDown()}>
					{routes.map((route) => {
						return (
							<div key={route.label} className="list_link">
								<NavLink
									onMouseEnter={() => (this.follow.style.display = 'none')}
									onMouseLeave={() => (this.follow.style.display = 'block')}
									to={route.to}
									style={{ textDecoration: 'none' }}
									className="list_link_text"
									activeClassName={'active'}
									exact
								> <div className="hh">
										<h2>{route.label}</h2>
										</div>
								</NavLink>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Menu;
