import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/SearchBarResultItem.sass';

import { connect } from 'react-redux';
import { onDetectedReducer } from '../redux/actions';
import history from '../history';

import defaultBook from '../assets/default-book.png';

class SearchResultItem extends Component {

  itemFetch = (isbn) => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const apiKey = 'AIzaSyAPODoh7pbgRTLTAWlaQkFBbqbTadJsz1U'
    const isbnNum = this.props.industryIdentifiers[1].identifier
    fetch(BASE_URL + isbnNum + '&key=' + apiKey)
      .then(results => results.json())
      .then(results => {
        if (results.totalItems) {
          this.props.onDetectedReducer(results.items[0])
          history.push('/result')
        }
      })
  }

  render() {
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
