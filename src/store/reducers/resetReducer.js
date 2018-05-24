const initialState ={
	available: false,
	passmatch: true,
	edited: {
		phone_number : "",
		address : "",
		operating_budget : "",
		formation_type: "",
		full_time_staff : "",
		part_time_staff : ""
	}
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
		case "EDIT_PROFILE":
		console.log(action.payload)
		state.edited[action.payload.name] = action.payload.value
		return state
		
		default:
		return state;
	}
}