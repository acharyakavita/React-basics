import React from 'react';

const Validation = (props) => {
    if (props.length < 5) {
        return (<div><p>{props.length} : Text too short</p></div>)
    }
    else {
        return (<div><p>{props.length} :Text long enough</p></div>)
    }
}

export default Validation;