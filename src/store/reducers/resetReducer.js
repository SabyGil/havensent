const initialState ={
	available: false,
	passmatch: true
}
export default function (state=initialState, action){
	switch(action.type){
		case 'TOKEN_AVAILABLE':
		return {
			...state,
			available: true
		}
		case "PASSWORD_SET":
		return {
			...state,
			[action.payload.name]: action.payload.value
		}	
		case "PASSWORD_DONT_MATCH":
		return {
			...state,
			passmatch: false
		}
		case "RESET_SUCCESS":
		return {
			...state,
			resetSucess:true,
			passmatch: true
		}
		default:
		return state;
	}
}