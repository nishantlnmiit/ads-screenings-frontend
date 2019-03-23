/**
 **  All the imports are here.
 **/
import React from 'react';
import {
	Redirect,
	Route
} from 'react-router-dom';
import {
	getCookie
} from '../common';


/**
 **  handling for private route.
 **/
export default function PrivateRoute({
	component: Component,
	...rest
}) {
	
	return ( <
		Route { ...rest
		}
		render = {
			(props) => (getCookie("token")) ?
			< Component { ...props
			}
			/> :
				< Redirect to = {
				{
					pathname: '/login',
					state: {
						from: props.location
					}
				}
			}
			/>} /
			>
		)
	}