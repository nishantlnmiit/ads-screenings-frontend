/**
 **  All the imports are here.
 **/
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../scss/Dashboard.scss';
import {removeCookie} from '../common';



/**
 **  clas definition for Dashboard component
 **/
class Dashboard extends Component {

  /**
  **  Constructor calling on page load.
  **/		
  constructor(props) {
    super(props);
    /**
  	**  State definition.
  	**/
    this.state = {};
    /**
  	**  methods binded here.
  	**/
    this.logout=this.logout.bind(this);
     
  }

  /**
  **  function is called on logout button click and redirect to login page of application.
  **/
  logout(){
  	localStorage.removeItem("refreshToken");
  	removeCookie();
  	this.props.history.push("/login");
   
  }

  /**
  **  Html is written inside render method.
  **/
  render(){
  	return (
  			<div className="flexMain">
  				<div  className="flexButton">
  				<button className="logout" onClick={this.logout}>Logout</button>	 
  				</div>	
  				<div className="flexContent">Dashboard
  				</div>
  			</div>
  		)
  }

}

export default withRouter(Dashboard);  