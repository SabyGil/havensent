import zipcodes from 'zipcodes'

const initialState ={
	allOrganizations: [],
	requestedResources: [],
	requester_email: "",
	age: "",
	gender: "",
	ethnicity:"",
	zipcode : 11208,
	lat: 40.6762,
	lon: -73.8736,
	zipError: "",
	modalIsOpen: false,
	finish:false,
	haven: {
		title: "",
		id: ""
	}
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

		if(array.length === 3){
			return {
				...state,
				resourceMsg : true
			}
		}

		if(array.length === state.requestedResources.length){
			array = state.requestedResources.concat(action.payload)
		}
		return {
			...state,
			requestedResources: array,
			resourceMsg : false
		}
		case "ADD_ZIP":

		if(action.payload.toString().length == 5 && zipcodes.lookup(action.payload)){
			let lon = zipcodes.lookup(action.payload).longitude
			let lat = zipcodes.lookup(action.payload).latitude

			return {
				...state,
				zipcode : action.payload,
				lat: lat,
				lon: lon,
				zipError: false
			}
		}
		else{
			return {
				...state,
				zipError: true
			}
		}
		case "LATLON":
		return {
			...state,
			lat:action.payload.lat,
			lon: action.payload.lon
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
		case "ADD_RACE":
		return {
			...state,
			race : action.payload
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
		case 'THANKS':
		console.log(action)
		if(action.payload){
			return {
				...state,
				finish: action.payload
			}
		}else{
			return {
				...state,
				finish: action.payload,
				haven: {
					title: "",
					id: ""
				}
			}
		}
		case 'FINISH':
		return {
			...state,
			allOrganizations: [],
			requestedResources: [],
			requester_email: "",
			age: "",
			gender: "",
			ethnicity:"",
			zipcode : 11208,
			lat: 40.6762,
			lon: -73.8736,
			zipError: "",
			modalIsOpen: false,
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