import { configureStore } from "@reduxjs/toolkit";
import albumListReducer from "../reduces/albumlist";



const store= configureStore({

    reducer:albumListReducer

})


export default store