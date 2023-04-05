'use strict'
export const getTypeStatusStudent = async(typeStatus) => {
    //const url = `http://Localhost:8080/v1/lion-school/alunos/status/ds?status=${typeStatus}`
    const url = `https://lionschool.onrender.com/v1/lion-school/alunos/status/ds?status=${typeStatus}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        ...data
    }
}