import React, { Component } from 'react';
import '../components_sass/Result.sass';

import { onDetectedReducer } from '../redux/actions';
import { connect } from 'react-redux';

import tombstone from '../assets/tombstone.svg';

class Result extends Component {

  render() {
    const result = {"kind":"books#volume","id":"F9ybAgAAQBAJ","etag":"VTVItL6yr6Q","selfLink":"https://www.googleapis.com/books/v1/volumes/F9ybAgAAQBAJ","volumeInfo":{"title":"JavaScript","subtitle":"The Good Parts","authors":["Douglas Crockford"],"publisher":"\"O'Reilly Media, Inc.\"","publishedDate":"2008-05-08","description":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780596517748"},{"type":"ISBN_10","identifier":"0596517742"}],"readingModes":{"text":false,"image":false},"pageCount":153,"printType":"BOOK","categories":["Computers"],"averageRating":4,"ratingsCount":8,"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/JavaScript.html?hl=&id=F9ybAgAAQBAJ"},"saleInfo":{"country":"ES","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"ES","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=F9ybAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods."}}//this.props.results;
    console.log('within result.js', JSON.stringify(this.props.results))
    if (result) {
      console.log('Result working')
      return (
        <div className="Result_outerdiv">
        <div className="Result_Img_outerdiv">
          <img className='Result_Img' src={result.volumeInfo.imageLinks.thumbnail} />
        </div>
          <div className='Result_Title'>{result.volumeInfo.title}</div>
          <div className='Result_Subtitle'>{result.volumeInfo.subtitle}</div>
          <div className='Result_Author'>by {result.volumeInfo.authors}</div>

          <div className='Result_TextSnippet'>{result.searchInfo.textSnippet}</div>



          <div className='Result_averageRating'>Rating: {result.volumeInfo.averageRating}</div>


        </div>
      );
    } else {
      console.log('Null');
      return (
        <div className='Result_null'>
          <img className='Result_null_img' alt='Tombstone' src={tombstone} />
          <div className='Result_null_text'>There is no result.</div>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  results: state.onDetectedReducer.results
})

// const mapDispatchToProps = (dispatch) => ({
//   onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
// })

export default connect (mapStateToProps)(Result);
// export default Result;