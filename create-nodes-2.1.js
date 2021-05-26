const arr = ["html", "css", "js"];

const ul = document.createElement('ul')

const render = (array) => {
    array.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        ul.append(li)
    });
    document.body.append(ul)
}

render(arr)