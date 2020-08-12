import React from 'react';
import { Context } from '../../Context';
import { COLOR, COLOR_BRIGHT } from '../../constants';

const Title = () => {
    const { brand, isDay } = React.useContext(Context);

    return (
        <div style={{ fontFamily: "'Sora', sans-serif", color: isDay ? COLOR : COLOR_BRIGHT, width: '100%', textAlign: 'center' }}>Watcher</div>
    )
};

export default Title;