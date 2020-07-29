import React from 'react';

const Display = (props) => {

    const displayStyle = {
        height: '350px',
        width: '600px',
        border: '2px solid black'
    }

    return(
        <div style={displayStyle}>
            <p>{props.content}</p>
        </div>
    )
}

export default Display;