import React from 'react';
import {NavLink} from 'react-router-dom';

const NavStart = () => {
	return (
		<nav>
				<div className="nav-wrapper grey darken-1">
						<NavLink className="brand-logo" to={'/'}>Newborn</NavLink>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li><NavLink to={'/login'}>Вход</NavLink></li>
								<li><NavLink to={'/registration'}>Регистрация</NavLink></li>
						</ul>
				</div>
		</nav>
	)
}

export default NavStart;