import { createSlice } from "@reduxjs/toolkit"
import profileInfo from "./profile.json"
const profileSlice = createSlice({
                                     name : 'profile',
                                     initialState : profileInfo,
                                     reducers: {
                                         updateProfile(state, action) {
                                             const updatedState = {...state,...action.payload};
                                             return (updatedState);
                                         }
                                     }
                                 })
export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer