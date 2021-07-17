import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configStore from "./store/configStore";
import { bugAdded, bugResolved } from './store/bugs';

const store = configStore();
const unsubscribe = store.subscribe(()=>console.log("hhh",store.getState()));
store.dispatch(bugAdded({description:"add bug1 please"}));
store.dispatch(bugAdded({description:"add bug2 please"}));
store.dispatch(bugAdded({description:"add bug3 please"}));
store.dispatch(bugResolved({id:2}));

unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
