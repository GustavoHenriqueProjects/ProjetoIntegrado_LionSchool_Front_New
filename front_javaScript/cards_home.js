'use strict'

import { getCardsCourses } from "../endPoints/cards_courses_home.js"

const newSection = async (click) => {
    window.open('status_alunos.html')
    //LocalStorage armagena os dados do click na variavel course para que possa ser usado na nova pagina
    localStorage.setItem('course', click)
}

const createButtons = ($buttons) => {

    const div = document.createElement('div')
    div.classList.add('button')

    const img = document.createElement('img')
    img.classList.add('imgCourses')
    img.alt = 'Foto do curso'
    img.src = $buttons.icone

    const title = document.createElement('h1')
    title.classList.add('title_card')
    title.textContent = $buttons.sigla

    div.append(img, title)

    div.addEventListener('click', function () {
        let click = div.textContent
        newSection(click)
    })

    return div
}

const loadCards = async () => {
    const cards = await getCardsCourses()

    const buttons = document.querySelector('.buttons')

    const listButtons = cards.cursos.map(createButtons)

    buttons.replaceChildren(...listButtons)
}

loadCards()

