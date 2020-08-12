import React from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';
import './viewer.css';

const Viewer = (props) => {
    const [wrapper, setWrapper] = React.useState();
    
    React.useLayoutEffect(() => {
        if(wrapper){
            new JSMpeg.VideoElement(wrapper, `ws://localhost:${props.port}`, [], [])
        }
    }, [wrapper]);
    return (
        <div className="viewer-wrapper" ref={ref => setWrapper(ref)}></div>
    )
}

export default Viewer;