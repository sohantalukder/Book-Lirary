import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Library from '../library/Library';
import './Store.css';

const Store = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./library.JSON')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            });
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="book-container">
                    {
                        books.map((book) => <Library handleAddToCart={handleAddToCart} book={book} title={book.title} image={book.image} stocks={book.stocks} author={book.author} publishedDate={book.publishedDate} discountPrice={book.price.discountPrice} oldPrice={book.price.oldPrice} key={book.ISBN}/>)
                    }
                </div>
                <div className="cart-container">
                    <Cart key={books.ISBN} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Store;