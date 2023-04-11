import { useParams } from "react-router-dom";


export const ADD_FAVORITE="ADD_Favorite";
export const DELETTE_FAVORITE="DELETTE_FAVORITE";
export const SAVE_ARRAY="SAVE_ARRAY";
export const SAVE_COMPANY="SAVE_COMPANY";

export const addFavorite=(fav)=>({
    
        type:ADD_FAVORITE,
        payload:fav
    
})

export const deletteFav=(fav)=>({
    type:DELETTE_FAVORITE,
    payload:fav
})

export const saveArray=(job)=>({
    type:SAVE_ARRAY,
    payload:job
})

export const saveArrayCompany=(job)=>({
    type:SAVE_COMPANY,
    payload:job
})


export const setArrayFatch= (query)=>{

    return async(dispatch,getState)=>{
        
       
            let res=await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search="+query+'&limit=20');
            let data=await res.json();
            console.log(data)
            dispatch(saveArray(data.data))
            console.log("L'intero stato è: ",getState())
        }
    }

export const getJobsFetch=(params)=>{
 
    return async (dispatch,getState)=>{
        let res=await fetch('https://strive-benchmark.herokuapp.com/api/jobs?company='+params);
        let data=await res.json();
        console.log(data.data);
        dispatch(saveArrayCompany(data.data))
        console.log("L'intero stato è:", getState());
    }
}
    

