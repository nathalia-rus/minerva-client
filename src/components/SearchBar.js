import React, { Component } from "react";
import { connect } from 'react-redux';

import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';
import '../components_sass/SearchBar.sass';

import MenuContainer from './MenuContainer';
import { onSearch } from '../redux/actions';
import history from '../history';


class SearchBar extends Component {
  API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
  API_KEY = 'AIzaSyAPODoh7pbgRTLTAWlaQkFBbqbTadJsz1U'

  state = {
    text: ''
  }

  performSearch = () => {
    if (this.state.text.length) {
      fetch(`${this.API_URL}${this.state.text.replace(' ', '+')}&maxResults=40&key=${this.API_KEY}`)
        .then(res => res.json())
        .then(res => this.props.saveResults(res.items))
    } else {
      this.props.saveResults([])
    }
  }

  debounce = (callback, str) => {
    this.setState({text: str})
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(callback, 300)
  }


  render() {

    return(
      <div className="App_header_searchbar">
        <div className='App_header_MenuContainer'><MenuContainer /></div>
        <input
          value={this.state.text}
          onChange={(e) => this.debounce(this.performSearch, e.target.value)}
          onFocus={() => history.location.pathname !== '/searchbarres' && history.push('/searchbarres')}
          onBlur={() => !this.state.text.length && history.goBack()}
          type='text'
          className='App_header_SearchBar'
          placeholder='Search your next lecture!' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveResults: (list) => dispatch(onSearch(list))
})

export default connect(null, mapDispatchToProps)(SearchBar);