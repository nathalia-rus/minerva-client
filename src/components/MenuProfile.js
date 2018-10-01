import React, { Component } from "react";
import { connect } from 'react-redux';
import { logInGoogle } from '../actions/actions';

import profileBase from '../assets/man.svg';


class MenuProfile extends Component {
  render() {
    if (!this.props.user.id) {
      return (
        <div className='flyoutMenu_profile'>
          <img className='flyoutMenu_profile_img' alt='Profile' src={profileBase} />
          <div className='flyoutMenu_profile_name'>Your Name</div>
        </div>
      )
    } else {
      return(
          <div className='flyoutMenu_profile'>
            <img className='flyoutMenu_profile_img' alt='Profile' src={this.props.user.photo} />
            <div className='flyoutMenu_profile_name'>{this.props.user.userName}</div>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logInGoogle(user))
})

export default connect (mapStateToProps, mapDispatchToProps)(MenuProfile);
