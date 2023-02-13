const div = document.querySelector('.divAdd')
const ul = document.querySelector('ul')
const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const input = div.querySelector('input')
    const value = input.value
    const button = document.createElement('button')
    button.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

    const li = document.createElement('li')
    li.setAttribute('class', 'divAdd textAdd createLi')
    li.textContent = value
    
    input.value = ''

    ul.appendChild(li)
    li.appendChild(button)
    
    button.onclick = function (event) {
        event.preventDefault()

        ul.removeChild(li)

    }
})

div.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = div.querySelector('input')
        const value = input.value
        const button = document.createElement('button')
        button.textContent = 'x'
    
        const li = document.createElement('li')
        li.setAttribute('class', 'divAdd textAdd createLi')
        li.textContent = value
        
        input.value = ''
    
        ul.appendChild(li)
        li.appendChild(button)

        button.onclick = function (event) {
            event.preventDefault()
    
            ul.removeChild(li)
    
        }
    }
})