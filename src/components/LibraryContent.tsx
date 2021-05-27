import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthors, IBooks} from "../types/LibraryTypes";
import React, {useState} from "react";
import Books from "./Books/Books";

const LibraryContent: React.FC = () => {
    const bookList: IBooks[] = [
        {name: 'book 1', price: 250.78, author: 'z'},
        {name: 'book 2', price: 250.78, author: 'y'},
        {name: 'book 3', price: 250.78, author: 'x'}
    ];
    const [books, setBooks] = useState(bookList);
    const authorsList: IAuthors [] = [{name: 'Author 1'}, {name: 'Author 2'}, {name: 'Author 3'}];
    const [authors, setAuthors] = useState(authorsList);

    return (
        <Row className='library-content'>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className='bookSection'>
                <Books authors={authors}
                       books={books}
                       setBooks={setBooks}/>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} className='authorSection'>
                <Authors authors={authors}
                         books={books}
                         setAuthors={setAuthors}/>
            </Col>
        </Row>
    )
}

export default LibraryContent;