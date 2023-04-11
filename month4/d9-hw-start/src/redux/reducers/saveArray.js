import { SAVE_ARRAY, SAVE_COMPANY } from "../actions";

const initiliaState= {

    save:{
        content:[],
        company:[]
    }

}

const saveReduce= (state=initiliaState,action)=>{

        switch(action.type){

            case SAVE_ARRAY:
                return{
                    ...state,
                    save:{
                        ...state.save,
                        content:action.payload

                    }
                }

                case SAVE_COMPANY:
                    return{
                        ...state,
                        save:{
                            ...state.save,
                            company:action.payload
                        }
                    }
             

                


            default: return state;

        }

    

}

export default saveReduce