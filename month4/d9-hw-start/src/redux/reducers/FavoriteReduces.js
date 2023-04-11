import { ADD_FAVORITE, DELETTE_FAVORITE } from "../actions"

const initiliaState={

    user:{

        favorite:[],

    },

}

const FavoriteReduces=  (state=initiliaState,action)=>{

    switch(action.type){

        case ADD_FAVORITE:
            return{
                ...state,     
                user:{
                        favorite:[...state.user.favorite,action.payload]
                }


            }

            case DELETTE_FAVORITE:

            return{
                ...state,
                user:{

                        favorite:[...state.user.favorite.slice(0,action.payload),...state.user.favorite.slice(action.payload+1)],
                }


            }
        

        default:
             return state

    }

}

export default FavoriteReduces