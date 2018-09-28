import React, { Component } from "react";
import { connect } from 'react-redux';
import { logIn } from '../redux/actions';
import GoogleLogin from 'react-google-login';

import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';

import openBook from '../assets/open-book.svg';
import pileBooks from '../assets/pile-books.svg';

class Home extends Component {
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
        this.props.logIn(res)
      })
      .catch(err => console.error(err))
  }

  render() {
    if (!this.props.user.id) {
      return (
        <div className='Home_signup_wrapper'>
          <div className='Home_signup_title'>minerva</div>
          <div className='Home_signup_text'>
            Find, get and share books with your friends and millions of readers.
          </div>
          <img className='Home_wrapper_signup_img' alt='Pile of books' src={pileBooks} />

            {/* <div className='Home_signup_minervadb'>
              <input className='Home_signup_username' type="text" />
              <input className='Home_signup_password' type="text" />
              <button>Login</button>
            </div> */}

            <div className='Home_signup_wrapper_googlebutton'>
              <GoogleLogin
                className ='Home_signup_googlebutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Google"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
        </div>
      )
    } else {
      return (
        <div className='Home_wrapper'>
          <div className='Home_wrapper_title'>Welcome!</div>
          <div className='Home_wrapper_text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          </div>
          <img className='Home_wrapper_img' alt='OpenBook' src={openBook} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user))
})

export default connect (mapStateToProps, mapDispatchToProps)(Home);