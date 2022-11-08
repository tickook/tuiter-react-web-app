import { createSlice } from "@reduxjs/toolkit";
import tuits from './TuitsList/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       },
                                       likeTuit(state, action) {
                                           state.map(tuit => {
                                               if(tuit._id === action.tuit._id) {
                                                   if(tuit.liked === true) {
                                                       tuit.liked = false;
                                                       tuit.stats.likes--;
                                                   } else {
                                                       tuit.liked = true;
                                                       tuit.stats.likes++;
                                                   }
                                                   return tuit;
                                               } else {
                                                   return tuit;
                                               }
                                           });
                                       }
                                   }
                               });

export const {createTuit,deleteTuit,likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;