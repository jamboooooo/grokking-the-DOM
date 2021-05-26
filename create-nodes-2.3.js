const arr = [{
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
]

const render = (array) => {
    const ul = document.createElement('ul')
    array.forEach(item => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = item.url
        a.textContent = item.name
        li.append(a)
        ul.append(li)
    });
    document.body.append(ul)
}

render(arr)