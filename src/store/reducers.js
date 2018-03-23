import{ combineReducers } from 'redux';
import request from './reducers/requestReducer';

const reducer = combineReducers({
  	request
});

export default function (state, action){
	if( action.type ==="LOGOUT"){
    	return reducer(undefined, action);
  	}
  return reducer(state, action);
}