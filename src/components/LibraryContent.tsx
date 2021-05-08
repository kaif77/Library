import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import AuthorTitle from "./Author/AuthorTitle";
import AuthorList from "./Author/AuthorList";
import AddAuthor from "./Author/AddAuthor";
import CreateAuthor from "./Author/CreateAuthor";


const LibraryContent : React.FC =()=>{
    const [formVisible,setFormVisibility] = useState(false);

    const handleOnClickAddAuthor = () => {
        setFormVisibility(true);
    }

    const handleOnFormClose = () => {
        setFormVisibility(false);
    }

    return(
       <Row className='library-content'>
           <Col xs={12} md={6}>Books</Col>
           <Col xs={12} md={6} className='author'>
               <AuthorTitle />
               <AuthorList />
               <AddAuthor addClick={handleOnClickAddAuthor}/>
               {formVisible && <CreateAuthor onFormClose={handleOnFormClose}/>}
           </Col>
       </Row>
    )
}

export default LibraryContent;