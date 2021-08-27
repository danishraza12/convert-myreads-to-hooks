import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/Header';
import BookShelves from './components/BookShelves';
import DisplaySearches from './components/DisplaySearches';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BooksApp = () => {
  const [fetchedBooks, setFetchedBooks] = useState([])

  /** Fetches all the books that we have on our shelves from the API */
  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll()
      if (response.error) {
        console.log("Network Error...")
      }
      setFetchedBooks(response)
    }
    getBooks()
  }, [])

  /** This function updates the API to match our selections on the home page */
  const changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    if (shelf === 'none') {
      setFetchedBooks(fetchedBooks.filter(b => b.id !== book.id)
      )
    } else {
      book.shelf = shelf
      setFetchedBooks(fetchedBooks.filter(b => b.id !== book.id).concat(book))
    }
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/search">
            <DisplaySearches
              changeBookShelf={changeBookShelf}
              fetchedBooks={fetchedBooks}
            />
          </Route>
        </Switch>
        <div className="list-books">
          <Switch>
            <Route exact path="/">
              <Header />
              <BookShelves
                books={fetchedBooks}
                onShelfChange={changeBookShelf}
              />
            </Route>
          </Switch>

          <div className="open-search">
            { /**This will return true if the button is clicked and 
                 * we will move to the Search Page */ }
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default BooksApp;
