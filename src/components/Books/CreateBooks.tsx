import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from 'react-select/creatable';
import {IAuthors, AuthorsInDropDown, IBooks} from "../../types/LibraryTypes";
import NumberFormat from 'react-number-format';

type BooksProps = {
  authors: IAuthors[]
  handleOnFormClose: () => void
  onBookAdded: (bookAdd: IBooks) => void
  bookToUpdate: IBooks | null
  onBookUpdated: (bookUpdated: IBooks) => void
}
const CreateBook: React.FC<BooksProps> = (props) => {
  const {authors} = props;
  const [name, setName] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [inputAuthor, setAuthor] = useState<null | AuthorsInDropDown>(null);
  const [validated, setValidated] = useState(false);
  const [authorsOfOptionList, SetAuthorsOfOptionList] = useState<null | AuthorsInDropDown[]>(null);
  const styleSelect: any = {
    container: (base: any) => ({
      ...base,
      backgroundColor: '#959595',
      padding: 2,
    }),
    control: (base: any) => ({
      ...base,
      border: 0,
    }),
  }

  const themeSelect: any = (theme: any) => {
    return {
      ...theme,
      borderRadius: 0,
      borderWidth: 2,
      colors: {
        ...theme.colors,
        primary25: '#f5f5f5',
        primary: '#959595',
      },
    }
  }

  const handleOnBookNameChanged = (name: string) => {
    setName(name);
  }

  const handleOnPriceChanged = (price: number | undefined) => {
    if (!price) {
      setPrice(null);
    } else {
      setPrice(price);
    }
  }
  useEffect(() => {
    if (!authors) {
      return;
    }
    const dropDowns: AuthorsInDropDown[] = authors.map(
        (author) => {
          return {value: author.name, label: author.name}
        });
    SetAuthorsOfOptionList(dropDowns);
  }, [authors]);

  const handleOnAuthorChanged = (author: null | AuthorsInDropDown) => {
    setAuthor(author);
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!name || name === "" || !price || price <= 0 || !inputAuthor) {
      return;
    }
    if (props.bookToUpdate) {
      const updatedBook: IBooks = {...props.bookToUpdate, name: name, price: price, author: inputAuthor.value};
      props.onBookUpdated(updatedBook);
      return;
    }
    const addBook :IBooks = {name, price,author:inputAuthor.value};
    props.onBookAdded(addBook);
    setValidated(false);
    setName('');
    setPrice(null);
    setAuthor(null);
  }

  useEffect(() => {
    if (!props.bookToUpdate) {
      setName('');
      setPrice(null);
      setAuthor(null);
      return;
    }
    setName(props.bookToUpdate.name);
    setPrice(props.bookToUpdate.price);
    const goingToUpdateAuthor: AuthorsInDropDown = {
      value: props.bookToUpdate.author,
      label: props.bookToUpdate.author
    }
    setAuthor(goingToUpdateAuthor);
  }, [props.bookToUpdate]);

  return (
      <Row className='create-book mx-3 my-5'>
        <Col xs={12} md={11} lg={10}>
          <Row>
            <Col xs={10}>
              <h3>{props.bookToUpdate ? "Update Book" : "Create Book"}</h3>
            </Col>
            <Col xs={2} className='formCloseButton'>
              <i onClick={props.handleOnFormClose}><XCircle/></i>
            </Col>
          </Row>
          <Row>
            <Col className='my-3'>
              <Form className='formInputs' noValidate validated={validated} onSubmit={handleOnSubmit}>
                <Form.Group controlId="bookName">
                  <Form.Label>Title of the Book</Form.Label>
                  <Form.Control type="text"
                                placeholder=""
                                required
                                value={name ? name : ''}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleOnBookNameChanged(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Book Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <NumberFormat thousandSeparator={true}
                                className='form-control'
                                required
                                prefix={'$'}
                                value={price ? price : ''}
                                placeholder=""
                                onValueChange={(values) => {
                                  handleOnPriceChanged(values.floatValue)
                                }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Price.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="authorName">
                  <Form.Label>Author</Form.Label>
                  <Select
                      value={inputAuthor}
                      onChange={(selected: AuthorsInDropDown | null) => {
                        handleOnAuthorChanged(selected)
                      }}
                      allowCreateWhileLoading
                      options={authorsOfOptionList ? authorsOfOptionList : undefined}
                      isClearable={true}
                      isSearchable={false}
                      theme={themeSelect}
                      styles={styleSelect}
                  />
                </Form.Group>
                {(!inputAuthor && validated) &&
                <span className='select-invalid'>
                                Please select an Author.
                            </span>}
                <Button type="submit"
                        className='create-btn mt-4 py-1 px-4'>{props.bookToUpdate ? "Update" : "Create"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}

export default CreateBook;