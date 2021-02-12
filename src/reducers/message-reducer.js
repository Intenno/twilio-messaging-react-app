const intialState = {
    recipient: '',
    message: '',
    account_sid : '',
    auth_token : ''
};

export default (state = intialState, action) => {
    switch(action.type) {
        case 'MESSAGE_INPUT_CHANGE':
            return { ...state, [action.payload.field]: action.payload.value}
        case 'SENDING':
            console.log('sending message!');
            return { ...state}
        default: 
            return state;
    }
}