import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./store/store"
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

let token = localStorage.getItem("token")

if(token){
  store.dispatch({type:"LOGIN"})
}

ReactDOM.render(
	<Provider store={store}>
	   <App />
	</Provider>, document.getElementById('root')
);
registerServiceWorker();
