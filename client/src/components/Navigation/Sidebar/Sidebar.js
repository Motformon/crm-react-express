import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
	return (
		<ul className="sidenav sidenav-fixed a-sidenav">
			<h4>Newborn</h4>
			<li className="bsold"><NavLink to={'/overview'} className="waves-effect waves-orange">Обзор</NavLink></li>
			<li className="bold"><NavLink to={'/analytics'} className="waves-effect waves-orange">Аналитика</NavLink></li>
			<li className="bold"><NavLink to={'/history'} className="waves-effect waves-orange">История</NavLink></li>
			<li className="bold"><NavLink to={'/order'} className="waves-effect waves-orange">Добавить заказ</NavLink></li>
			<li className="bold "><NavLink to={'/categories'} className="waves-effect waves-orange">Ассортимент</NavLink></li>
			<li className="bold last"><NavLink to={'/'} className="waves-effect waves-orange">Выйти</NavLink></li>
		</ul>
	)
}

export default Sidebar;