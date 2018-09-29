import React, { Component } from 'react';
import '../components_sass/ScannerDashboard.sass';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Scanner from './Scanner';
import history from '../history';
import { onDetectedReducer } from '../redux/actions';

const https = require('https');
const goodReadsJSONResponse = require('../API/GR_JSON_response');

class ScannerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
  }

  // Receives isbn and sends to API.
  // Scanner — we are sending it in the props.

  // GOODREADS API INFO URL : https://www.goodreads.com/api/index#book.show_by_isbn


  executeFetch = (isbn) => {
    console.log("IT'S GONNA FETCH");
    const BASE_URL = 'https://www.goodreads.com/book/isbn/ISBN?' 
    const apiKey = 'eCuCTJhM3hFcUN5sdlYA6g'
    const API = BASE_URL + isbn + '&key=' + apiKey;
    fetch(BASE_URL + isbn + '&key=' + apiKey)
//     https.get(API, (res) => {
//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => rawData += chunk);
//     res.on('end', () => {
//       const response = goodReadsJSONResponse.convertToJson(rawData);
//       console.log(response, response.book.title, response.book.average_rating, response.book.ratings_count);
//       return response;
//     });
//   }
// }
  
      .then(results => {
        console.log(1);
        results.json()
        console.log(2);
      })
      .then(results => {
        console.log("IT'S FETCHED");
        if (results.totalItems) {
          this.props.onDetectedReducer(results.items[0])
          history.push('/result')
        }
      })
    }
  

  // https.get(API, (res) => {
  //   res.setEncoding('utf8');
  //   let rawData = '';
  //   res.on('data', (chunk) => rawData += chunk);
  //   res.on('end', () => {
  //     const response = goodReadsJSONResponse.convertToJson(rawData);
  //     console.log(response, response.book.title, response.book.average_rating, response.book.ratings_count);
  //     return response;
  //   });
  // }).on('error', (e) => {
  //   console.log(`Got error: ${e.message}`);
  // });

  render() {
    return (
      <div className="ScannerDashboard">
        <SearchBar />
        <div className="ScannerDashboard_content">
          <Scanner detectedCallback={this.executeFetch} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  results: state.results
})

const mapDispatchToProps = (dispatch) => ({
  onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
})

export default connect (mapStateToProps, mapDispatchToProps)(ScannerDashboard);
