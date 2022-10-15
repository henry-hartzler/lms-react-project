import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { coursesReducer } from '../features/courses/coursesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
  },
});
