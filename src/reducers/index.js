import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import MessageReducer from './message-reducer';

export default combineReducers({
    auth: AuthenticationReducer,
    message: MessageReducer
})