import {SELECTED_PRODUCTS , SET_PRODUCTS} from './Products-actionType'

export const setProducts = (products) => {
   return{
    type: SET_PRODUCTS,
    payload: products
   }
}
export const selectedProducts = (product) => {
     return{
        type: SELECTED_PRODUCTS,
        payload: product
     }
}