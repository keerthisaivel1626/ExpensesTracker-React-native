import {configureStore}from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
        expenses:''
    }
});
export default store;