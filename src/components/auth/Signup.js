import React, { Component } from "react";
import { connect } from 'react-redux';
import { logInGoogle } from '../../actions/actions';
import { logInStandard, registerUser } from '../../actions/authActions';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import '../../components_sass/Menu.sass';
import '../../components_sass/Signup.sass';
import pileBooks from '../../assets/pile-books.svg';


class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  loginGoogle = ({ profileObj }) => {
    fetch('http://localhost:3001/login/google', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({profileObj})
    })
      .then(res => res.json())
      .then(res => {
        this.props.logInGoogle(res)
      })
      .catch(err => console.error(err))
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state);
    this.props.logInStandard();
  }

  render() {
      return (
        <div className='Signup_signup_wrapper'>
          <div className='Signup_signup_title'>minerva</div>
          <img className='Signup_wrapper_signup_img' alt='Pile of books' src={pileBooks} />
          <div className='Signup_socialmedia_signup_buttons'>
            <div className='Signup_signup_wrapper_googlebutton' onClick={this.props.logInStandard}>
              <GoogleLogin
                className ='Signup_signup_googlebutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Google"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
            <div className='Signup_signup_wrapper_facebookbutton' onClick={this.props.logInStandard}>
              <GoogleLogin
                className ='Signup_signup_facebookbutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Facebook"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
          </div>
          <div className='Signup_signup_text'>
            or
          </div>
          <form className='Signup_signup_form' action="" onSubmit={this.onSubmit}>
            <div className='Signup_signup_inputs'>
              <div>
                <input className='Signup_signup_input' type="text" placeholder="Full Name" onChange={event => this.setState({ username: event.target.value })}/>
                <input className='Signup_signup_input' type="text" placeholder="Email Address" onChange={event => this.setState({ email: event.target.value })}/>
                <input className='Signup_signup_input' type="text" placeholder="Password" onChange={event => this.setState({ password: event.target.value })}/>
              </div>
            </div>
            <button className='Signup_signup_button' type="submit">
              <strong>Sign Up</strong>
            </button>
          </form>
          <div className='Signup_to_login'>
            <div>
              <div className='Signup_signup_text'>
                Already have an account?
              </div>
            </div>
            <div>
              <Link to="/login" >
                <div className='Signup_signup_text Signup_to_login_button'>
                  <u>Log In!</u>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  logInStandard: () => dispatch(logInStandard()),
  logInGoogle: (user) => dispatch(logInGoogle(user)),
  registerUser: (payload) => dispatch(registerUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
