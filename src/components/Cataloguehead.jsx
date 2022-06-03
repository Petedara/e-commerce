import React from 'react';
import Foodvendor from './foodvendorlogo.jpg'
import "../cataloguehead.css"

export default function catalogue(props) {
    return(
        <nav className="catalogue-head">
            <div className="catalogue-div">
                <img src={Foodvendor} alt='' />
                <div className='profile-name'>
                    <p>{props.name}</p>
                    <small>{props.niche}</small>
                </div>
            </div>
        </nav>
    )
}