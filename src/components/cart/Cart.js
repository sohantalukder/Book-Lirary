import React from 'react';
import './Cart.css';
// import { useAlert } from 'react-alert'


const Cart = (props) => {
    // const { title } = props.cart;
    // console.log(props.cart);
    // console.log(props.cart.cart);
    console.log(props.cart.title);
    

    return (
        <div className="cart">
            <h2>Summary</h2>
            <div className="price-details">
                <h5>Items Ordered: </h5>
                <h5 >Book Name:</h5>
                <h4>Total Price:</h4>
                <button onClick={()=>alert('Thanks Your Ordered Confirm.')}>Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;