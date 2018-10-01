import React, { Component } from 'react';
import '../components_sass/ScannerDashboard.sass';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Scanner from './Scanner';
import history from '../history';
import { onDetectedReducer } from '../actions/actions';


class ScannerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
  }

  executeFetch = (isbn) => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const apiKey = 'AIzaSyAPODoh7pbgRTLTAWlaQkFBbqbTadJsz1U'
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
