import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthors, IBooks} from "../types/LibraryTypes";
import React, {useEffect, useState} from "react";
import Books from "./Books/Books";
import {useToasts} from "react-toast-notifications";

const LibraryContent: React.FC = () => {
    const bookList: IBooks[] = [
        {name: 'book 1', price: 250.78, author: 'z'},
        {name: 'book 2', price: 250.78, author: 'y'},
        {name: 'book 3', price: 250.78, author: 'x'}
    ];
    const [books, setBooks] = useState(bookList);
    const authorsList: IAuthors [] = [{name: 'Author 1'}, {name: 'Author 2'}, {name: 'Author 3'}];
    const [authors, setAuthors] = useState(authorsList);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthors | null>(null);
    const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null);
    const [formVisible, setFormVisibility] = useState(false);
    const {addToast} = useToasts();

    const handleOnClickAddAuthor = () => {
        setAuthorToUpdate(null);
        setAuthorToUpdateIndex(null);
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
        const bAuthors: String[] = books.map(b => b.author);
        if (bAuthors.includes(allAuthors[index].name)) {
            addToast("Author has been assigned to a book and cannot be Deleted", {appearance: 'error', autoDismiss: true});
            return;
        }
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
        setAuthorToUpdate(null);
        setAuthorToUpdateIndex(null);
    }

    const handleAuthorAdded = (author: IAuthors) => {
        const allAuthors: IAuthors[] = authors.slice();
        allAuthors.push(author);
        setAuthors(allAuthors);
    };

    return (
        <Row className='library-content'>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className='bookSection'>
                <Books authors={authors}
                       books={books}
                       setBooks={setBooks}/>
            </Col>


            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} className='authorSection'>
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
            </Col>

        </Row>
    )
}

export default LibraryContent;