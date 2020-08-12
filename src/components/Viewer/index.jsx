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
        <div style={{borderRadius: "0px 0px 8px 8px"}} className={`viewer-wrapper`} ref={ref => setWrapper(ref)}></div>
    )
}

export default Viewer;