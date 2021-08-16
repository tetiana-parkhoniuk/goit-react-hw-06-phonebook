import { createStore } from "redux";

const reducer = (state = {}, action) => {
    console.log('action in reducer', action);

    return state;
};

const store = createStore(reducer);

export default store;



