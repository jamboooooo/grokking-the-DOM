const red = document.createElement('div')
const green = document.createElement('div')
const blue = document.createElement('div')

blue.textContent = 'Я вложен'
green.append(blue)
red.append(green)