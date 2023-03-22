import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    console.log(friend);
    return (
        <div>
            <h1>Friends about : {friend.name} </h1>
            <p>call he/ her{friend.phone}</p>
            <h2>everything you need to know this person</h2>
        </div>
    );
};

export default FriendDetails;