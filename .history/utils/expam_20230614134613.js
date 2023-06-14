import React, { useReducer } from 'react';

//useReducer
//1. Init state
const initialState = {
    count: 0,
};
//2. Actions
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const MyComponent = () => {
    //B3: Reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'increment' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    };

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default MyComponent;
