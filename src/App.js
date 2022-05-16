import axios from 'axios';
import React from 'react';
import Routers from '../src/router/Routers';
import './App.css';


function App() {

axios.defaults.headers['Accept'] ='application/json';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// axios.defaults.baseURL = "http://tap2earn.test/api"
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  
  // axios.defaults.baseURL = "https://tap2earn.spinnertechltd.com/api";
  // REACT_APP_API_URL = http://tap2earn.spinnertechltd.com/api
  // axios.defaults.headers.get['Accept'] ='application/json';
  // axios.defaults.headers['Accept'] ='application/json';
  // axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  // axios.defaults.withCredentials = true;
  // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

  return (
    <>
    <Routers/>
    </>
  );
}

export default App;
