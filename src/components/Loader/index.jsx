import React from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import './loader.css';
import Title from '../Title';
import Branding from '../Branding';

const Loader = (props) => {
    if (props.delayedHide) {
        return (
            <div style={{position: 'fixed'}} className={props.isExiting && "slide-out"}>
                <Container>
                    <Flex display="flex-row" justifyContent="center" alignItems="center">
                        <Branding fastAnimation />
                    </Flex>
                </Container>
            </div>
        )
    }
    return null;
}

export default Loader;