let list = document.querySelector('#list')
let userValue = document.querySelector('#user-name')
let changeValue = document.querySelector('#change-name')
let form = document.querySelector('#add-form')
let changeForm = document.querySelector('#change-form')

let userId
function showUsers(){
    fetch('http://localhost:5000/workers')
    .then((res) => res.json())
    .then(data => {
        data.forEach(element => {
            let li = document.createElement('li')
            li.innerHTML = `
            <div>
            <span>${element.id}</span>
            <span>${element.userName}</span>
            <button onclick="deleteUser('${element.id}')">X</button>
            <button onclick="findUserId('${element.id}')">Change</button>
            </div>`
            list.appendChild(li)
        });
    })
}

showUsers()

function deleteUser(id){
      fetch(`http://localhost:5000/delete-user/${id}`, {
        method:'DELETE'
      }).then((res) => {
        if(res.ok){
            showUsers()
        }
      })
}

function findUserId(id){
    userId = id
    let changeContainer = document.querySelector('#change-container')
    changeContainer.style = 'display:flex;'
}

function changeUser(ev){
    ev.preventDefault()
    fetch(`http://localhost:5000/change-user/${userId}`, {
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({userName:changeValue.value})
    }).then((res) => {
      if(res.ok){
          showUsers()
      }
    })
    let changeContainer = document.querySelector('#change-container')
    changeContainer.style = 'display:none;'
}


changeForm.addEventListener('submit', changeUser)

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let object = {
        userName:userValue.value
    }
    fetch('http://localhost:5000/add-user',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
    })
})