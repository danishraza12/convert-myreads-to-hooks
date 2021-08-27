import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({ books, onShelfChange }) => {
  /**Extracting books according to the different selves from all the fetched books */
  const currentlyReading = books.filter(fetchedBook => 
    fetchedBook.shelf === 'currentlyReading')
  const wantToRead = books.filter(fetchedBook => 
    fetchedBook.shelf === 'wantToRead')
  const read = books.filter(fetchedBook => 
    fetchedBook.shelf === 'read')

  return (
    <div className="list-books-content">
      <div>
        <BookShelf 
          fetchedBooks={currentlyReading} 
          shelfTitle="Currently Reading" 
          onShelfChange={onShelfChange} 
        />
        <BookShelf 
          fetchedBooks={wantToRead} 
          shelfTitle="Want to Read" 
          onShelfChange={onShelfChange} 
        />
        <BookShelf 
          fetchedBooks={read} 
          shelfTitle="Read" 
          onShelfChange={onShelfChange} 
        />
      </div>
    </div>
  )
}

export default BookShelves;