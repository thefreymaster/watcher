import React from 'react';
import Flex from './Flex';
import { Context } from './../Context';
import Pulse from './Pulse';

export const Container = (props) => {
    const { isDay } = React.useContext(Context);
    return (
        <Flex borderRadius="8px" boxShadow backgroundColor={isDay ? "white" : "#000000a1"} margin="10px" width="100%" direction="column">
            {props.children}
        </Flex>
    )
}

export const Title = (props) => {
    const { isDay } = React.useContext(Context);

    return (
        <Flex height="35px" padding="10px"
            alignItems="center"
            style={{
                color: isDay ? "#00000045" : "#fff",
                fontWeight: 600,
                fontFamily: 'Open Sans',
            }}>
            <Flex>{props.children}</Flex>
            <Flex />
            <Flex flexGrow="none">
                <Pulse outage />
            </Flex>
        </Flex>
    )
}

export const Body = (props) => (
    <Flex width="100%" height="100%" borderRadius="0px 0px 8px 8px">{props.children}</Flex>
)
