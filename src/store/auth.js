import { configureStore } from '@reduxjs/toolkit';

const authSlice = configureStore ({
    name:"auth",
    initialState: {isLoggedIn: false ,role:"user"},
    reducer:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false ;
        },
        changeRole(state, action){
            const role =action.payload;
            state.role = role;
        },
    },
});
export const authActions = authSlice.action;
export default authSlice.reducer;