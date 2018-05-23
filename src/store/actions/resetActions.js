import api from '../../utils/api';

export function checkToken(query){
	return disptach => api.checkToken(query)
		.then(response=>
			{	if(response.status === 200){
				return disptach({type:"TOKEN_AVAILABLE"})
			}
		 	
		}
		)
}

export function resetPassword(data){
	return disptach => api.resetPassword(data)
		.then(response => 
		{
			if(response.status === 200){
				return disptach({type:"RESET_SUCCESS"})
			}
		})
}

export function handleEditProfileForm(data){
	return disptach => {
		return disptach({type:"EDIT_PROFILE",profile:data})
	}
}
export function editProfile(data){
	return disptach => api.editProfile(data)
		.then(response => 
		{
			if(response.status === 200){
				return disptach({type:"EDIT_PROFILE"})
			}
		})
}