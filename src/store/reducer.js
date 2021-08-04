import { combineReducers } from "redux";
import entitesReducers from "./entities";

export default combineReducers({
    entities: entitesReducers
})