/**
 **  All the imports are here.
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	Switch,
	BrowserRouter as Router
} from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import {
	Provider
} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <
	Provider store = {
		store
	} >
	<
	Router >

	<
	Switch >
	<
	Route exact path = "/"
	component = {
		App
	}
	/> <
	Route path = "/login"
	component = {
		Login
	}
	/> <
	PrivateRoute exact path = "/dashboard"
	component = {
		Dashboard
	}
	/> <
	Route component = {
		PageNotFound
	}
	/> <
	/Switch>


	<
	/Router>

	<
	/Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();