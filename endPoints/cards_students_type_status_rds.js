'use strict'
export const getTypeStatusStudentRDS = async(typeStatus) => {
    //const url = `http://Localhost:8080/v1/lion-school/alunos/status/rds?status=${typeStatus}`
    const url = `https://lionschool.onrender.com/v1/lion-school/alunos/status/rds?status=${typeStatus}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        ...data
    }
}