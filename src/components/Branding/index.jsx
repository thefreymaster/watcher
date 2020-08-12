import React from 'react';
import classNames from 'classnames';
import './branding.css';

const Branding = (props) => {
    const inline = {
        fontFamily: "'Sora', sans-serif",
        fontSize: 150,
        letterSpacing: -10,
    }
    return (
        <div className={classNames("text-color-animation", {"text-color-animation-fast": props.fastAnimation})} style={inline}>
            WATCHER
        </div>
    )
}

export default Branding;