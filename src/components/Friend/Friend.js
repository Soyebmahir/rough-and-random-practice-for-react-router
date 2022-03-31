import React from 'react';

const Friend = ({friend}) => {
    console.log(friend);
    const {name,username,id} =friend

    // const {}=props.
    return (
        <div>
            <h3>Name : {name}</h3>
           <button>{username} :{id}</button> 
            {/* <h3>City :{friend?.address?.city}</h3> */}
        </div>
    );
};

export default Friend;