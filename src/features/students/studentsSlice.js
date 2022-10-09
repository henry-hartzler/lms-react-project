import { STUDENTS } from "../../app/shared/STUDENTS";

export const selectAllStudents = () => STUDENTS;

export const selectStudentById = id => STUDENTS.find(s => s.id === id);