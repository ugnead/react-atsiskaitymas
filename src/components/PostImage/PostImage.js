import React from 'react';
import './PostImage.css';

function PostImage(props) {
    return (     
        <div className='col-4'>
            <img 
                className='Post-img' 
                src={props.img}
                alt="mountain" 
            />
        </div>
    )
}

export default PostImage