import React from 'react';
import BookContent from './BookContent';

/**This functional component is used to display the searched books and change their shelves
 * according to the users selection
 */
const GetBooks = ({ searchedBooks, fetchedBooks, changeBookShelf }) => {
	return (
		<ol className="books-grid">
			{/**Checking if we have any books, if we have then we are changing their shelf and rendering them */}
			{searchedBooks.length > 0 &&
				searchedBooks.map(book => {
					const bookShelf = fetchedBooks.find(foundShelfBook => foundShelfBook.id === book.id)
					bookShelf ? book.shelf = bookShelf.shelf : book.shelf = "none"
					return (
						<BookContent
							key={book.id}
							book={book}
							onShelfChange={changeBookShelf}
						/>
					)
				})}
			{searchedBooks.length === 0 && (<h1>No books found</h1>)}
		</ol>
	)
}

export default GetBooks;