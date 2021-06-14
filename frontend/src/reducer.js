const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'SET_AUTHENTICATED':
            localStorage.setItem('token', action.payload )
            return {
                ...state,
                authenticated: action.payload
            };
        case 'LOG_OUT':
            localStorage.removeItem('token')
            return {
                ...state,
                authenticated: false,
                registered: false
            };
        case 'SET_REGISTERED':
            return {
                ...state,
                registered: action.payload
            };
        case 'SET_PASSWORD_INCORRECT':
            return {
                ...state,
                passwordIncorrected: action.payload
            };

        case 'SET_REGISTRATION_ERROR':
            return {
                ...state,
                registrationError: action.payload
            };
        case 'SET_SLOTS':
            return {
                ...state,
                slots:   action.payload
            };

        case 'ADD_SLOTS':
            return {
                ...state,
                slots:  [...state.slots, action.payload]
            };

        case 'SET_BOOKED_SLOTS':
            return {
                ...state,
                bookedSlots:   action.payload
            };

        case 'ADD_BOOKED_SLOTS':
            return {
                ...state,
                bookedSlots:  [...state.bookedSlots, action.payload]
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;