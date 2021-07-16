import { createStore } from "redux";
import  reducer  from "./bugs";
import { devToolsEnhancer } from 'redux-devtools-extension';


export default function configStore(){
    return createStore(
        reducer,
        devToolsEnhancer({trace:true})
        );
};