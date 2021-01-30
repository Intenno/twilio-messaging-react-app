const intialState = {
    email: '',
    password: '',
    user : {},
    error: ''
};

export default (state = intialState, action) => {
    switch(action.type) {
        case 'AUTH_INPUT_CHANGE':
            // newstate = {email: 'newval', password: 'newval'}
            return { ...state, [action.payload.field]: action.payload.value}
        case 'LOGIN_SUCCESS':
            console.log('success!');
            return { ...state, user: action.payload};
        case 'LOGIN_FAILURE':
            console.log('error!');
            return { ...state, error: 'Authentication Failed'}
        default: 
            return state;
    }
}