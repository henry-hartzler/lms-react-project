import { createSlice } from "@reduxjs/toolkit";
import { STUDENTS } from "../../app/shared/STUDENTS";

const initialState = {
    studentsArray: STUDENTS,
    value: 0
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
        },
        increment: (state) => {
            state.students.points += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const studentsReducer = studentsSlice.reducer

export const { addStudent, increment, decrement } = studentsSlice.actions

export const selectAllStudents = state => state.students.studentsArray;

export const selectStudentById = id => state => state.students.studentsArray.find(s => s.id === parseInt(id));

export const selectCountById = id => state => state.students.studentsArray.find(s => s.id === parseInt(id));