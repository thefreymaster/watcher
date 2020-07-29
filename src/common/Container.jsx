import React from 'react';

const Container = (props) => {
    const inline = {
        display: 'flex',
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height: window.innerHeight,
        width: window.innerWidth,
        backgroundColor: props.backgroundColor,
        backgroundImage: `linear-gradient(#4192FF, #8CBCFD)`,
        flexWrap: 'wrap',
    }
    return <div style={inline}>{props.children}</div>
}

export default Container;