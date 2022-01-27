import React, {useEffect, useState} from "react";
import BookTitle from "./BookTitle";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import CreateBooks from "./CreateBooks";
import {IAuthors, IBooks} from "../../types/LibraryTypes";
import {useToasts} from "react-toast-notifications";

type BooksProps = {
  authors: IAuthors[]
  books: IBooks[]
  setBooks: (books: IBooks[]) => void
}

const Books: React.FC<BooksProps> = (props) => {
  const {setBooks, books} = props;
  const [formVisible, setFormVisibility] = useState<false | true>(false);
  const [bookToUpdate, setBookToUpdate] = useState<IBooks | null>(null);
  const [bookToUpdateIndex, setBookToUpdateIndex] = useState<number | null>(null);
  const {addToast} = useToasts();

  const handleOnFormOpen = () => {
    setBookToUpdateIndex(null);
    setBookToUpdate(null);
    if (!formVisible) {
      setFormVisibility(true);
    }
  }

  const handleOnFormClose = () => {
    setFormVisibility(false);
    setBookToUpdate(null);
    setBookToUpdateIndex(null);
  }

  const handleBookAdded = (bookAdd: IBooks) => {
    setBooks([...books, bookAdd]);
    addToast("New Book Created", {appearance: 'success', autoDismiss: true});
  }

  const handleDeleteBook = (index: number) => {
    const userConfirmation = window.confirm("Delete Book?");
    if (userConfirmation) {
      const allBooks: IBooks[] = books.slice();
      allBooks.splice(index, 1);
      setBooks(allBooks);
      addToast("Book Deleted", {appearance: 'info', autoDismiss: true});
      if (bookToUpdateIndex) {
        if (bookToUpdateIndex > index) {
          setBookToUpdateIndex(bookToUpdateIndex - 1);

        } else if (bookToUpdateIndex === index) {
          setBookToUpdateIndex(null);
          setBookToUpdate(null);
          setFormVisibility(false);
        }
      }
    }
  }

  const HandleOnUpdateRequest = (bookIndex: number) => {
    setBookToUpdate(books[bookIndex]);
    setBookToUpdateIndex(bookIndex);
  }

  useEffect(() => {
    if (!bookToUpdate) {
      return;
    }
    setFormVisibility(true);
  }, [bookToUpdate]);

  const handleUpdatedBook = (updatedBook: IBooks) => {
    const allBooks: IBooks[] = books.slice();
    if (bookToUpdateIndex === null) {
      return;
    }
    allBooks.splice(bookToUpdateIndex, 1, updatedBook);
    setBooks(allBooks);
    addToast("Book Updated", {appearance: 'success', autoDismiss: true});
    setBookToUpdate(null);
    setBookToUpdateIndex(null);
    setFormVisibility(false);
  }

  return (
      <div>
        <BookTitle/>

        <BooksList bookList={books}
                   onBookDeleted={handleDeleteBook}
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