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

export const send = ({to, body}) => {
    return (dispatch) => {
        dispatch({type: 'SENDING'});
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        // Breaks on "require('twilio')"
        const client = require('twilio')(accountSid, authToken);

        client.messages
        .create({
            body: 'Hello, World!',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+15407551907'
        })
        .then(message => console.log(message.sid));
    }
}