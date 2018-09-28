import React, { Component } from "react";
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';
import openBook from '../assets/open-book.svg';

class Home extends Component {

  render() {

      return (
        <div>
          <SearchBar />
          <div className='Home_wrapper'>
           <div className='Home_wrapper_title'>Welcome!</div>
           <div className='Home_wrapper_text'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
           </div>
           <img className='Home_wrapper_img' alt='OpenBook' src={openBook} />
          </div>
        </div>

      )

  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect (mapStateToProps, mapDispatchToProps)(Home);
