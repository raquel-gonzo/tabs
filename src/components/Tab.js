import React from 'react';

const Tab = (props) => {

    const tabStyle = {
        height: '50px',
        width: '100px',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column'
    }
    
    console.log('This is props: ', props);
    return (
        <div>
            {
                props.tabs.map((tab, index) => { // tab and index are parameters for the map function. 
                    return <p onClick={() => props.handleClick(index)} style={tabStyle} key={index}>{tab.label}</p> 
                })
            }
        </div>
    )
}

export default Tab;