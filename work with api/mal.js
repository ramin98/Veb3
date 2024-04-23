let list = document.querySelectorAll('#list li')
console.log(list)

let element = JSON.parse(localStorage.getItem('obj'))

console.log(element)
list[0].innerText = element.from
list[1].innerText = element.to
list[2].innerText = element.message
list[3].innerText = element.id