import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logOutStandard } from '../actions/authActions';
import '../components_sass/MenuProfile.sass';
import home from '../assets/startup.svg';
import scan from '../assets/qr-code.svg';
import books from '../assets/menu-book.svg';
import logout from '../assets/logout.svg';
import ratings from '../assets/ratings.svg'

import MenuProfile from "./MenuProfile";

class Menu extends Component {
  render() {
    let visibility = 'hide';

    if(this.props.menuVisibility) {
      visibility = 'show';
    }

    return(
      <div id='flyoutMenu'
          onMouseDown={this.props.handleMouseDown}
          className={visibility}>

        <div className='flyoutMenu_MenuProfileWrapper'>
          <MenuProfile />
        </div>

        <div className='flyoutMenu_divWrapper'>
          <li className='flyoutMenu_li'>
            <Link to='/home'>
              <img className='flyoutMenu_li_img' alt='Home' src={home} />
              <div className='flyoutMenu_li_name'>Home</div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/scannerdashboard'>
              <img className='flyoutMenu_li_img' alt='Scan' src={scan} />
              <div className='flyoutMenu_li_name'>Scan</div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/library'>
              <img className='flyoutMenu_li_img' alt='Books' src={books} />
              <div className='flyoutMenu_li_name'>Library</div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/rate'>
              <img className ='flyoutMenu_li_img' alt='Books' src={ratings} />
              <div className='flyoutMenu_li_name'> Ratings </div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/login'>
              <img className='flyoutMenu_li_img' alt='Books' src={logout} />
              <div className='flyoutMenu_li_name'>Logout</div>
            </Link>
          </li>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  // logOutStandard: () => dispatch(logOutStandard()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
