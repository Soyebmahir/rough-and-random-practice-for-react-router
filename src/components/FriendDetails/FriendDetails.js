import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    let params = useParams();
    return (
        <div>
            <h1>Specific friend. {params.friendId} </h1>
        </div>
    );
};

export default FriendDetails;