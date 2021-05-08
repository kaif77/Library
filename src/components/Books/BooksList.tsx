import React from 'react';
import Book from "./Book";



const BooksList: React.FC =() => {
    return (
        <ul >
            <li className="book"><Book/></li>
            <li className="book"><Book/></li>
            <li className="book"><Book/></li>

        </ul>

    );
};

export default BooksList;