import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props
    const {name, img, price, shipping} = product;
    return (
        <div className='r-item'>
            <img src={img} alt="" />
            <div className='r-d-item'>
            <div>
            <h3 title={name}>{name.length>20? name.slice(0,20) +'...' : name}</h3>
            <p><small>Price: ${price}</small></p>
            <p><small>Shipping: ${shipping}</small></p>
            </div>
            <button onClick={()=>handleRemoveProduct(product)} className='delete-btn'><FontAwesomeIcon className='delete-btn-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>

    );
};

export default ReviewItem;