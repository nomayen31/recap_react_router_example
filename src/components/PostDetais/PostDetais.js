import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetais = () => {
    const post =useLoaderData()
    const {id, title, body,userId} =post;
    const navigate =useNavigate()
    const handleNavigate =()=>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Details about post: {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleNavigate}>Het the author</button>
        </div>
    );
};

export default PostDetais;