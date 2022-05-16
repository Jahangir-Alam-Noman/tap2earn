import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import './assets/css/custom.css';
import './assets/css/dashboardCustom.css';
//Local css files 
import './assets/css/dashboardMain.css';
import './assets/css/main.css';
import './assets/js/canva_JS/canvasjs.min';
import './assets/js/canva_JS/canvasjs.react';
import './assets/sass/Main.sass';
import { AuthProvider } from './context/auth';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { getToken } from './utils/auth';
import Store from "./_redux/store";



const store = Store();
toast.configure();


// axios.defaults.headers.post['Accept'] ='application/json';

// axios.defaults.baseURL = "https://tap2earn.spinnertechltd.com/api";
// REACT_APP_API_URL = http://tap2earn.spinnertechltd.com/api

axios.defaults.headers['Accept'] ='application/json';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// console.log(`access_tokenmmmmmmm`, access_token)
// headers: {"Access-Control-Allow-Origin": "*"} 


//   axios.defaults.headers.common['Authorization'] =  'Bearer' + access_token;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(config=>{
const access_token = getToken();

config.headers.Authorization = access_token ? `Bearer ${access_token}`:"";
return config;
})

ReactDOM.render(
  <AuthProvider>

  <Provider store={store}>
    <App />
  </Provider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
