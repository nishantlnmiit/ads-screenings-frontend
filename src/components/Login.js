import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/LoginActions';
import {withRouter} from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect : false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


 
componentWillReceiveProps(nextProps){
  console.log(nextProps);
  if(nextProps.shouldRedirect !== this.props.shouldRedirect){
    console.log(nextProps.shouldRedirect)
    this.props.history.push("/dashboard");
  }

}

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
      
    return (
      <form name="login" onSubmit={this.onSubmit}>
        <div className="form-group-main">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>

          <input type="submit" value="Login" />

        </div>

        
        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
        
        
       
      </form>
    )
  }

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