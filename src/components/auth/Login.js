import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInGoogle } from '../../actions/actions';
// import { logInStandard } from '../../actions/authActions';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import '../../components_sass/Menu.sass';
import '../../components_sass/Login.sass';
import pileBooks from '../../assets/pile-books.svg';


class Login extends Component {

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

  render() {
      return (
        <div className='Login_login_wrapper'>
          <div className='Login_login_title'>minerva</div>
          <img className='Login_wrapper_login_img' alt='Pile of books' src={pileBooks} />
          <div className='Login_socialmedia_login_buttons'>
            <div className='Login_login_wrapper_googlebutton' onClick={this.props.logInStandard}>
              <GoogleLogin
                className ='Login_login_googlebutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Google"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
            <div className='Login_login_wrapper_facebookbutton' onClick={this.props.logInStandard}>
              <GoogleLogin
                className ='Login_login_facebookbutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Facebook"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
          </div>
          <div className='Login_login_text'>
            or
          </div>
          <div className='Login_login_form'>
            <div className='Login_login_inputs'>
              <div>
                <input className='Login_login_input' type="text" placeholder="Email Address"/>
                <input className='Login_login_input' type="text" placeholder="Password"/>
              </div>
            </div>
              <button className='Login_login_button'>
                    <strong>Log In</strong>
              </button>
          </div>
          <div className='Login_to_login'>
            <div>
              <div className='Login_login_text'>
                Don't have an account?
              </div>
            </div>
            <div>
              <Link to="/signup" >
                <div className='Login_login_text Login_to_login_button'>
                  <u>Sign up!</u>
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
  // logInStandard: () => dispatch(logInStandard()),
  logInGoogle: (user) => dispatch(logInGoogle(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
