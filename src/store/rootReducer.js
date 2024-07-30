'use client';
import { combineReducers } from '@reduxjs/toolkit';
import exampleSlice from '../app/properties/_redux/jobSlice';
console.log("exampleSlice", exampleSlice);

const rootReducer = combineReducers({
  example: exampleSlice.reducer, // Use exampleSlice.reducer directly
});

export default rootReducer;
