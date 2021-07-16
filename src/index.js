import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
// import * as actions from "./actionTypes"
import { bugAdded, bugResolved } from './actions';

const unsubscribe = store.subscribe(()=>console.log("hhh",store.getState()));
store.dispatch(bugAdded("add bug1 please"));
store.dispatch(bugAdded("add bug2 please"));
store.dispatch(bugAdded("add bug3 please"));
store.dispatch(bugResolved(2));
// store.dispatch({
//   type:actions.BUG_ADDED,
//   payload:{
//     description:" add bug2 please"
//   }
// })
unsubscribe()
// store.dispatch({
//   type:actions.BUG_REMOVED,
//   payload:{
//     id:1
//   }
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
