import{ combineReducers } from 'redux';
import request from './reducers/requestReducer';
import user from './reducers/userReducer';
import reset from "./reducers/resetReducer"

const reducer = combineReducers({
	reset,
  	request,
  	user
});

export default function (state, action){
	if( action.type ==="LOGOUT"){
    	return reducer(undefined, action);
  	}
  return reducer(state, action);
}