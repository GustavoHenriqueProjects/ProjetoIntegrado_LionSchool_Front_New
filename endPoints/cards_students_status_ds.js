'use strict'
export const getStudents = async($course) => {
    const url = `http://Localhost:8080/v1/lion-school/alunos/curso?curso=${$course}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        ...data
    }
}