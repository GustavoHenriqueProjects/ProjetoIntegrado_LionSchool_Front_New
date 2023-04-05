'use strict'
import {getGraphicCourses} from "../endPoints/graphic_grades.js"
const nameStudent = localStorage.getItem('$nameStudent')

const spreadsheetGrades = document.getElementById('spreadsheet_grades')

const studentSpreadsheet = new Chart(spreadsheetGrades, {
    type: 'line',
    
    
})