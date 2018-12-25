import React from 'react';


const UserInput=(props)=>{
    const Style={
        backgroundColor:'grey',
        border:'1px solid blue'
      };
    return(
        <div>
            <input style={Style} onChange={props.change} value={props.place} type="text"/>
        </div>
    )
}

export default UserInput;