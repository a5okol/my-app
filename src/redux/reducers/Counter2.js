const initialState = {
    counter2: 2000
};

export default function Counter2(state = initialState, action) {

    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            };
        case 'SUB':
            return {
                counter: state.counter - 1
            };
        case 'ADD_NUMBER':
            return {
                counter: state.counter + action.payload
            };
        case 'ADD2':
            return {
                counter2: state.counter2 + action.payload
            };
        default:
            return state

    }

    // return state
}