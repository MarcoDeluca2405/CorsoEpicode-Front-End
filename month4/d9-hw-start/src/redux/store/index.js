import { configureStore } from "@reduxjs/toolkit";
import mainReduces from "../reducers";


const store = configureStore({
    reducer: mainReduces
})


export default store