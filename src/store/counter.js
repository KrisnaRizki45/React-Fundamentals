const DEFAULT_STATE = {
    count: 0,
}

export const counterReducer = (state = DEFAULT_STATE, action) => {
    if(action.type === "INCREMENT"){
        // return {...state, count: state.count + 1};
        const duplicateState = {
            ...state,
        };

        duplicateState.count = state.count + 1;

        return duplicateState;

    } else if(action.type === "DECREMENT") {

        return {...state, count: state.count - 1};

    } else if(action.type === "SET") {
        const duplicateState = {
            ...state,
        };

        duplicateState.count = action.payLoad;

        return duplicateState;

    } else {
        return state;
    }
}