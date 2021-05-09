import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const CreateBook: React.FC = () => {
    return (
        <Row className='create-book mx-3 my-4'>
            <Col xs={12} md={8}>
                <Row>

                    <Col xs={10}>
                        <h3>Create Book</h3>
                    </Col>

                    <Col xs={2}>
                        <i><XCircle /></i>
                    </Col>

                </Row>

                <Row>

                    <Col className='my-4'>
                        <Form className='mx-3'>
                            <Form.Group controlId="bookName">
                                <Form.Label>Title of the Book</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="isbn">
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="authorName">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="" as="select" className="form-select ">

                                <option>Auther 1</option>
                                <option>Auther 1</option>
                                <option>Auther 1</option>

                            </Form.Control>

                            </Form.Group>
                            <Button className='create-btn mt-3 py-1 px-4'>Create</Button>
                        </Form>
                    </Col>

                </Row>

            </Col>

        </Row>


    );
}

export default CreateBook;