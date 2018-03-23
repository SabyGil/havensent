const initialState ={
	requestedResources: []
}
export default function (state=initialState, action){
	switch(action.type){
		case 'GET_RESOURCES':
		return {
			...state,
			resources: action.response.data
		}
		case 'PICK_HAVEN':
		return {
			...state,
			haven: action.payload
			
		}
		case 'ADD_TO_REQUEST':
		console.log(action.payload)
		return {
			...state,
			requestedResources: state.requestedResources.concat(action.payload)

		}
		case 'GET_ORGANIZATION':
		return {
			...state,
			allOrganizations: action.response.data

		}

		case 'REMOVE_FROM_REQUEST':
		return {

		}

		default:
		return state;
	}
}