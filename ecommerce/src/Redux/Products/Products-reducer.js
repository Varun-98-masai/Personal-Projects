import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./Products-actionType"

const initialState = {
    products :[],
    error: '',
    success: false
}

const productReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case PRODUCT_REQUEST:
            return {
                ...state,
                product: [],
                success: false,

            }
        case PRODUCT_SUCCESS:{
            return{
                ...state,
                error: '',
                success: true,
                products: payload
            }
        }  
        case PRODUCT_ERROR:{
            return {
                ...state,
                error: payload,
                success: false,
                
            }
        }  
    default: return state      
    }
} 
export default productReducer;