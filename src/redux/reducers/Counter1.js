import {ADD, ADD_NUMBER, SUB} from "../actions/actionsTypes";

const initialState = {
    counter: 110
};

export default function Counter1(state = initialState, action) {

    // switch (action.type) {
    //     case 'ADD':
    //         return {
    //             counter: state.counter + 1
    //         };
    //     case 'SUB':
    //         return {
    //             counter: state.counter - 1
    //         };
    //     case 'ADD_NUMBER':
    //         return {
    //             counter: state.counter + action.payload
    //         };
    //     default:
    //         return state
    //
    // }

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            };
        case SUB:
            return {
                counter: state.counter - 1
            };
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            };
        default:
            return state

    }

    // return state
}