'use strict'

import { getStudents } from "../endPoints/cards_students_status_ds.js"
import { getTypeStatusStudent } from "../endPoints/cards_students_type_status_ds.js"
import { getTypeStatusStudentRDS } from "../endPoints/cards_students_type_status_rds.js"

//Responsavel por criar os cards dos estudantes que finalizaram ou estao cursando
const typeStatusStudents = async ($statusStudent) =>{
    if(typeCourse == "DS"){
        const statusStudent = await getTypeStatusStudent($statusStudent)
        const cards = document.querySelector('.cards')
    
        //$date é um parametro do meu map que percorre o meu Json e passa as informações do listCards para a função createCards
        const listCards = statusStudent.alunos.map($date => createCards($date, $statusStudent))
    
        cards.replaceChildren(...listCards)
    }else if(typeCourse == "RDS"){
        const statusStudent = await getTypeStatusStudentRDS($statusStudent)
        const cards = document.querySelector('.cards')
    
        //$date é um parametro do meu map que percorre o meu Json e passa as informações do listCards para a função createCards
        const listCards = statusStudent.alunos.map($date => createCards($date, $statusStudent))
    
        cards.replaceChildren(...listCards)
    }
    
}
const option = document.querySelector('#options')
option.addEventListener('change', function () {
    if(option.value == 'status'){
        loadCardsStudents(typeCourse)
    }else if(option.value == 'finalizado' || option.value == 'cursando'){
        typeStatusStudents(option.value)
    }
})

const createCards = ($date, $statusStudent) => {
    const div = document.createElement('div')
    if($statusStudent == 'finalizado'){
        div.classList.add('card_yellow')
        div.classList.remove('card')
    }else if($statusStudent == 'cursando'){
        div.classList.add('card_blue')
        div.classList.remove('card')
    }else{
        div.classList.add('card')
    }

    const aluno_image = document.createElement('div')
    aluno_image.classList.add('aluno-imagem')

    const img = document.createElement('img')
    img.classList = 'img_student'
    img.alt ='Foto do aluno'
    img.src = $date.foto

    const aluno_nome = document.createElement('div')
    aluno_nome.classList.add('aluno-nome')

    const nome = document.createElement('span')
    nome.classList.add('name')
    nome.innerHTML = $date.nome.toUpperCase()

    aluno_image.append(img)
    aluno_nome.append(nome)
    div.append(aluno_image, aluno_nome)

    return div

}

const loadCardsStudents = async ($typeCourse) => {
    const infStudents = await getStudents($typeCourse)

    const cards = document.querySelector('.cards')

    const listCards = infStudents.alunos.map($date => createCards($date))

    cards.replaceChildren(...listCards)
}

//Recebe o valor do button selecionado DS ou RDS do index.html, e pode ser usado em outros indexs
const typeCourse = localStorage.getItem('course')
const titleCourse = document.querySelector('.titulo')
if(typeCourse == 'DS'){
    titleCourse.innerHTML = 'Desenvolvimento de Sistemas'
}else if(typeCourse == 'RDS'){
    titleCourse.innerHTML = 'Desenvolvimento de Redes'
}
loadCardsStudents(typeCourse)

