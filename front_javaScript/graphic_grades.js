'use strict'
import {getGraphicCourses} from "../endPoints/graphic_grades.js"
const nameStudent = localStorage.getItem('$nameStudent')

const createCard = (dataStudent) =>{

    const div = document.createElement('div')
    div.classList.add('aluno-card')
    
    const containerImg = document.createElement('div')
    containerImg.classList.add('container_image')

    const foto = document.createElement('img')
    foto.classList.add('imagem-aluno')
    foto.alt = 'Imagem do aluno'
    foto.src = dataStudent.foto

    const nomeStudent = document.createElement('div')
    nomeStudent.classList.add('nome-aluno')

    const name = document.createElement('p')
    name.classList.add('aluno-nome')
    name.innerHTML = dataStudent.nome

    containerImg.append(foto)
    nomeStudent.append(name)
    div.append(containerImg, nomeStudent)

    return div

}
const loadCardStudent = async($nameStudent) =>{
    const card = await getGraphicCourses($nameStudent)
    
    const cardStudent = document.querySelector('.aluno-card')

    const cardFilled = card.aluno.map(student => createCard(student))

    cardStudent.replaceChildren(...cardFilled)
}
loadCardStudent(nameStudent)

const createGraphic = (datas) =>{
    
    const div = document.createElement('div')
    div.classList.add('graphic')

    const divTitle = document.createElement('div')
    divTitle.classList.add('grades_max')

    const divMatter = document.createElement('div')
    divMatter.classList.add('names_matter')

    const divChart = document.createElement('div')
    divChart.classList.add('chart')

    datas.disciplinas.forEach(disciplina => {
        const title = document.createElement('p')
        title.innerHTML = disciplina.carga

        
        const matter = document.createElement('p')
        matter.innerHTML = disciplina.nome

        const divCollumn = document.createElement('div')
        divCollumn.classList.add('collumn')

        const divCollumnGrade = document.createElement('div')
        divCollumnGrade.classList.add('collumn_grade')

        //Aplica uma altura para a div collumn_grade deacordo com a nota
        const collumnHeight = parseInt(disciplina.media)*3
        divCollumnGrade.style.height = `${collumnHeight}px`

        //Aplica um cor para a div deacordo com a nota
        const statusGrade = Number(disciplina.media)
        if(statusGrade >= 70){
            divCollumnGrade.style.backgroundColor = 'blue'
            matter.style.color = 'blue'
            title.style.color = 'blue'
        }else if(statusGrade>=60){
            divCollumnGrade.style.backgroundColor = 'yellow'
            matter.style.color = 'yellow'
            title.style.color = 'yellow'
        }else{
            divCollumnGrade.style.backgroundColor = 'red'
            matter.style.color = 'red'
            title.style.color = 'red'
        }

        divCollumn.append(divCollumnGrade)
        divChart.append(divCollumn)
        divTitle.append(title)
        divMatter.append(matter)
    });

    div.append(divTitle,divChart, divMatter)

    return div
}

const loadGraphicsGrades = async($nameStudent) =>{

    const graphic = await getGraphicCourses($nameStudent)

    const containerGraphic = document.querySelector('#grafico-card')

    const graphicFilled = graphic.aluno.map(datas => createGraphic(datas))

    containerGraphic.replaceChildren(...graphicFilled)

}
loadGraphicsGrades(nameStudent)