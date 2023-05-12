import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionType';

const initialState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  hasNextPage: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: null,
        page: state.page + 1,
        hasNextPage: action.payload.length / 20
      }; 
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
        page: 1,
        hasNextPage: true
      };
    default:
      return state;
  }
};

export default reducer;
