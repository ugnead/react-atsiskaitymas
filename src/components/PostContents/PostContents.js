import React from 'react';
import PostContent from '../PostContent/PostContent';
import { v4 as uuidv4 } from 'uuid';

function PostContents() {
    let posts = [
        {
            title: "antraste 1",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum 1"
        },
        {
            title: "antraste 2",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum 2"
        },
        {
            title: "antraste 3",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum 3"
        },
        {
            title: "antraste 4",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum 4"
        }
    ];

    let list = posts.map((post) => {
        return (
            <PostContent 
                key={uuidv4()}
                title={post.title} 
                content={post.content} 
            />
        );
    });

    return (    
        <div className='row justify-content-center'>
            {list}
        </div>
    )
}

export default PostContents