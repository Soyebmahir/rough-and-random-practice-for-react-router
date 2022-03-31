import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
const [friends,setFriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>Welcome To friends zone : {friends.length}</h1>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend} ></Friend>)
            }
        </div>
    );
};

export default Friends;