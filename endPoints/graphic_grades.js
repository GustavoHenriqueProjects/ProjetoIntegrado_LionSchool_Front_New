'use strict'

export const getGraphicCourses = async(name) =>{
    //const url = 'http://Localhost:8080/v1/lion-school/aluno/notas?nome='
    const url = `https://lionschool.onrender.com/v1/lion-school/aluno/notas?nome=${name}`

    const response = await fetch(url)
    const data = await response.json()

    return{
        ...data
    }
}