import {configureStore} from '@reduxjs/toolkit';
import 

const store = configureStore({
    reducer:{
        auth:authSlice,

        // we can add more slices for posts here
    }
});
export default store;
