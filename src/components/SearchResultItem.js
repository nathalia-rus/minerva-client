import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/SearchBarResultItem.sass';

import { connect } from 'react-redux';
import { onDetectedReducer } from '../redux/actions';
import history from '../history';

import defaultBook from '../assets/default-book.png';

const https = require('https');
const goodReadsJSONResponse = require('../API/GR_JSON_response');


class SearchResultItem extends Component {

  API_key = 'eCuCTJhM3hFcUN5sdlYA6g'

  // Fetching single book from Search Bar

  itemFetch = (isbn) => {
    if (this.state.text.length) {
      const API = `https://www.goodreads.com/book/isbn/${isbn}?key=${this.API_key}`;
      https.get(API, (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk)
        res.on('end', () => {
          const response = goodReadsJSONResponse.convertToJson(rawData);
          // console.log(response.book.title, response.book.average_rating, response.book.ratings_count);
          console.log(response.title);
          this.props.onDetectedReducer(response.title);
           history.push('/result')
        });
      }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
      })
    }
  }


  // itemFetch = (isbn) => {
  //   const BASE_URL = 'https://www.goodreads.com/book/title.FORMAT'
  //  // const BASE_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
  //   const apiKey = 'eCuCTJhM3hFcUN5sdlYA6g'
  //   const isbnNum = this.props.industryIdentifiers[1].identifier
  //   fetch(BASE_URL + isbnNum + '&key=' + apiKey)
  //     .then(results => results.json())
  //     .then(results => {
  //       if(results.totalItems) {
  //         this.props.onDetectedReducer(results.items[0])
  //         history.push('/result')
  //       }
  //     })
  // }

  render() {
    // console.log(this.props)
    return (
      <div className='SearchResult_wrapper' onClick={this.itemFetch}>
        <div className='SearchResult_img_wrapper'>
          <img className='SearchResult_img' alt='Book cover'
              src={this.props.imageLinks ? this.props.imageLinks.thumbnail : defaultBook} />
        </div>

        <div className='SearchResult_info_wrapper'>
          <div className='SearchResult_title'>{this.props.title}</div>
          <div className='SearchResult_subtitle'>{this.props.subtitle}</div>
          <div className='SearchResult_author'> by {this.props.authors}</div>

          <div className='SearchResult_rating'>
            <StarRatings
              rating={this.props.averageRating}
              starRatedColor="#F8E473"
              changeRating={this.changeRating}
              numberOfStars={5}
              starDimension={'20'}
              starSpacing={'2'}
              name='rating'
            />
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => ({
  results: state.results
})

const mapDispatchToProps = (dispatch) => ({
  onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
})

export default connect (mapStateToProps, mapDispatchToProps)(SearchResultItem);

// export default SearchResultItem;