import { configureStore } from "@reduxjs/toolkit";
import  reducer  from "./reducer";
import Logger from "./middleware/logger";
import func from "./middleware/func";
export default function configStore(){
    return configureStore({
        reducer,
        middleware:[Logger({distination: "console"}), func]
    });
};