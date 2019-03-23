import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {getCookie} from '../common';


 
export default function PrivateRoute ({component: Component, ...rest}) {
console.log("You");
  return (
    <Route
      {...rest}
      render={(props) => (getCookie("token"))
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

 
