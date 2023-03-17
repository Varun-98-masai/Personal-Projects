import React from 'react'
import { connect } from 'react-redux'
import { buySweet } from '../redux';

const SweetsContainer = (props) => {

  return (
    <div>
      <h2> Number of Sweets : {props.numberOfSweets}</h2>
      <button onClick={props.buySweet}>Buy Sweets</button>
    </div>
  )
}
const mapToState = (state) =>{
  return {
    numberOfSweets: state.sweet.numberOfSweets
  }
}
const mapToDispatch = (dispatch) =>{
  return {
    buySweet : () =>dispatch(buySweet())
  }
}
export default connect(mapToState,mapToDispatch)(SweetsContainer);