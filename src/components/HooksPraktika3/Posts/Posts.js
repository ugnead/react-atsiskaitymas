import React from "react";
import LessText from "../Post/LessText";
import './Posts.css'
import { v4 as uuidv4 } from "uuid";

function Posts() {
    let posts = [
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid, voluptatibus odio in nesciunt obcaecati dolorem fuga provident qui praesentium! Dolorem modi reprehenderit reiciendis rem commodi illum alias aliquid. Consequatur dolores reprehenderit voluptate temporibus laborum nemo deserunt nihil fuga pariatur!',
            maxLength: 35
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid, voluptatibus odio in nesciunt obcaecati dolorem fuga provident qui praesentium! Dolorem modi reprehenderit reiciendis rem commodi illum alias aliquid. Consequatur dolores reprehenderit voluptate temporibus laborum nemo deserunt nihil fuga pariatur!',
            maxLength: 35
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid, voluptatibus odio in nesciunt obcaecati dolorem fuga provident qui praesentium! Dolorem modi reprehenderit reiciendis rem commodi illum alias aliquid. Consequatur dolores reprehenderit voluptate temporibus laborum nemo deserunt nihil fuga pariatur!',
            maxLength: 35
        }
    ]

    let list = posts.map((post) => {
        return (
            <LessText 
                key={uuidv4()}
                text={post.text}
                maxLength={post.maxLength}
            />
        )
    })

    return <div className="Box">{list}</div>;
}

export default Posts;
