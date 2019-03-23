import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../css/Dashboard.css';
import {removeCookie} from '../common';




class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.logout=this.logout.bind(this);
     
  }

  logout(){
  	localStorage.removeItem("refreshToken");
  	removeCookie();
  	this.props.history.push("/login");
   
  }

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