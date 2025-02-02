import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id,name, email, username} =friend;
    return (
        <div className='friend'>
           <h1>Name :{name}</h1>
           <p>email:{email}</p>
           <p><small>Username: <Link to={`/friend/${id}`}>{username}</Link> </small></p>
        </div>
    );
};

export default Friend;