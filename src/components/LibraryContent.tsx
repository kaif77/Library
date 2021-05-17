import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthors} from "../types/LibraryTypes";
import React, {useEffect, useState} from "react";
import Books from "./Books/Books";
import {useToasts} from "react-toast-notifications";

const LibraryContent: React.FC = () => {
    const authorsList: IAuthors [] = [{name: 'Author 1'}, {name: 'Author 2'}, {name: 'Author 3'}];
    const [authors, setAuthors] = useState(authorsList);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthors | null>(null);
    const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null)
    const [formVisible, setFormVisibility] = useState(false)
    const {addToast} = useToasts();

    const handleOnClickAddAuthor = () => {
        setFormVisibility(true);
    }
    useEffect(() => {
        if (!authorToUpdate) {
            return;
        }
        setFormVisibility(true);
    }, [authorToUpdate]);

    const handleOnAuthorDeleted = (index: number) => {
        const allAuthors: IAuthors[] = authors.slice();
        const userConfirmation = window.confirm("Delete Author?");
        if (userConfirmation === true) {
            allAuthors.splice(index, 1);
            setAuthors(allAuthors);
            addToast("Author Deleted", {appearance: 'info', autoDismiss: true});
        }
    };

    const handleUpdateAuthor = (updatedAuthor: IAuthors) => {
        const allAuthors: IAuthors[] = authors.slice();

        if (authorToUpdateIndex === null) {
            return;
        }
        allAuthors.splice(authorToUpdateIndex, 1, updatedAuthor);
        setAuthors(allAuthors);
        setAuthorToUpdate(null)
        setAuthorToUpdateIndex(null)
        setFormVisibility(false);
    }

    const handleOnUpdateRequest = (index: number) => {
        setAuthorToUpdate(authors[index]);
        setAuthorToUpdateIndex(index);
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

    return (
        <Row className='library-content'>
            <Col xs={12} md={6}>

                <Books authors={authors}/>
            </Col>

            <Authors authors={authors}
                     onAuthorDeleted={handleOnAuthorDeleted}
                     onUpdateRequest={handleOnUpdateRequest}
                     onAuthorUpdated={handleUpdateAuthor}
                     authorToUpdate={authorToUpdate}
                     formVisible={formVisible}
                     onAuthorAdded={handleAuthorAdded}
                     onFormClose={handleOnFormClose}
                     onClickAddAuthor={handleOnClickAddAuthor}
            />
        </Row>
    )
}

export default LibraryContent;