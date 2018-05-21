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