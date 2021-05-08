import React from 'react';
import Books from "./Books/Books";
import {Col,Row, Container} from "react-bootstrap";

const ReadingArea:React.FC=()=>{
    return(
        <Container fluid className="reading_area">

            <Row>
                <Col>
                    <Books/>

                </Col>

                <Col >
                    <Books/>

                </Col>

            </Row>


        </Container >
    );
};
export default ReadingArea;