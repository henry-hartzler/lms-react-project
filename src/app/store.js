import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { counterReducer } from '../features/counter/counterSlice';
import { coursesReducer } from '../features/courses/coursesSlice';
import { marketplaceReducer } from '../features/marketplace/itemSlice';
import { studentsReducer } from '../features/students/studentsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
    marketplace: marketplaceReducer,
    students: studentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
