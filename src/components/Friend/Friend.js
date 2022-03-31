import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);
    const {name,username,id} =friend

    // with these bellow code you can make dynamic url 
    const navigate = useNavigate()

    const showfriendDetails=()=>{
        const path =`/friends/`+id
        // navigate(`/friends/${id}`)
        navigate(path)
    }

    // const {}=props.
    return (
        <div>
            <h3>Name : {name}</h3>
            <Link to={`/friends/`+id}>link</Link>
           <button onClick={showfriendDetails}>{username} :{id}</button> 
            {/* <h3>City :{friend?.address?.city}</h3> */}
        </div>
    );
};

export default Friend;