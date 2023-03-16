const redux = require('redux')
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducres = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const ICE_CREAM = 'ICE_CREAM';

function buyCake(){
   return {
    type: BUY_CAKE,
    info:"First Redux Action"
  }
}
function buyIceCream(){
    return {
     type: ICE_CREAM,
   }
 }

// (PreviousState , action) => newState;

// const initialState = {
//    numOfCake: 10,
//    numOfIceCream: 20,
// }
const initialCakeState = {
    numOfCake: 10,
}
const initialIceCreamState = {
    numOfIceCream: 20,
}

// const reducer = (state = initialState , action) =>{
//     switch(action.type){
//         case BUY_CAKE : 
//         return{
//             ...state,
//             numOfCake: state.numOfCake -1
//         }
//         case ICE_CREAM : 
//         return{
//             ...state,
//             numOfIceCream: state.numOfIceCream -1
//         }
//         default : return state
//     }
// }
const cakeReducer = (state = initialCakeState , action) =>{
    switch(action.type){
        case BUY_CAKE : 
        return{
            ...state,
            numOfCake: state.numOfCake -1
        }
    
        default : return state
    }
}
const iceCreamReducer = (state = initialIceCreamState , action) =>{
    switch(action.type){
        case ICE_CREAM : 
        return{
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }
    
        default : return state
    }
}

const rootReducers = combineReducres({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})
const store = createStore(rootReducers , applyMiddleware(logger))
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();