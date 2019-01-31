import React, { Component } from 'react';
import AddCategory from './containers/AddCategory/AddCategory';
import Analytics from './containers/Analytics/Analytics';
import Categories from './containers/Categories/Categories';
import History from './containers/History/History';
import Login from './containers/Login/Login';
import Order from './containers/Order/Order';
import OrderPosition from './containers/OrderPosition/OrderPosition';
import Overview from './containers/Overview/Overview';
import Registration from './containers/Registration/Registration';
import FrontPage from './containers/FrontPage/FrontPage';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/registration" component={Registration}/>
				<Route path="/overview" component={Overview}/>
				<Route path="/analytics" component={Analytics}/>
				<Route path="/history" component={History}/>
				<Route path="/categories" component={Categories}/>
				<Route path="/order" component={Order}/>
				<Route path="/order-position" component={OrderPosition}/>
				<Route path="/add-category" component={AddCategory}/>
				<Redirect from="/" to="/login"/>
			</Switch>
    );
  }
}



export default withRouter(App);

