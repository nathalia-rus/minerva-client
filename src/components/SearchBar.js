import React, { Component } from "react";
import { connect } from 'react-redux';

import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';
import '../components_sass/SearchBar.sass';

import MenuContainer from './MenuContainer';
import { onSearch } from '../redux/actions';
import history from '../history';

// const https = require('https');
const goodReadsJSONResponse = require('../API/GR_JSON_response');

// GOODREADS API INFO URL : https://www.goodreads.com/api/index#book.title

class SearchBar extends Component {
 
 // API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
  API_key = 'eCuCTJhM3hFcUN5sdlYA6g'
  title = 'narnia'

  state = {
    text: ''
  }

  performSearch = () => {
    if (this.state.text.length) {
  // const API = `${this.BASE_URL}?key=${this.API_key}&title=${this.state.text.replace(' ', '+')}`;
      const API = `https://www.goodreads.com/book/title.xml?key=${this.API_key}&title=${this.state.text.replace(' ', '+')}`; 
      fetch(API).then(res => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk)
        res.on('end', () => {
          const response = goodReadsJSONResponse.convertToJson(rawData);
          console.log(response.title);
          return this.props.saveResults[response.title]
        });
      }).catch(e => {
        console.log(`Got error: ${e.message}`);
      })
    }
  }
  // console.log(response.book.title, response.book.average_rating, response.book.ratings_count);

  //     .then(res => this.props.saveResults(res.items))
  //   } else {
  //     this.props.saveResults([])
  //   }
  // }

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