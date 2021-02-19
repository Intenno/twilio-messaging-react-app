const intialState = {
    to : '',
    body : ''
};

export default (state = intialState, action) => {
    switch(action.type) {
        case 'MESSAGE_INPUT_CHANGE':
            console.log("hi");
            return { ...state, [action.payload.field]: action.payload.value}
        case 'SENDING':
            console.log('sending message!');
            return { ...state}
        default: 
            return state;
    }
}