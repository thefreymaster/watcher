import React from 'react';
import Flex from '../../common/Flex';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { COLOR_BRIGHT, COLOR } from '../../constants';

const Blurb = () => {
    const { isDay } = React.useContext(Context);
    return (
        <Flex direction="column" style={{marginLeft: 5}}>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 800, fontSize: 12, fontFamily: "'Open Sans', sans-serif"}}>FULL STACK</div>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 800, fontSize: 12, fontFamily: "'Open Sans', sans-serif"}}>REACT &#8226; REDUX &#8226; NODE &#8226; EXPRESS</div>
            <div style={{color: isDay ? COLOR : COLOR_BRIGHT, textAlign: isMobile && 'center', fontWeight: 800, fontSize: 12, fontFamily: "'Open Sans', sans-serif"}}>INNOVATOR</div>
        </Flex>
    )
}

export default Blurb;