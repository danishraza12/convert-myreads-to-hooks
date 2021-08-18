import React from 'react';

/**This component is used to update the shelves of the books according to the users selections */

class ChangeShelf extends React.Component {
    state = { shelf: this.props.book.shelf }

    onSelectChange = event => {
        this.setState({ shelf: event.target.value })
        this.props.onShelfChange(this.props.book, event.target.value)
    }

    render(props) {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.onSelectChange} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf;