import React from 'react';

const Tab = (props) => {

    const tabStyle = {
        height: '50px',
        width: '100px',
        border: '2px solid black'
    }

    console.log('This is props: ', props);
    return (
        <div style={tabStyle}></div>
    )
}

export default Tab;