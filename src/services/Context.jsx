import React from 'react';

export const Context = React.createContext(defaultState);

const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'SET_ROOMS':
            newState.rooms = action.payload.rooms;
            newState.house = action.payload.house;
            break;
        case 'SET_ANALYTICS':
            newState.analytics = action.payload;
            break;
        default:
            throw new Error();
    }
    return newState;
}

const initialState = {
    rooms: [],
    house: {
        analytics: [],
        totalPowerOn: 0,
    }, isLoading: false
};

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    React.useLayoutEffect(() => {
        const rooms = getRooms();
        rooms.then((res) => {
            dispatch({ type: 'SET_ROOMS', payload: res.data })
            console.log(state)

        })
        props.socket.on('groups_update', (data) => {
            dispatch({ type: 'SET_ROOMS', payload: data })
        })
    }, [])

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}