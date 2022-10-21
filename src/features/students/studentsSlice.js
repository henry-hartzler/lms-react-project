import { createSlice } from "@reduxjs/toolkit";
import { STUDENTS } from "../../app/shared/STUDENTS";

const initialState = {
    studentsArray: STUDENTS
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            const newStudent = {
                id: state.studentsArray.length + 1,
                ...action.payload
            }
            state.studentsArray.push(newStudent)
        }
    }
})

export const studentsReducer = studentsSlice.reducer

export const { addStudent } = studentsSlice.actions

export const selectAllStudents = state => state.students.studentsArray

export const selectStudentById = id => state => state.students.studentsArray.find(s => s.id === parseInt(id))