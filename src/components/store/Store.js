import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Library from '../library/Library';
import './Store.css';

const Store = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     fetch('././library.JSON')
    //     .then(res => res.json())
    //     .then(data => { setBooks(data); });
    // }, [])
    useEffect(() => {
    fetch('././library.JSON')
    .then(res => res.json())
      .then(data => { setBooks(data); });
  }
    ,[])
    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="book-container">
                    {
                        // books.map(book => <Library handleAddToCart={handleAddToCart} book={book} key={book.ISBN} />)
                        books.map(book => <Library key={book.ISBN} book={book} handleAddToCart={handleAddToCart} ></Library>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Store;