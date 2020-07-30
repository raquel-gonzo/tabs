import React from 'react';

const Display = (props) => {

    const displayStyle = {
        height: '350px',
        width: '600px',
        border: '2px solid black'
    }

    return(
        <div style={displayStyle}>
            {
                props.tabs.map((tab, index) => { // tab and index are parameters for the map function.
                    if (index === props.shownContent){
                        return <p key={index}>{tab.content}</p>
                    }
                    else return null;
                })
            }
        </div>
    )
}

export default Display;