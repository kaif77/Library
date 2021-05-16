import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import {  IBooks } from "../types/LibraryTypes";

type popup = {
    modelHeader: string;
    bookName: string;
    newBookCreatedUpdatedDeleting: IBooks | null;
    deletingBookIndex: number | null;
    deleteBook: (index: number | null) => void;
    handleOnClickOk: () => void;
}
const PopUp: React.FC<popup> = (props) => {
    return (
        <div className="popup">
            <div className='popup-inner'>
                <Row className='my-2'> {props.newBookCreatedUpdatedDeleting ? props.modelHeader : ''}
                    {props.newBookCreatedUpdatedDeleting ? props.bookName : ''}
                </Row>
                <Row>
                    <Col>{props.deletingBookIndex != null ?
                        <Button onClick={() => props.deleteBook(props.deletingBookIndex)}> confirm </Button> : ''}
                    </Col>
                    <Col> {props.newBookCreatedUpdatedDeleting ? <Button
                        onClick={props.handleOnClickOk}> {props.deletingBookIndex != null ? 'No' : 'Ok!'}</Button> : ''}
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default PopUp;