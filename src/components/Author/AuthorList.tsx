import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
import {Authors} from "../../types/LibraryTypes";

const AuthorList : React.FC = () => {
    const authorsList: Authors [] = [{name:'Author 1'},{name:'Author 2'},{name:'Author 3'}];
    // const authors: Authors [] = [];
    const [authors,setAuthor] = useState(authorsList);
    const renderAuthorList = () =>{
        if(authors.length===0){
            return ;
        }
        return authors.map((author:Authors, index:number)=> {
            return <Author author={author} key={index} index={index+1}/>
        });
    };

    return(
        <Row>

            <Col>
                {authors.length ===0 && <label className='empty-list mb-2'>No authors listed here</label>}
            </Col>

            <ul className='author-ul'>
               {renderAuthorList()}
            </ul>

        </Row>
    );
}

export default AuthorList;