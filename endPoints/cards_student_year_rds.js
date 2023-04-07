'use strict'

export const getStudentYearRds = async(year) =>{
    //const url = `http://Localhost:8080/v1/lion-school/alunos/curso/rds/ano-finalizacao?ano=${year}`
    const url = `https://lionschool.onrender.com/v1/lion-school/alunos/curso/rds/ano-finalizacao?ano=${year}`

    const response = await fetch(url)
    const data = await response.json()

    return{
        ...data
    }
}