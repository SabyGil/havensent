import axios from 'axios';
const baseURL = "https://havensentservertesting.herokuapp.com/"
var header = function(){
	return {headers: {'Authorization': "JWT " + localStorage.getItem("token")}}
}


let api = {
	getResources : function(){
		let url = baseURL + "Resource"
		return axios.get(url)
	},
	getOrgs : function(){
		let url = baseURL + "User"
		return axios.get(url)
	},
	makeRequest : function(data){
		let url = baseURL + "Request/"
		return axios.post(url, data)
	},
	register : function(data){
		let url = baseURL + "User/"
		return axios.post(url, data)
	},
	login : function(data){
		let url = baseURL + "api/login/"
		return axios.post(url, data)
	},
	getRequests : function(data){
		let url = baseURL + "Request/"
		return axios.get(url, header())
	}
}

export default api