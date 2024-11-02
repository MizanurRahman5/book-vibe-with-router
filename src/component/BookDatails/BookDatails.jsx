import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoreReadList } from '../../utility/AddToDb';

const BookDatails = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
    const book = data.find(data => data.bookId === id)
    const {bookId: currentBookId, image} = book;

    const handleList = (id) =>{

        addStoreReadList(id)
    }


    return (
        <div>
            <img src={image} alt="" className='w-[200px]' />
            <div className='mt-4 flax space-x-3'>
            <button onClick={() => handleList (bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
            <button className="btn btn-outline btn-accent">add to Wislist</button>
                
            </div>
            
        </div>
    );
};

export default BookDatails;