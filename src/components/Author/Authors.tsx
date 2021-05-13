import React, {useEffect, useState} from "react";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {Col} from "react-bootstrap";
import {IAuthors} from "../../types/LibraryTypes";

const Authors : React.FC = () => {
    const authorsList: IAuthors [] = [{name:'Author 1'},{name:'Author 2'},{name:'Author 3'}];
    // const authorsList: IAuthors [] = [];
    const [authors,setAuthors] = useState(authorsList);
    const [formVisible,setFormVisibility] = useState(false);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthors | null>(null);
    const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null)

    useEffect( () => {
        if(!authorToUpdate) {
            return;
        }

        setFormVisibility(true);
    }, [authorToUpdate]);

    const handleOnClickAddAuthor = () => {
        setFormVisibility(true);
    }

    const handleOnFormClose = () => {
        setFormVisibility(false);
        setAuthorToUpdate(null)
        setAuthorToUpdateIndex(null)
    }

    const handleAuthorAdded = (author: IAuthors) => {
        const allAuthors: IAuthors[] = authors.slice();
        allAuthors.push(author);
        setAuthors(allAuthors);
    };

    const handleOnAuthorDeleted = (index: number) => {
        const allAuthors : IAuthors[] = authors.slice();
        allAuthors.splice(index, 1);
        setAuthors(allAuthors);
    };

    const handleOnUpdateRequest = (index:number) => {
        setAuthorToUpdate(authors[index]);
        setAuthorToUpdateIndex(index);
    }

    const handleUpdateAuthor = (updatedAuthor: IAuthors) => {
        const allAuthors: IAuthors[] = authors.slice();

        if(authorToUpdateIndex === null) {
            return;
        }
        allAuthors.splice(authorToUpdateIndex, 1, updatedAuthor);
        setAuthors(allAuthors);

        setAuthorToUpdate(null)
        setAuthorToUpdateIndex(null)
        setFormVisibility(false);
    }

    return (
        <Col xs={12} md={6} className='author'>
            <AuthorTitle />
            <AuthorList authors={authors}
                        onAuthorDeleted={handleOnAuthorDeleted}
                        onUpdateRequest={handleOnUpdateRequest}
            />
            <AddAuthor addClick={handleOnClickAddAuthor}/>
            {formVisible && <CreateAuthor onFormClose={handleOnFormClose}
                                          onAuthorAdded={handleAuthorAdded}
                                          authorToUpdate={authorToUpdate}
                                          onAuthorUpdated={handleUpdateAuthor}
            />}
        </Col>
    )
}

export default Authors
