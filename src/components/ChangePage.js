import React from 'react';

const ChangePage = ({ onButtonClick }) => {
    return (
        <div className="open-search">
            { /**This will return true if the button is clicked and 
                 * we will move to the Search Page */ }
            <button onClick={() => onButtonClick(true)}>Add a book</button>
        </div>
    )
}

export default ChangePage;