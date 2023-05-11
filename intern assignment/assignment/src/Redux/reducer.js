import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionType';

const initialState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  prevPage: null,
  hasNextPage: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: null,
        hasNextPage: action.payload.hasNextPage,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
        hasNextPage: false,
      };
   
    default:
      return state;
  }
};

export default reducer;
