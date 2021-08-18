import React from 'react';
import BookContent from './BookContent';

/**Component is used to render the books */
const BookShelf = ({ fetchedBooks, shelfTitle, onShelfChange }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{fetchedBooks.map(fetchedBook => (
						<BookContent 
							key={fetchedBook.id} 
							book={fetchedBook} 
							onShelfChange={onShelfChange}
						/>
					))}
				</ol>
			</div>
		</div>
	)
}

export default BookShelf;