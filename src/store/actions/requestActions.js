import api from '../../utils/api';

export function getResources(){
	return disptach => api.getResources()
		.then(response=>
			disptach({type:"GET_RESOURCES",response}))
}

export function getOrgs(){
	return disptach => api.getOrgs()
		.then(response=>
			disptach({type:"GET_ORGANIZATION",response}))
}

export function closeModal(){
	return disptach => disptach({type:"CLOSE_MODAL"})
}