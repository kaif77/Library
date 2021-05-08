import React from "react";
import {Plus} from "react-feather";



const AddBook: React.FC = () =>{
    return(
        <div className='add-book my-2'>
            <i> <Plus size='1.6em'/></i>
            <label className='mx-2'>Add Book</label>
        </div>
    )
}

export default AddBook;