const initialState={

meteo:{
    Location: {
            lat:"",
            lon:"",
            City:"",
            LocationTemp:[],
            Weather:"",
            FavoriteLocation:[]
            
    }


}

}


const mainReduces=(state=initialState,action)=>{

    switch(action.type){

        case 'Search_City':
            return{
                ...state,
                meteo:{
                    Location:{        
                       ...state.meteo.Location,
                        City:action.payload
                    }
                    
                }

            }

            case 'Set_Lat':
                return{
                    ...state,
                    meteo:{
                        Location:{
                            ...state.meteo.Location,
                            lat:action.payload

                        }
                    }
                }

            case 'Set_Lon':
                return{
                    ...state,
                    meteo:{
                        Location:{
                            ...state.meteo.Location,
                            lon:action.payload

                        }
                    }
                }


                case 'Set_Temp_Location':

                return{
                    ...state,
                    meteo:{
                        Location:{
                            ...state.meteo.Location,
                            LocationTemp:action.payload
                        }
                    }

                }
            
                case 'set_Weather':

                return{
                    ...state,
                    meteo:{
                        Location:{
                            ...state.meteo.Location,
                            Weather:action.payload
                        }
                    }

                }


        default:
            return state
    }

}

export default mainReduces