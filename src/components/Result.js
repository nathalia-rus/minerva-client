import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/Result.sass';

import { connect } from 'react-redux';
import { addLibrary } from '../actions/actions';


import web from '../assets/spider-web.svg';
import plus from '../assets/add-icon.svg';


class Result extends Component {
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }

  addBookToLibrary = () => {
    console.log(this.props.id)
    fetch(`http://localhost:3001/library/${this.props.id}`, {
      method: 'POST',
      body: JSON.stringify({
        book: this.props.results
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(result => result.json())
    .then(this.addBook)
  }

  render() {
    // const result = {"kind":"books#volume","id":"F9ybAgAAQBAJ","etag":"VTVItL6yr6Q","selfLink":"https://www.googleapis.com/books/v1/volumes/F9ybAgAAQBAJ","volumeInfo":{"title":"JavaScript","subtitle":"The Good Parts","authors":["Douglas Crockford"],"publisher":"\"O'Reilly Media, Inc.\"","publishedDate":"2008-05-08","description":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780596517748"},{"type":"ISBN_10","identifier":"0596517742"}],"readingModes":{"text":false,"image":false},"pageCount":153,"printType":"BOOK","categories":["Computers"],"averageRating":4,"ratingsCount":8,"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/JavaScript.html?hl=&id=F9ybAgAAQBAJ"},"saleInfo":{"country":"ES","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"ES","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=F9ybAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods."}}
    // const result = {"kind":"books#volume","id":"mDzDBQAAQBAJ","etag":"xS80wSslQLY","selfLink":"https://www.googleapis.com/books/v1/volumes/mDzDBQAAQBAJ","volumeInfo":{"title":"Eloquent JavaScript, 2nd Ed.","subtitle":"A Modern Introduction to Programming","authors":["Marijn Haverbeke"],"publisher":"No Starch Press","publishedDate":"2014-12-14","description":"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn: The essential elements of programming, including syntax, control, and dataHow to organize and clarify your code with object-oriented and functional programming techniquesHow to script the browser and make basic web applicationsHow to use the DOM effectively to interact with browsersHow to harness Node.js to build servers and utilities This edition is thoroughly revised and modernized to reflect the current state of Java­Script and web browsers, with brand-new material, such as a chapter on code performance in Java­Script, and expanded coverage of recursion and closures. All source code is available online in an inter­active sandbox, where you can edit the code, run it, and see its output instantly. Isn’t it time you became fluent in the language of the Web?","industryIdentifiers":[{"type":"ISBN_13","identifier":"9781593275846"},{"type":"ISBN_10","identifier":"1593275846"}],"readingModes":{"text":true,"image":true},"pageCount":472,"printType":"BOOK","categories":["Computers"],"averageRating":3.5,"ratingsCount":2,"maturityRating":"NOT_MATURE","allowAnonLogging":true,"contentVersion":"1.1.1.0.preview.3","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.es/books?id=mDzDBQAAQBAJ&printsec=frontcover&dq=isbn:9781593275846&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.es/books?id=mDzDBQAAQBAJ&dq=isbn:9781593275846&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Eloquent_JavaScript_2nd_Ed.html?hl=&id=mDzDBQAAQBAJ"},"saleInfo":{"country":"ES","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"ES","viewability":"PARTIAL","embeddable":true,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":true},"pdf":{"isAvailable":true},"webReaderLink":"http://play.google.com/books/reader?id=mDzDBQAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"SAMPLE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you’ll learn: The essential elements of programming, including syntax, control, and dataHow to organize and clarify your code ..."}}
    const result = this.props.results;
    if (result) {
      return (
        <div>

          <div className='Result_topinfo_outerdiv'>
            <img className='Result_img' alt= 'Book cover'src={result.volumeInfo.imageLinks.thumbnail} />
          </div>

          <div className='addToLibraryButton' onClick={this.addBookToLibrary}>
            <img className='button_img' alt='Plus' src={plus} />
            {/* <div className='addToLibraryButton_plus'>+</div> */}
          </div>

          <div className='Result_topinfo_wrapper'>
            <div className='Result_topinfo_wrapper_categories'>{result.volumeInfo.categories}</div>
            <div className='Result_topinfo_wrapper_title'>{result.volumeInfo.title}</div>
            <div className='Result_topinfo_wrapper_subtitle'>{result.volumeInfo.subtitle}</div>

            <div className='Result_topinfo_wrapper_authors'>by {result.volumeInfo.authors}</div>
            <div className='Result_topinfo_wrapper_rating'>
              <StarRatings
                rating={result.volumeInfo.averageRating}
                starRatedColor="#F8E473"
                changeRating={this.changeRating}
                numberOfStars={5}
                starDimension={'22'}
                starSpacing={'2'}
                name='rating'
              />
            </div>
          </div>

        <div className='Result_bottominfo_outerdiv'>
          <div className='Result_bottominfo_sinopsis'>Synopsis</div>
          <div className='Result_TextSnippet'>" {result.searchInfo.textSnippet} "</div>

          <div className='Result_bottominfo_sinopsis'>Reviews</div>
          <div className='Result_TextSnippet'>I'm sorry but there are no reviews yet.</div>
        </div>
      </div>

      );
    } else {
      return (
        <div className='Result_null'>
          <img className='Result_null_img' alt='Tombstone' src={web} />
          <div className='Result_null_title'>Oops!</div>
          <div className='Result_null_text'>There is no result.</div>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  results: state.onDetectedReducer.results,
  id: state.userReducer.user.id
})

const mapDispatchToProps = (dispatch) => ({
  addBook: (results) => dispatch(addLibrary(results))
})

export default connect (mapStateToProps, mapDispatchToProps)(Result);
