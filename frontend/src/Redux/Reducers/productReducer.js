import { SET_PRODUCTS } from "../Constants/action-types"

const initialState ={
    products: [
        {
        id: 1,
        title: "Product 1",
        category: "Category 1",
    }
],
}

export const productReducer = ( state = initialState , action) =>{
   switch(action.type){
    case SET_PRODUCTS: 
        return state;
    default : 
        return state;
   }
}