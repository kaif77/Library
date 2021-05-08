import React from 'react';
import {Col,Row, Container} from "react-bootstrap";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import CreateBooks from "./CreateBooks";


const Books: React.FC =() => {
    return (
        <Container fluid >
            <Row className="booksHeading ">
                Books
            </Row>
            <Row >
                <BooksList/>
            </Row>
            <Row>
                <AddBook/>

            </Row>
            <Row>
    <CreateBooks/>
            </Row>
        </Container>

    );
};

export default Books;