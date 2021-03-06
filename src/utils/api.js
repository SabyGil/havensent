import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// const baseURL = "https://havensentservertesting.herokuapp.com/"
const baseURL = "https://havensentserver.herokuapp.com/"
// const baseURL = "http://localhost:8000/"
var header = function(){
	return {headers: {'Authorization': "JWT " + localStorage.getItem("token")}}
}


let api = {
	getResources : function(){
		let url = baseURL + "Resource/"
		return axios.get(url)
	},
	getOrgs : function(){
		let url = baseURL + "User/"
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
	forgetPassword: function(data){
		let url = baseURL + "api/forgetPassword/"
		return axios.post(url, data)
	},
	checkToken: function(query){
		let url = baseURL + "api/checkToken?token=" +query
		return axios.get(url)
	},
	resetPassword: function(data){
		let url = baseURL + "api/checkToken/"
		return axios.post(url,data)
	},
	editProfile: function(data){
		let url = baseURL + "api/editprofile/"
		return axios.post(url,data, header())
	},
	getRequests : function(data){
		let url = baseURL + "Request/"
		return axios.get(url, header())
	},
	getProviders : function(data){
		let url = baseURL + "Provider/"
		return axios.get(url, header())
	},
	getProfile : function(){
		let url = baseURL + "Profile/"
		return axios.get(url, header())
	}
}

export default api
