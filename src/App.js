import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './animations/PageTransition';
import Menu from './Menu';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import FoF from './pages/fof';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='app'>
					<Menu />
					<div className="corner-ribbon">Under Construction</div>
					<div className='clear'/>
					<Route
						render={({ location }) => {
							const { pathname, key } = location;
							return (
								<TransitionGroup component={null}>
									<Transition
										key={key}
										appear={true}
										onEnter={(node, appears) => play(pathname, node, appears)}
										onExit={(node, appears) => exit(node, appears)}
										timeout={{ enter: 750, exit: 150 }}
									>
										<Switch location={location}>
											<Route exact path='/' component={Home} />
											<Route path='/projects' component={Projects} />
											<Route path='/about' component={About} />
											<Route path='/contact' component={Contact} />
											<Route component={FoF} />
										</Switch>
									</Transition>
								</TransitionGroup>
							);
						}}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
