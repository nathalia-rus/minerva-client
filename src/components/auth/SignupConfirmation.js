import React, { Component } from "react";
import { connect } from 'react-redux';
import { dismissSignupConfirmation } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import '../../components_sass/Menu.sass';
import '../../components_sass/Signup.sass';
import pileBooks from '../../assets/pile-books.svg';


class SignupConfirmation extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.dismissSignupConfirmation();
  }

  render() {
      return (
        <div className='Signup_signup_wrapper'>
          <div className='Signup_signup_title'>Signup Successful!</div>
          <img className='Signup_wrapper_signup_img' alt='Pile of books' src={pileBooks} />
          <form className='Signup_signup_form' action="" onSubmit={this.onSubmit}>
            <Link to="/login" >
              <button className='Signup_signup_button' type="submit">
                <strong>Log In Now!</strong>
              </button>
            </Link>
          </form>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  dismissSignupConfirmation: (user) => dispatch(dismissSignupConfirmation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupConfirmation);
