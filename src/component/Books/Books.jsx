import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('./booksData.json')
            const data =await res.json()
            setBooks(data)
        }
        loadData()
    }, [])
    console.log(books)
    return (
        <div>
            <h1 className='text-center text-2xl'>Books</h1>
            <p>{books.length}</p>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;