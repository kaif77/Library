import React, {useEffect, useState} from "react";
import BookTitle from "./BookTitle";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import CreateBooks from "./CreateBooks";
import {IAuthors, IBooks} from "../../types/LibraryTypes";

type BooksProps = {
    authors: IAuthors[]
}
const Books: React.FC<BooksProps> = (props) => {
    const bookList: IBooks [] = [{name: 'book 1', isbn: '11', author: 'z'},
        {
            name: 'book 2',
            isbn: '22',
            author: 'y'
        }, {name: 'book 3', isbn: '33', author: 'x'}];

    const [books, setBooks] = useState(bookList);
    const [formVisible, setFormVisibility] = useState<false | true>(false);
    const [bookToUpdate, setBookToUpdate] = useState<IBooks | null>(null);
    const [bookToUpdateIndex, setBookToUpdateIndex] = useState<number | null>(null)
    const handleOnFormOpen = () => {
        setBookToUpdateIndex(null);
        setBookToUpdate(null);
        if(!formVisible){
            setFormVisibility(true);
        }

    }
    const handleOnFormClose = () => {
        setFormVisibility(false);
    }
    const handleBookAdded = (name: string, isbn: string, author: string) => {
        const newBook: IBooks = {name, isbn, author};
        setBooks([...books, newBook]);
    }
    const HandleOnBookDeleted = (index: number) => {
        if(bookToUpdateIndex===index){
            setBookToUpdateIndex(null);
            setBookToUpdate(null);
        }
        const allBooks: IBooks[] = books.slice();
        allBooks.splice(index, 1);
        setBooks(allBooks);
    }
    const HandleOnUpdateRequest = (bookIndex: number) => {
        setBookToUpdate(books[bookIndex]);
        setBookToUpdateIndex(bookIndex);
    }
    useEffect( () => {
        if(!bookToUpdate) {
            return;
        }
        setFormVisibility(true);
    }, [bookToUpdate]);
    const handleUpdatedBook = (updatedBook:IBooks) =>{
        const allBooks: IBooks[] = books.slice();

        if(bookToUpdateIndex === null) {
            return;
        }
        allBooks.splice(bookToUpdateIndex, 1, updatedBook);
        setBooks(allBooks);
        setBookToUpdate(null)
        setBookToUpdateIndex(null)
        setFormVisibility(false);

    }

    return (
        <div>
            <BookTitle/>
            <BooksList bookList={books}
                       onBookDeleted={HandleOnBookDeleted}
                       onUpdateRequest={HandleOnUpdateRequest}

            />
            <AddBook handleOnFormOpen={handleOnFormOpen}/>
            {formVisible && <CreateBooks authors={props.authors}
                                         handleOnFormClose={handleOnFormClose}
                                         onBookAdded={handleBookAdded}
                                         bookToUpdate={bookToUpdate}
                                         onBookUpdated={handleUpdatedBook}
            />}
        </div>
    );
}

export default Books;