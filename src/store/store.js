import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice'

const store = configureStore({
    reducer:{
        auth:authSlice,

        // we can add more slices for posts here
    }
});
export default store;
