const initialState ={
	allOrganizations: [],
	requestedResources: [],
	requester_email: "",
	modalIsOpen: false
}
export default function (state=initialState, action){
	switch(action.type){
		case 'GET_RESOURCES':
		return {
			...state,
			resources: action.response.data
		}
		case 'GET_ORGANIZATION':
		return {
			...state,
			allOrganizations: action.response.data

		}
		case 'PICK_HAVEN':
		return {
			...state,
			haven: action.payload
			
		}
		case 'ADD_TO_REQUEST':
		console.log(action.payload)
		let array = state.requestedResources.filter(i=> i.title !== action.payload.title)
		if(array.length === state.requestedResources.length){
			array = state.requestedResources.concat(action.payload)
		}
		return {
			...state,
			requestedResources: array
		}
		case "ADD_GENDER":
		return {
			...state,
			gender : action.payload
		}
		case "ADD_ETHNICITY":
		return {
			...state,
			ethnicity : action.payload
		}
		case "ADD_AGE":
		return {
			...state,
			age : action.payload
		}
		case "ADD_EMAIL":
		return {
			...state,
			email : action.payload
		}
		case 'FINISH':
		return {
			...state,
			requestedResources : [],
			email: "",
			age: "",
			gender: "",
			ethnicity: "",
			modalIsOpen:false
		}
		case 'OPEN_MODAL':
		return {
			...state,
			modalIsOpen:true
		}
		case 'CLOSE_MODAL':
		return {
			...state,
			modalIsOpen:false
		}
		default:
		return state;
	}
}