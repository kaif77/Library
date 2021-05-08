import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {Col,Row, Container} from "react-bootstrap";



const AddBook: React.FC =() => {
    return (
        <div className='addBook'>
            <Row >
                <Col md={4} className='px-0'> <FeatherIcon icon="plus"  size="20" className="plusIcon"/>Add Book</Col>

            </Row>

        </div>

    );
};

export default AddBook;