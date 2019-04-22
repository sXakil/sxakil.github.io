import React, { Component } from 'react';
import github from '../svg/github.svg';
import facebook from '../svg/facebook.svg';
import at from '../svg/at.svg';
class Contact extends Component {
  follower = document.querySelector('.follow')
	cursor = document.querySelector('.cursor')
	render() {
		return (
			<div className="view">
				<h1 style={{ fontFamily: 'Dokdo' }}>Contact</h1>
				<div className="content">
					<div className="content--inner">
            <p
              className="soc--link"
              onMouseOver={() => {
							this.cursor.style.backgroundColor = '#ff5252';
							this.follower.style.display = 'none';
						}}
						onMouseLeave={() => {
							this.cursor.style.backgroundColor = '#333';
							this.follower.style.display = 'block';
						}}
            >
							<img src={github} alt="github" style={{ float: 'left' }} />{' '}
							<a href="http://github.com/sXakil">
								GitHub
							</a>
						</p>
						<p
              className="soc--link"
              onMouseOver={() => {
							this.cursor.style.backgroundColor = '#ff5252';
							this.follower.style.display = 'none';
						}}
						onMouseLeave={() => {
							this.cursor.style.backgroundColor = '#333';
							this.follower.style.display = 'block';
						}}
            >
							<img src={facebook} alt="facebook" style={{ float: 'left' }} />{' '}
							<a href="http://fb.me/sXakil">
								Facebook
							</a>
						</p>
						<p
              className="soc--link"
              onMouseOver={() => {
							this.cursor.style.backgroundColor = '#ff5252';
							this.follower.style.display = 'none';
						}}
						onMouseLeave={() => {
							this.cursor.style.backgroundColor = '#333';
							this.follower.style.display = 'block';
						}}
            >
							<img src={at} alt="at" style={{ float: 'left' }} />{' '}
							<a href="mailto:pau.shakil@gmail.com">
								Mail
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
