import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id,title, body}= post;
    const navigate =useNavigate();
    const handleNavigate =() =>{
            navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p>{body}</p>
           <Link to={`/post/${id}`}>
            <button>Show Details</button>
           </Link>
           <button onClick={handleNavigate}>show Details 2 </button>
        </div>
    );
};

export default Post;