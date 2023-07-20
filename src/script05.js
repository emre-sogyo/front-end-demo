const body = document.body

const strong = document.createElement('strong')
strong.innerText = "strong.innerText"
body.append(strong)

const div = document.createElement('div')
div.innerHTML = "<strong>div.innerText</strong>"
body.append(div)