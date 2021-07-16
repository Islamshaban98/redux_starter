import { createStore } from "redux";
import { reducer } from "./reducer";
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(
    reducer,
    devToolsEnhancer({trace:true})
    );
console.log(store)
export default store;