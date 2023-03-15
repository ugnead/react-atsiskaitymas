import React from 'react'
import './PostContent.css';

function PostContent(props) {
    return (     
            <div className='col-4'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
    )
}

export default PostContent