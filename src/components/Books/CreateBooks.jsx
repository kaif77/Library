import React from 'react';
import {Col,Row, Container} from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';


const CreateBooks: React.FC =() => {
    return (
        <Col xs={8} className='createBook'>
            <Row>
                <Col xs={11} className='px-0 createBookTitle' ><span>Create Book</span></Col>
                <Col xs={1} className='pe-0'><FeatherIcon icon="x-circle"  size="20" className="x-circleIcon"/></Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Row>input</Row>
                    <Row>input</Row>
                    <Row>input</Row>
                    <Row>button</Row>



                </Col>
            </Row>



        </Col>



    );
};

export default CreateBooks;