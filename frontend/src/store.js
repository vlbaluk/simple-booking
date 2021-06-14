import React, {createContext, useReducer} from "react";
import Reducer from './reducer'


const initialState = {
    authenticated: localStorage.getItem('token'),
    registered: false,
    role: '',
    posts: [],
    error: null,
    passwordIncorrected:false,
    registrationError: "",
    slots: [],
    bookedSlots: []

};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;