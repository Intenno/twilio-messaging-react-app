import firebase from 'firebase';

export const authInputChange = ({field, value}) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: {field, value} //field: 'email', 'text': blah@blah.com
    };
}

export const messageInputChange = ({field, value}) => {
    return {
        type: 'MESSAGE_INPUT_CHANGE',
        payload: {field, value}
    }
}

export const login = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'LOGIN_SUCCESS', payload: user})
            })
            .catch(function(error) {
                dispatch({type: 'LOGIN_FAILURE'});
            });
    }
}

export const send = ({recipient, message}) => {
    return (dispatch) => {
        dispatch({type: 'SENDING'});
        // TODO: Twilio stuff here
    }
}