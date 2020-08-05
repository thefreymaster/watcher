import React from 'react';

const dayStyle = {
    color: "#1a1a1a"
}

const defaultState = {
    sideMenuIsOpen: false,
    isDay: false,
    style: {}
}

export const Context = React.createContext(defaultState);

const reducer = (state, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'SET_SIDE_MENU_OPEN':
            newState.sideMenuIsOpen = true;
            break;
        case 'SET_SIDE_MENU_CLOSED':
            newState.sideMenuIsOpen = false;
            break;
        case 'SET_IS_DAY':
            newState.isDay = true;
            break;
        case 'SET_IS_NIGHT':
            newState.isDay = false;
            break;
        default:
            throw new Error();
    }
    return newState;
}

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);
    console.log(state)
    React.useLayoutEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour <= 17) {
            dispatch({ type: 'SET_IS_DAY' })
        }
    }, [])

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}