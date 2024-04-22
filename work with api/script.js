let list = document.querySelector('#list')
let form = document.querySelector('#addForm')
let changeFormContainer = document.querySelector('#changeFormContainer')
let changeForm = document.querySelector('#changeForm')
let idOfChangingElement

const addItem = async (event) => {
    try {
    event.preventDefault()
    console.log('work')
    let formData = new FormData(form)
    let obj = {
        from: formData.get('from'),
        to: formData.get('to'),
        message: formData.get('message')
    }
    
        let res = await fetch('http://149.100.156.6:3000/items/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        if (res.ok === true) {
            getFetch()
        }
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', addItem)

const deleteItems = async (id) => {
    try {
        const res = await fetch(`http://149.100.156.6:3000/items/${id}`, {
            method: 'DELETE'
        })
        list.innerHTML = 'LOADING'
        if (res.ok === true) {
            setTimeout(getFetch, 500)
        }
    } catch (error) {
        console.log(error)
    }
}

const openModal =  (id) => {
    changeFormContainer.style = 'display:flex'
    idOfChangingElement = id
}

const changeItem = async (event) => {
    try {
    event.preventDefault()
    console.log('work')
    let formData = new FormData(changeForm)
    let obj = {
        from: formData.get('from'),
        to: formData.get('to'),
        message: formData.get('message')
    }
    
        let res = await fetch(`http://149.100.156.6:3000/items/${idOfChangingElement}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        if (res.ok === true) {
            getFetch()
        }
    } catch (error) {
        console.log(error)
    }
    changeFormContainer.style = 'display:none'

}

changeForm.addEventListener('submit', changeItem)

const getFetch = async () => {
    try {
        const res = await fetch('http://149.100.156.6:3000/items/')
        const data = await res.json()
        if (res.ok === true) {
            list.innerHTML = ''
            data.forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = `<span>${element.from}-</span><span>${element.to}-</span>
                <span>${element.message}-</span><span>${element.id}-</span>
                <button onclick="deleteItems(${element.id})">X</button>
                <button onclick="openModal(${element.id})">CHANGE</button>`
                list.appendChild(li)
            });
        }
    } catch (error) {
        console.log(error)
    }
}

getFetch()

