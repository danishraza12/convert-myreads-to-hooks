import React from 'react';
import * as BooksAPI from '../BooksAPI';
import GetBooks from './GetBooks';

class DisplaySearches extends React.Component {
  state = { term: '', books: [] }

  /**Function for changing page */
  onButtonClick = event => {
    this.props.onButtonClick(false)
  }

  /**Function to track users input and call function to make API requests to fetch books */
  onInputChange = event => {
    this.setState({ term: event.target.value })
    this.searchBooks(event.target.value)
  }

  /**This function will make an API request with the users entered term and fetch the results */
  searchBooks = term => {
    if (term.length !== 0) {
      BooksAPI.search(term).then(books => {
        if (!books.error) {
          this.setState({ books })
        } else {
          this.setState({ books: [] })
        }
      })
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          { /** If close button is clicked this means we have to go back to the home page 
           * so the state changes to 'false' and the home page is rendered */ }
          <button className="close-search" onClick={this.onButtonClick}>Close</button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <GetBooks 
            searchedBooks={this.state.books} 
            fetchedBooks={this.props.fetchedBooks} 
            changeBookShelf={this.props.changeBookShelf} 
          />
        </div>
      </div>
    )
  }
}

export default DisplaySearches;