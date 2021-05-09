import React from "react";
import {Col, Row} from "react-bootstrap";
import {Trash2,Edit} from 'react-feather';



const Book : React.FC= (props) => {


    return(
        <li className='py-2'>
            <Row>
                <Col xs={10}>
                    <label>1. Book 1 Title</label>
                </Col>

                <Col xs={2} className='book-icons'>
                    <i> <Edit className='text-warning'/> </i>
                    <i><Trash2 className='text-danger mx-2'/> </i>
                </Col>
            </Row>
        </li>
    );
}

export default Book;