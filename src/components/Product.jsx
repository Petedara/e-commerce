import React from 'react';
import food from './myfood.jpg'
import '../product.css'
export default function product(props){
    return(
        <nav className='product'>
            <div>
                <img src={food} alt="" width='230px' height='200px' />
                <div className='product-details'>
                    <p>my own food</p>
                    <p className='price-tag'>$70</p>
                    <div className='purchase-button'>
                        <button>Buy now</button>
                        <button>Add to cart</button>
                        <button>Chat</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}