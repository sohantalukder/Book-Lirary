import React from 'react';
import './Library.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Library(props) {
    const { title,author,price,image,stocks,publishedDate } = props.book;
    // console.log(id);
    return (
        <div className="book-self">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="book-details">
                <h3>{title}</h3>
                <p>By: {author}</p>
                <p><strong>Published Date: </strong> {publishedDate}</p>
                <p>Only {stocks} left in stock - <span className="order">order soon</span></p>
                <p className="price"><span className="discount-price">$ {price.discountPrice}  </span> <del className="oldPrice">  $ {price.oldPrice}</del></p>
                <button onClick={()=>props.handleAddToCart(props.book)} className="add-cart"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    )
}

export default Library
