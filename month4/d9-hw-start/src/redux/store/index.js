import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavoriteReduces from "../reducers/FavoriteReduces";
import saveReduce from "../reducers/saveArray";

const combineredece= combineReducers({

    favorite:FavoriteReduces,
    save:saveReduce

})


const store = configureStore({
    reducer: combineredece
})


export default store