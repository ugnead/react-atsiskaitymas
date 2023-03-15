import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='row'>
            <div className='col'>
                <h1>{props.title}</h1>
                <img 
                    className='Header-img' 
                    src={props.img}
                    alt="mountain" 
                />
            </div>
        </div>
    )
}

export default Header