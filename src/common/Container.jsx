import React from 'react';

const Container = (props) => {
    const [dimensions, setDimensions] = React.useState({ height: window.innerHeight, width: window.innerWidth })
    React.useLayoutEffect(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
    }, [])
    window.addEventListener('resize', () => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
    })
    const inline = {
        display: 'flex',
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height: window.innerHeight,
        width: window.innerWidth,
        backgroundColor: props.backgroundColor,
        backgroundImage: `linear-gradient(#1A1A1A, #333333)`,
        flexWrap: 'wrap',
    }
    return <div style={inline}>{props.children}</div>
}

export default Container;