import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";


import BookTitle from "./Books/BookTitle";
import BooksList from "./Books/BooksList";
import AddBook from "./Books/AddBook";
import CreateBooks from "./Books/CreateBooks";
import Authors from "./Author/Authors";


const LibraryContent : React.FC =()=>{
    return(
       <Row className='library-content'>
           <Col xs={12} md={6}>
            <BookTitle/>
               <BooksList/>
               <AddBook/>
               <CreateBooks/>
           </Col>
            <Authors/>
       </Row>
    )
}

export default LibraryContent;