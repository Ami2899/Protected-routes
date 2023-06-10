import { configureStore } from "@reduxjs/toolkit";
import { routeReducer } from "../Reducer/routeReducer";

export const store=configureStore({
    reducer:{
        route:routeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch