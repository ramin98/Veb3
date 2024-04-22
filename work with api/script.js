let list = document.querySelector('#list')

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
                <button onclick="deleteItems(${element.id})">X</button>`
                list.appendChild(li)
            });
        }
    } catch (error) {
        console.log(error)
    }
}

getFetch()
