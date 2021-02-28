import {combineReducers} from 'redux';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  login: userReducer,
});

export default rootReducer;