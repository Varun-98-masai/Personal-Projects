import { BUY_SWEETS } from "./sweetType"

const initialState = {
    numberOfSweets : 30
}

const sweetReducer = (state = initialState , action) =>{
      switch(action.type) {
        case BUY_SWEETS : 
        return {
            ...state,
            numberOfSweets : state.numberOfSweets - 1
        }
        default: return state
      }
}

export default sweetReducer;