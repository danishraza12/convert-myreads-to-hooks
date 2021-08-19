import React from 'react';
import ChangeShelf from './ChangeShelf';

/**This component will render each book provided to it */
const BookContent = ({ key, book, onShelfChange }) => {
	return (
		<li key={book.id}>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`
						}}
					/>
					<ChangeShelf book={book} onShelfChange={onShelfChange} />
				</div>
				<div className="book-title">{book.title ? book.title : ""}</div>
				<div className="book-authors">{book.authors ? book.authors : ""}</div>
			</div>
		</li>
	)
}

export default BookContent;