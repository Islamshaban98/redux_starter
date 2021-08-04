import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configStore from "./store/configStore";
import { bugAdded, bugResolved, bugAssignedToUsers, getUnresolvedBugs, getUserById} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';


const store = configStore();
// const unsubscribe = store.subscribe(()=>console.log("hhh",store.getState()));
// store.dispatch(bugAdded({description:"add bug1 please"}));
// store.dispatch(bugAdded({description:"add bug2 please"}));
// store.dispatch(bugAdded({description:"add bug3 please"}));
// store.dispatch(bugResolved({id:2}));
// store.dispatch(projectAdded({name:"project_1"}));
// store.dispatch(userAdded({name:"user-1"}));
// store.dispatch(bugAssignedToUsers({bugId:1, userId:1}));
// store.dispatch(()=>{})
// const unResolved = getUnresolvedBugs(store.getState());
// const unResolved2 = getUnresolvedBugs(store.getState());
// console.log(unResolved===unResolved2)
// unsubscribe()
// console.log(store.getState())
// store.dispatch()
// console.log(getUserById(2)(store.getState()))
store.dispatch(() =>{
  store.dispatch({type:"bugRecieved", bug:[1,2,3]})
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
