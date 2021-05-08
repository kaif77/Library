import React from "react";
import {Col, Row} from "react-bootstrap";
import Book from "./Book";


const BooksList : React.FC = () => {

    return(
        <Row>

            {/*<Col>
                {books.length ===0 && <label className='empty-list mb-2'>No books listed here</label>}
            </Col>*/}

            <ul className='book-ul'>
                <Book/>
                <Book/>
                <Book/>
            </ul>

        </Row>
    );
}

export default BooksList;