import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from 'react-select/creatable';
import {IAuthors, AuthorsInDropDown, IBooks} from "../../types/LibraryTypes";
import {useToasts} from "react-toast-notifications";
import NumberFormat from 'react-number-format';


type BooksProps = {
    authors: IAuthors[]
    handleOnFormClose: () => void
    onBookAdded: (name: string, price: number, author: string) => void
    bookToUpdate: IBooks | null
    onBookUpdated: (bookUpdated: IBooks) => void
}
const CreateBook: React.FC<BooksProps> = (props) => {
    const {authors} = props;

    const authorsOfOptionList: AuthorsInDropDown[] = authors.map(
        (author) => {
            return {value: author.name, label: author.name}
        });
    const [name, setName] = useState<string | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [inputAuthor, setAuthor] = useState<null | AuthorsInDropDown>(null);
    const {addToast} = useToasts();

    const handleOnBookNameChanged = (name: string) => {
        setName(name);
    }
    const handleOnPriceChanged = (price: number | undefined) => {
        if (price === undefined) {
            setPrice(null);
        } else if (price) {
            setPrice(price);
        }

    }
    const handleOnAuthorChanged = (author: null | AuthorsInDropDown) => {
        setAuthor(author);
    }
    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!name || name === "" || !price || price === 0 || !inputAuthor) {
            if (!name || name === "") {
                addToast('Book Name is Not Valid', {appearance: 'warning', autoDismiss: true});
            }
            if (!price || price === 0) {
                addToast('Price is Not Valid', {appearance: 'warning', autoDismiss: true});
            }
            if (!inputAuthor) {
                addToast('Author Name is Not Valid', {appearance: 'warning', autoDismiss: true});
            }
            return;
        }
        if (props.bookToUpdate) {
            const updatedBook: IBooks = {...props.bookToUpdate, name: name, price: price, author: inputAuthor.value};
            props.onBookUpdated(updatedBook);
            return;
        }
        props.onBookAdded(name, price, inputAuthor.value);
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
    }, [props.bookToUpdate])

    return (
        <Row className='create-book mx-3 my-5'>
            <Col xs={12} md={11} lg={8}>
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
                        <Form className='formInputs' onSubmit={handleOnSubmit}>
                            <Form.Group controlId="bookName">
                                <Form.Label>Title of the Book</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                              value={name ? name : ''}
                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                  handleOnBookNameChanged(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <NumberFormat thousandSeparator={true}
                                              className='form-control'
                                              prefix={'$'}
                                              value={price ? price : ''}
                                              placeholder=""
                                              onValueChange={(values) => {
                                                  handleOnPriceChanged(values.floatValue)
                                              }}
                                />
                            </Form.Group>
                            <Form.Group controlId="authorName">
                                <Form.Label>Author</Form.Label>
                                <Select
                                    value={inputAuthor}
                                    onChange={(selected: AuthorsInDropDown | null) => {
                                        handleOnAuthorChanged(selected)
                                    }}
                                    allowCreateWhileLoading
                                    options={authorsOfOptionList}
                                    isClearable={true}
                                    isSearchable={false}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        borderWidth: 2,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#f5f5f5',
                                            primary: '#989898',
                                        },
                                    })}
                                    styles={{
                                        container: base => ({
                                            ...base,
                                            backgroundColor: '#989898',
                                            padding: 2,
                                        }),
                                        control: base => ({
                                            ...base,
                                            border: 0,
                                        }),
                                    }}
                                />
                            </Form.Group>
                            <Button type="submit"
                                    className='create-btn mt-3 py-1 px-4'>{props.bookToUpdate ? "Update" : "Create"}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CreateBook;