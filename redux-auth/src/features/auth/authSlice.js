import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { user:null , token:null },
    reducers:{
        setCredentials: (state,action) =>{
            const {user , accessToken} = action.payload;
             state.user = user;
             state.token = accessToken;
        },
        logout: (state, action)=>{
            state.user = null;
            state.token = null;
        }
    }
});

export const {setCredentials,logout} = authSlice.actions;

export default authSlice.reducer;

export const selectUser = state => state.auth.user;
export const selectUserToken = state => state.auth.token;