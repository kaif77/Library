import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {Col,Row, Container} from "react-bootstrap";

const Book: React.FC =() => {
    return (
        <div className="book">

                <Row>
                    <Col sm={10}>1. Book 1 title</Col>

                    <Col sm={2}>
                        <Row className="icons">
                            <Col ><FeatherIcon icon="edit"  size="20" className="editIcon"/></Col>
                            <Col><FeatherIcon icon="trash-2" size="20" className="trashIcon"/></Col>
                        </Row>


                    </Col>

                </Row>


            </div>



    );
};

export default Book;