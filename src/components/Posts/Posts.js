import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts =useLoaderData()
    console.log(posts);
    return (
        <div>
            <h1>a lot of fb post</h1>
            {
                posts.map(post=><Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;