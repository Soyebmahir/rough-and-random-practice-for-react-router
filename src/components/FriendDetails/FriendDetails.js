import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    let {friendId} = useParams();
    const [friend,setfriend] =useState({})
    useEffect( ()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data =>setfriend(data) )
    },{})
    return (
        <div>
            <h1>Specific friend. {friendId} </h1>
            <h1>Name : {friend.name}</h1>
            <h1>username : {friend.username}</h1>
            <h1>City :{ friend?.address?.city} </h1>
        </div>
    );
};

export default FriendDetails;