import  {createReducer} from "@reduxjs/toolkit"
// import { RootState } from "../Store/store"

export const routeReducer=createReducer({isAuthenticated:false},
    {
    login:(state)=>{
        state.isAuthenticated=true
    },
    logout:(state)=>{
        state.isAuthenticated=false
    }
})