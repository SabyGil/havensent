const initialState ={
	isLoggedIn: false,
	signUpSuccess: false,
	loginModalIsOpen:false,
	loginFailed: false,
	filters: {age: "",gender:"",ethnicity:""},
	allRequests: []
}
export default function (state=initialState, action){
	switch(action.type){
		case 'LOGIN':
		console.log(action.response)
		return {
			...state,
			isLoggedIn: true
		}
		case 'REGISTER':
		return {
			...state,
			signUpSuccess: true

		}
		case "AUTHENTICATION_FAIL":
		return {
			...state,
			loginFailed: true
		}
		case 'ALL_REQUESTS':
		return {
			...state,
			allRequests: action.response.data

		}
		case 'SELECT_FILTER':

		let filter = state.filters
		if(action.payload.type == "age"){
			if (filter.age == action.payload.data){
				filter.age = ""
			}else{
				filter.age = action.payload.data
			}
		}
		else if (action.payload.type=="ethnicity"){
			if (filter.ethnicity == action.payload.data){
				filter.ethnicity = ""
			}else{
				filter.ethnicity = action.payload.data
			}
		}
		else if (action.payload.type == "gender"){
			if (filter.gender == action.payload.data){
				filter.gender = ""
			}else{
				filter.gender = action.payload.data
			}
		}

		return {
			...state,
			filters: filter

		}
		case "OPEN_LOGIN_MODAL":
		return{
			...state,
			loginModalIsOpen:true
		}
		case "CLOSE_LOGIN_MODAL":
		return{
			...state,
			loginModalIsOpen:false
		}
		default:
		return state;
	}
}