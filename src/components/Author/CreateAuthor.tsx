import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type createAuthorProps = {
    onFormClose:() => void;
}

const CreateAuthor: React.FC<createAuthorProps>  = (props) => {
    return (
        <Row className='create-author mx-3 my-4'>
            <Col xs={12} md={8}>
                <Row>

                    <Col xs={10}>
                        <h3>Create Author</h3>
                    </Col>

                    <Col xs={2}>
                        <i><XCircle onClick={props.onFormClose}/></i>
                    </Col>

                </Row>

                <Row>

                    <Col className='my-4'>
                        <Form className='mx-5'>
                            <Form.Group controlId="authorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Button className='create-btn mt-3 py-1 px-4'>Create</Button>
                        </Form>
                    </Col>

                </Row>

            </Col>

        </Row>


    );
}

export default CreateAuthor;