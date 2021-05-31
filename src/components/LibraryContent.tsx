import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthors, IBooks} from "../types/LibraryTypes";
import React, {useState} from "react";
import Books from "./Books/Books";

const LibraryContent: React.FC = () => {
  const bookList: IBooks[] = [];
  const [books, setBooks] = useState(bookList);
  const authorsList: IAuthors [] = [];
  const [authors, setAuthors] = useState(authorsList);

  return (
      <Row className='library-content'>
        <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className='book-section'>
          <Books authors={authors}
                 books={books}
                 setBooks={setBooks}/>
        </Col>
        <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} className='author-section'>
          <Authors authors={authors}
                   books={books}
                   setAuthors={setAuthors}/>
        </Col>
      </Row>
  )
}

export default LibraryContent;