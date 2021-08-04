import { createSelector, createSlice} from "@reduxjs/toolkit"


// // actions createor
// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");
// // reducer (event handler)
// let lastId = 0;
// export default  createReducer([], {
//     [bugAdded.type]:(state, action) =>{
//         state.push({
//             id:++lastId,
//             description: action.payload.description,
//             resolved:false
//         });
//     },
//     [bugResolved.type]:(state, action) =>{
//         const index = state.findIndex(state => state.id === action.payload.id);
//         state[index].resolved=true
//     }
// });

let lastId = 0;
const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        bugAdded:(state, action) =>{
            state.push({
                id:++lastId,
                description: action.payload.description,
                resolved:false
            });
        },
        bugResolved:(state, action) =>{
            const index = state.findIndex(state => state.id === action.payload.id);
            state[index].resolved=true
        },
        bugAssignedToUsers:(state, action) =>{
            const {bugId, userId} = action.payload;
            const index = state.findIndex(state =>state.id === bugId);
            state[index].userId = userId;
        }
    }}
    )
export const  {bugAdded, bugResolved, bugAssignedToUsers} = slice.actions;
export default slice.reducer;
//selector
// export function getUnresolvedBugs(state){
// return state.entities.bugs.filter(bug => !bug.resolved)
// }
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)
export const getUserById = userId =>createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)
