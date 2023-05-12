import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, UPDATE_CURRENT_PAGE } from './actionType';


export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const updateCurrentPage = (page) => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});
export const fetchData = (page = 1) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch(`http://localhost:3000/personData?_page=${page}&_limit=20`);
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
     
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
