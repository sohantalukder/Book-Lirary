import React from 'react';
import './Cart.css';
// import { useAlert } from 'react-alert'


const Cart = (props) => {
    const {cart}=props;
    const { length } = cart;
    // console.log(item.author);
    console.log(cart?.title)
    let totalQuantity = 0;
    let total = 0;
    let title = [];
    for (const book of cart) {
        if (!book.quantity) {
            book.quantity = 1;
        }
        total = total + book.price.discountPrice*book.quantity;
        totalQuantity = totalQuantity + book.quantity;
        title.push(book.title);
        title.push(",");
    }
    

    return (
        <div className="cart">
            <h2>Summary </h2>
            <div className="price-details">
                <h5>Items Ordered: {length}</h5>
                <h5 >Book Name: {title}</h5>
                <h4>Total Price: {total.toFixed(2)}</h4>
                <button onClick={()=>alert('Thanks Your Ordered Confirm.')}>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;