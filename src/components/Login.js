/**
 **  All the imports are here.
 **/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/LoginActions';
import {withRouter} from 'react-router-dom';
import '../scss/Login.scss';

/**
 **  clas definition for Login component
 **/
class Login extends Component {
  /**
  **  Constructor calling on page load.
  **/
  constructor(props) {
    super(props);
    /**
    **  State definition.
    **/
    this.state = {
      shouldRedirect : false
    };
    /**
    **  methods binded here.
    **/
    this.onSubmit = this.onSubmit.bind(this);
  }


/**
  **  React life cycle method to capture prop change.
  **/
componentWillReceiveProps(nextProps){
  console.log(nextProps);
  if(nextProps.shouldRedirect !== this.props.shouldRedirect){
    console.log(nextProps.shouldRedirect)
    this.props.history.push("/dashboard");
  }

}



 /**
  **  Html is written inside render method.
  **/
  render() {
    let {email, password} = this.state;
    let {isLoginPending, loginError} = this.props;
      
    return (
      <form name="login" onSubmit={this.onSubmit}>
        <div className="form-group-main">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email} required/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password} required/>
          </div>

          <input type="submit" value="Login" />

        </div>

        
        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
        
        
       
      </form>
    )
  }

 /**
  **  method is called on click of submit button.
  **/
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.LoginReducer.isLoginPending,
    isLoginSuccess:  state.LoginReducer.isLoginSuccess,
    loginError: state.LoginReducer.loginError,
    shouldRedirect : state.LoginReducer.shouldRedirect
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));