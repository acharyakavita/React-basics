import React from 'react';
import './UserOutput.css';
const UserOutput=(props)=>{
    return(
        <div className="output">
            <p>Hi I am {props.name}</p>
            <p>I want to go to {props.place}</p>
        </div>
    )
}

export default UserOutput;