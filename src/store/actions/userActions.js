import api from '../../utils/api';

function setCurrentUser(dispatch, response){
	if(response.status == 200){
		localStorage.setItem('token', response.data.token);
    	dispatch({type: 'LOGIN', response});
  }
	else {
	 	dispatch({type: "AUTHENTICATION_FAIL", response})
  }
}

export function login(data){
	return disptach => api.login(data)
		.then(response=>
			setCurrentUser(disptach,response))
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