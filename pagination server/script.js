let list = document.querySelector('#list')
let pagination = document.querySelector('#pagination')


function showUsers(count){
    fetch(`http://localhost:5000/pagination?page=${count}`)
    .then((res) => res.json())
    .then(data => {
        list.innerHTML = ''
        data.items.forEach(element => {
            let li = document.createElement('li')
            li.innerHTML = `
            <div>
            <span>${element.id}</span>
            <span>${element.name}</span>
            <span>${element.rmail}</span>
            </div>`
            list.appendChild(li)
        });
    })
}

showUsers()

fetch('http://localhost:5000/pagination')
.then((res) => res.json())
.then((data) => {
    let len = data.totalPages
    for (let index = 0; index < len; index++) {
        let li = document.createElement('li')
        li.innerHTML = `<button onclick="showUsers('${index + 1}')">${index + 1}</button>`
        pagination.appendChild(li)
    }
})