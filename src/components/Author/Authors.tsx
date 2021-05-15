import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {Col} from "react-bootstrap";
import {IAuthors} from "../../types/LibraryTypes";

type AuthorsProps = {
    authors: IAuthors[]
    onAuthorDeleted: (authorIndex:number) => void
    onUpdateRequest: (authorIndex:number) => void
    onClickAddAuthor: () => void
    onAuthorUpdated: (updatedAuthor: IAuthors) => void;
    authorToUpdate:IAuthors | null
    formVisible:boolean
    onAuthorAdded: (author:IAuthors) => void;
    onFormClose:() => void;
}

const Authors : React.FC<AuthorsProps> = (props) => {
    return (
        <Col xs={12} md={6} className='author'>
            <AuthorTitle />
            <AuthorList authors={props.authors}
                        onAuthorDeleted={props.onAuthorDeleted}
                        onUpdateRequest={props.onUpdateRequest}
            />
            <AddAuthor addClick={props.onClickAddAuthor}/>
            {props.formVisible && <CreateAuthor onFormClose={props.onFormClose}
                                                onAuthorAdded={props.onAuthorAdded}
                                                authorToUpdate={props.authorToUpdate}
                                                onAuthorUpdated={props.onAuthorUpdated}
            />}
        </Col>
    )
}

export default Authors
