'use strict'

export const getCardsCourses = async() =>{
    //const url = 'http://Localhost:8080/v1/lion-school/cursos'
    const url = 'https://lionschool.onrender.com/v1/lion-school/cursos'

    const response = await fetch(url)
    const data = await response.json()

    return{
        ...data
    }
}