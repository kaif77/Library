import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {IAuthors, IBooks} from "../../types/LibraryTypes";
import React, {useEffect, useState} from "react";
import {useToasts} from "react-toast-notifications";

type AuthorsProps = {
    authors: IAuthors[]
    books: IBooks[];
    setAuthors: (authors: IAuthors[]) => void
}

const Authors: React.FC<AuthorsProps> = (props) => {
    const {setAuthors, authors, books} = props;
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
            addToast("Author has been assigned to a book and cannot be Deleted", {
                appearance: 'error',
                autoDismiss: true
            });
            return;
        }
        const userConfirmation = window.confirm("Delete Author?");
        if (userConfirmation === true) {
            allAuthors.splice(index, 1);
            setAuthors(allAuthors);
            addToast("Author Deleted", {appearance: 'info', autoDismiss: true});
            if (authorToUpdateIndex) {
                if (authorToUpdateIndex > index) {
                    setAuthorToUpdateIndex(authorToUpdateIndex - 1);

                }else if (authorToUpdateIndex === index) {
                    setAuthorToUpdateIndex(null);
                    setAuthorToUpdate(null);
                    setFormVisibility(false);
                }
            }
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
        < >
            <AuthorTitle/>
            <AuthorList authors={props.authors}
                        onAuthorDeleted={handleOnAuthorDeleted}
                        onUpdateRequest={handleOnUpdateRequest}
            />
            <AddAuthor addClick={handleOnClickAddAuthor}/>
            {formVisible && <CreateAuthor onFormClose={handleOnFormClose}
                                          onAuthorAdded={handleAuthorAdded}
                                          authorToUpdate={authorToUpdate}
                                          onAuthorUpdated={handleUpdateAuthor}
            />}
        </>
    )
}

export default Authors;
