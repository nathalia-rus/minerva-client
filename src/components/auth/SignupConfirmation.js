import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../components_sass/Menu.sass';
import '../../components_sass/Signup.sass';


export default class SignupConfirmation extends Component {

  render() {
      return (
        <div className='Signup_signup_wrapper'>
          <div className='Signup_signup_title'>Signup Confirmed!</div>
          <div>
            <Link to="/login" >
              <div className='Signup_signup_text Signup_to_login_button'>
                <u>Log In!</u>
              </div>
            </Link>
          </div>
        </div>
      )
  }
}
