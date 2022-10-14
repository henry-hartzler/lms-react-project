import { COURSES } from "../../app/shared/COURSES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coursesArr: COURSES
};

const coursesSlice = createSlice({
    name: 'courses', 
    initialState
});

export const coursesReducer = coursesSlice.reducer;

export const selectAllCourses = (state) => {
    return state.courses.coursesArr;
};

export const selectCourseById = (id) => (state) => {
    return state.courses.coursesArr.find(
        (course) => course.id === parseInt(id)
        );
}
