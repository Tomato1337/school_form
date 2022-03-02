const form = document.querySelector('form')
const k = 7
const trueOtvet = [
    ['name0', 'a'],
    ['name1', 'b'],
    ['name2', 'c'],
    ['name3', 'd'],
    ['name4', 'e'],
    ['name5', 'f'],
    ['name6', 'g'],
    ['name7', 'h'],
]
let sortOtvet = []
const reset = document.querySelector('button[type="button"]')

reset.addEventListener('click', () => {
    const allInput = form.querySelectorAll('input')
    allInput.forEach((input) => {
        input.value = ''
    })
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
})

const createElem = (k = 0) => {
    const block = document.createElement('div')
    block.classList.add('form__elem')
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', `name${k}`)
    input.setAttribute('id', `id${k}`)
    // const btn = document.createElement('button')
    // btn.setAttribute('type', 'submit')
    // btn.textContent = 'Отправить'
    block.append(input)
    form.append(block)
}
createElem()

for(i = 1; i <= k; i++) {
    createElem(i)
}
