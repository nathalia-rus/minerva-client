import React, { Component } from 'react';
import '../components_sass/LibraryDashboard.sass'
import LibraryDashboardItem from './LibraryDashboardItem';

class LibraryDashboard extends Component {

  render() {
    return (
      <div>
        <div className='LibraryDashboard_bookshelf'>
          <div className='LibraryDashboard_books'>000 <p>Books</p></div>
          <div className='LibraryDashboard_collections'>000 <p>Series</p></div>
          <div className='LibraryDashboard_toread'>000 <p>To Read</p></div>
        </div>
        <div className='LibraryDashboard_info'>
          <LibraryDashboardItem />
        </div>
      </div>
    );
  }
}

export default LibraryDashboard;
