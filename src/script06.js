const body = document.body

const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)
// div.appendChild(spanHi)

const spanHiIdAttribute = spanHi.getAttribute('id')
console.log(spanHiIdAttribute)
console.log(spanHi.id)

const getSpanHiTitleAttribute = spanHi.getAttribute('title')
console.log(getSpanHiTitleAttribute)
console.log(spanHi.title)

const setSpanHiIdAttribute = spanHi.setAttribute('id', 'newId')
spanHi.id = "newestId"

const setSpanHiTitleAttribute = spanHi.setAttribute('title', 'newTitle')
spanHi.title = "newestTitle"

spanHi.removeAttribute("title")

const dataTest = spanBye.dataset
console.log(dataTest)
console.log(dataTest.test)
console.log(dataTest.longerName)
spanBye.dataset.newName = "newName"
