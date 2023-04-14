import { ADD_ALBUM, ADD_QUERY, HIPHOP, POP, ROCK, SELECTED_ALBUM, SELECTED_TRACK, SET_SELECTED } from "../actions"


const initialState={

    albumList:{
        album:[],
        selected:[],
        selectedAlbum:[],
        search: "",
        rock:[],
        pop:[],
        hiphop:[],
        selectedTrack:[]
    }

}


const albumListReducer= (state=initialState,action)=>{


    switch(action.type){

        case ADD_ALBUM:

        return{
            ...state,
           albumList:{
            ...state.albumList,
            album:action.payload
           }

        }


        case ADD_QUERY:
        return{

            ...state,
            albumList:{
                ...state.albumList,
                search:action.payload
            }

        }
        case SET_SELECTED:
        return{

            ...state,
            albumList:{
                ...state.albumList,
                selected:action.payload
            }

        }
        case ROCK:
        return{

            ...state,
            albumList:{
                ...state.albumList,
                rock:action.payload
            }

        }
        case POP:
        return{

            ...state,
            albumList:{
                ...state.albumList,
                pop:action.payload
            }

        }
        case HIPHOP:
        return{

            ...state,
            albumList:{
                ...state.albumList,
                hiphop:action.payload
            }

        }


        case SELECTED_ALBUM:

        return{

            ...state,
            albumList:{
                ...state.albumList,
                selectedAlbum:action.payload
            }

        }

        case SELECTED_TRACK:

        return{

            ...state,
            albumList:{
                ...state.albumList,
                selectedTrack:action.payload
            }

        }


        

        default:
            return state

    }

}


export default albumListReducer