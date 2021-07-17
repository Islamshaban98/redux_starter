import { createAction, createReducer, createSlice} from "@reduxjs/toolkit"


// actions createor
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
// reducer (event handler)
let lastId = 0;
export default  createReducer([], {
    [bugAdded.type]:(state, action) =>{
        state.push({
            id:++lastId,
            description: action.payload.description,
            resolved:false
        });
    },
    [bugResolved.type]:(state, action) =>{
        const index = state.findIndex(state => state.id === action.payload.id);
        state[index].resolved=true
    }
});



