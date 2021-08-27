import React, { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';
import GetBooks from './GetBooks';
import { Link } from 'react-router-dom';


const DisplaySearches = ({ changeBookShelf, fetchedBooks }) => {
  const [term, setTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [books, setBooks] = useState([])

  /**Implementing debouncing to limit searches */
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term)
    }, 300)

    /**Clearing timer after 300ms*/
    return () => {
      clearTimeout(timerID)
    }
  }, [term])

  /**This function will make an API request with the users entered term and fetch the results */
  /**We donot use async/await here as we have used the promise returned */

  useEffect(() => {
    const searchBooks = term => {
      if (term.length !== 0) {
        BooksAPI.search(term).then(books => {
          if (!books.error) {
            setBooks(books)
          } else {
            setBooks([])
          }
        })
      } else {
        setBooks([])
      }
    }
    searchBooks(term)
  }, [term, debouncedTerm])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        { /** If close button is clicked this means we have to go back to the home page 
           * so the state changes to 'false' and the home page is rendered */ }
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <GetBooks
          searchedBooks={books}
          fetchedBooks={fetchedBooks}
          changeBookShelf={changeBookShelf}
        />
      </div>
    </div>
  )
}

export default DisplaySearches;