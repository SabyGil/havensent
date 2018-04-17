const initialState ={
	isLoggedIn: false,
	signUpSuccess: false,
	loginModalIsOpen:false,
	loginFailed: false
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