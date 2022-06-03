import React from 'react';
import '../niche.css'


export default function niche(props) {
    return(
        <div className='niche'>
            <button>{props.name}</button>
        </div>
    )
}