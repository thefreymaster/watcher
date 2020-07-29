import React from 'react';
import { debounce } from 'lodash';

const Container = (props) => {
    const [dimensions, setDimensions] = React.useState({ height: window.innerHeight, width: window.innerWidth })
    React.useLayoutEffect(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
    }, [])
    window.addEventListener('resize', debounce(() => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }), 1000);
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