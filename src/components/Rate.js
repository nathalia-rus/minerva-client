import React, { Component } from 'react';
import '../components_sass/Result.sass';
// import PuchasedItems from './PuchasedItems';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import purchased from '../assets/purchased.png';


class Rate extends Component {

  // renderPurchase = (list) => {
  //   return list.map((el, i) => {
  //     return (
  //       <PuchasedItems key={i} {...el.title} />
  //     )
  //   })
  // }

  render() {
    const result = this.props.list;
    if (result.length) {
      return (
        <div className='SearchBarResult'>
          {this.renderResults(result)}
        </div>
      );
    } else {
      return (
        <div className='Result_null'>
          <SearchBar />
          <div className ='Result_null_title_rate'> Your purchased items will appear here.</div>
          <img className='Result_null_img' alt='Purchased' src={purchased} />
          <div className='Result_null_text'> Help us know if this app helped you make the right decision!</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.onDetectedReducer.list
})

export default connect(mapStateToProps)(Rate);
