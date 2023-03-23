import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const post =useLoaderData()
    console.log(post);
    return (
        <div>
            <h1>A lot of b post </h1>
        </div>
    );
};

export default Post;