import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthors} from "../../types/LibraryTypes";
import {useToasts} from "react-toast-notifications";

type createAuthorProps = {
    onFormClose: () => void;
    onAuthorAdded: (author: IAuthors) => void;
    authorToUpdate: IAuthors | null
    onAuthorUpdated: (updatedAuthor: IAuthors) => void;
}

const CreateAuthor: React.FC<createAuthorProps> = (props) => {
    const {authorToUpdate} = props
    const [authorName, setAuthorName] = useState<string | null>(null)
    const {addToast} = useToasts();
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (!authorToUpdate) {
            setAuthorName('');
            return;
        }
        setAuthorName(authorToUpdate.name);
    }, [authorToUpdate])


    const handleOnAuthorNameChanged = (name: string) => {
        setAuthorName(name);
    }

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (!authorName || authorName === '') {
            return;
        }

        if (authorToUpdate) {
            const updatedAuthor: IAuthors = {...authorToUpdate, name: authorName}
            props.onAuthorUpdated(updatedAuthor);
            setAuthorName('');
            addToast("Author Updated", {appearance: 'success', autoDismiss: true});
            return;
        }

        const newAuthor: IAuthors = {name: authorName};
        props.onAuthorAdded(newAuthor)
        addToast("New Author Created", {appearance: 'success', autoDismiss: true});
        setAuthorName('');
    }

    return (
        <Row className='create-author mx-3 my-5'>
            <Col xs={12} md={11} lg={10}>
                <Row>
                    <Col xs={10}>
                        <h3>{authorToUpdate ? 'Update' : 'Create'} Author</h3>
                    </Col>
                    <Col xs={2} className='formCloseButton'>
                        <i><XCircle onClick={props.onFormClose}/></i>
                    </Col>
                </Row>

                <Row>
                    <Col className='my-3'>
                        <Form className='formInputs'  noValidate validated={validated} onSubmit={handleOnSubmit}>
                            <Form.Group controlId="authorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="text" placeholder=""
                                              required
                                              value={authorName ? authorName : ''}
                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                  handleOnAuthorNameChanged(event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Author Name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button className='create-btn mt-4 py-1 px-4' type='submit'>
                                {authorToUpdate ? 'Update' : 'Create'}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CreateAuthor;