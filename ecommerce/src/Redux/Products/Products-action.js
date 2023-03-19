import { PRODUCT_REQUEST } from "./Products-actionType"


export const productRequest = (products) =>{
   return {
    type: PRODUCT_REQUEST,

   }
}
export const productSuccess = (products) =>{
    return {
     type: PRODUCT_REQUEST,
     payload: products
    }
 }

 export const productError = (Error) =>{
    return {
     type: PRODUCT_REQUEST,
     payload: Error
    }
 }