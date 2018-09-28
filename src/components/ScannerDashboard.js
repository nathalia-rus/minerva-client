import React, { Component } from 'react';
import '../components_sass/ScannerDashboard.sass';
import { connect } from 'react-redux';
import Scanner from './Scanner';
import history from '../history';
import { onDetectedReducer } from '../redux/actions';

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
    const BASE_URL = 'https://www.goodreads.com/book/isbn/ISBN?format=FORMAT' 
   // const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const apiKey = 'eCuCTJhM3hFcUN5sdlYA6g'
    fetch(BASE_URL + isbn + '&key=' + apiKey)
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
      <div className="ScannerDashboard">
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