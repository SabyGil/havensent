import api from '../../utils/api';

function setCurrentUser(dispatch, response){
	console.log(response)
	if(response.status === 200){
		localStorage.setItem('token', response.data.token);
    	dispatch({type: 'LOGIN', response});
    	dispatch({type:"CLOSE_LOGIN_MODAL"})
  }
	else {
	 	dispatch({type: "AUTHENTICATION_FAIL", response})
  }
}

export function login(data){
	return disptach => api.login(data)
		.then(response=>
			setCurrentUser(disptach,response))
		.catch(response => setCurrentUser(disptach,response))
}

export function logout(){
	return disptach => {
		localStorage.clear()
		return disptach({type:"LOGOUT"})
	}
}

export function register(data){
	return disptach => api.register(data)
		.then(response=>
			disptach({type:"REGISTER_SUCCESS",response}))
}

export function getRequests(){
	return disptach => api.getRequests()
		.then(response=>
			disptach({type:"ALL_REQUESTS",response}))
		.catch(err=>console.log(err))
}

export function getProviders(){
	return disptach => api.getProviders()
		.then(response=>
			disptach({type:"ALL_PROVIDERS",response}))
		.catch(err=>console.log(err))
}

export function forgotPassword(data){
	return disptach => api.forgetPassword(data)
		.then(response => 
			disptach({type:"FORGOT_PASSWORD_SENT"}))
}

export function filterProviders(type,allProviders){
	return disptach => {
		let filteredArray = allProviders.filter(i=> i.category1 === type || i.category2 === type)
		disptach({type: "FILTER_PROVIDERS", payload: filteredArray})
	}
}

export function getProfile(){
	return disptach => api.getProfile()
		.then(response =>
			disptach({type: "PROFILE", response}))
}