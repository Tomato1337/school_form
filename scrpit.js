const form = document.querySelector('form')
const k = 7
const trueOtvet = [
    ['name0', 'a', 'Как срать?'],
    ['name1', 'b', 'Как какать?'],
    ['name2', 'c', 'Как писать?'],
    ['name3', 'd', 'Хочешь питсу?'],
    ['name4', 'e', 'Богданчик хочет кушать?'],
    ['name5', 'f', 'Как срать'],
    ['name6', 'g', 'Как срать'],
    ['name7', 'h', 'Как срать'],
]
let sortOtvet = []
const reset = document.querySelector('button[type="button"]')

function clear() {
    const allInput = form.querySelectorAll('input')
    allInput.forEach((input) => {
        input.value = ''
    })
}

reset.addEventListener('click', () => {
    clear()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = Object.entries(Object.fromEntries(new FormData(e.target).entries()))
    console.log(formData)
    formData.forEach((entry, id) => {
        const otvet = entry[1].toLowerCase().trim()
        const tOtvet = trueOtvet[id][1].toLowerCase().trim()
        if (otvet === tOtvet) {
            console.log(`Угадал n1 = ${tOtvet}`)
            sortOtvet.push(tOtvet)
        }
    })
    console.log(sortOtvet)
    alert(`Вы угадали ${sortOtvet.length}/8`)
    sortOtvet = []

    clear()
    
})

const createElem = (k = 0, formQuestion) => {
    const block = document.createElement('div')
    block.classList.add('form__elem')
    const input = document.createElement('input')
    input.classList.add('input-group-text')
    input.setAttribute('type', 'text')
    input.setAttribute('name', `name${k}`)
    input.setAttribute('id', `id${k}`)
    const question = document.createElement('div')
    question.classList.add('form__question')
    question.textContent = formQuestion
    // const btn = document.createElement('button')
    // btn.setAttribute('type', 'submit')
    // btn.textContent = 'Отправить'
    block.append(question,input)
    form.append(block)
}
trueOtvet.forEach((item, i) => {
    createElem(i, item[2])
})