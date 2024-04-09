// let three = document.querySelectorAll('.header2')
// let con = document.querySelector('.con')
// let img = document.querySelector('img')

// console.log(con.parentElement)
// console.log(con.previousElementSibling)
// console.log(con.nextElementSibling)
// console.log(con.children)
// console.log(con.firstElementChild)
// console.log(con.lastElementChild)


// img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg'


// let flag = false
// let arr = Array.from(three)
// function sorting() {
//     if(flag === false){
//         arr.sort((a,b) => a.innerText - b.innerText )
//         con.append(...arr)
//         flag = true
//     }else{
//         arr.sort((a,b) => b.innerText - a.innerText )
//         con.append(...arr)
//         flag = false
//     }
// }

// three.forEach((item) => {
//     item.id = 'salam'
// })

// sorting()
// sorting()
// sorting()
// console.log(three)
// console.log(three[0])

// function show() {
//     img.classList.toggle('none')
// }
// show()
// show()
// show()
// show()

// let li = document.querySelectorAll('ul li')
// let flag = false
// function changeColor(event){
//     // if(flag === false){
//         event.target.style = 'color: red; font-size:30px; transition:1s;'
//         // flag =  true
//     // }else{
//         // event.target.style = 'color: black; font-size:14px; transition:1s;'
//         // flag =  false
//     // }
// }
// li.forEach((item) => {
//     item.addEventListener('click', changeColor)
// })

// let button = document.querySelector('button')
// let a = document.querySelector('a')
// a.addEventListener('click', (ev) => {
// ev.preventDefault()
// })

// function shwoAlert() {
//     alert('HELLO')
//     button.removeEventListener('click', shwoAlert)
// }

// button.addEventListener('click', shwoAlert)

// console.log(this)

// document.addEventListener('keydown',(ev) => {
//     console.log(ev.key.toUpperCase())
//     // if(ev.keyCode === 13){
//     //       console.log('ENTER')
//     // }
// })

// let list = document.querySelector('.arrayList')
// let button = document.querySelector('#plus')
// let arr = [0]

// function plusArray() {
//     let elem = arr[arr.length - 1]
//     elem++
//     console.log(elem)
//     arr.push(elem)
//     list.innerHTML = ''
//     arr.forEach((item) => {
//         let li  = document.createElement('li')
//         li.innerText = item
//         list.appendChild(li)
//     })
// }

// button.addEventListener('click', plusArray)
// let input = document.querySelector('#passwordInput')
// let button = document.querySelector('#changeButton')

// button.addEventListener('mousedown', () => {
//     input.type = 'text'
// })

// button.addEventListener('mouseup', () => {
//     input.type = 'password'
// })
// button.addEventListener('click', () => {
//     par.innerText = input.value
// })
let shopGoods = [
  {
    "store_name": "Moda Dünyası",
    "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
    "products": [
      { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
      { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
      { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
      { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
      { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
      { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
      { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
      { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
      { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
      { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
    ]
  },
  {
    "store_name": "Zərif Moda",
    "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
    "products": [
      { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
      { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
      { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
      { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
      { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
      { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
      { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
      { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
      { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
      { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
    ]
  },
  {
    "store_name": "Əliyev Moda Mərkəzi",
    "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
    "products": [
      { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
      { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
      { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
      { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
      { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
      { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
      { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
      { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
      { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
      { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
    ]
  }
]


// let input = document.querySelector('.text')
// let button = document.querySelector('.write')
// let list = document.querySelector('#list')
// let par = document.querySelector('.par')

// let shops = document.querySelectorAll('.shops')

// let shop
// shops.forEach((item) => {
//     item.addEventListener('click', (ev) => {
//         shop = ev.target.innerText
//         par.innerText = shop
//     })
// })



// input.addEventListener('input', () => {
//     let arr = shopGoods[shopGoods.findIndex((item) => shop === item.store_name)]
//     .products
//     .filter((item) => item.product_name.startsWith(input.value))
//     list.innerHTML = ''
//     arr.forEach((item) => {
//         let li = document.createElement('li')
//         li.innerText = item.product_name
//         list.appendChild(li)
//     })
// })

// const genderSelect = document.querySelector('.gender');
// const subscribeCheckbox = document.querySelector('.subscribe');

// genderSelect.addEventListener('change', (event) => {
//   if(event.target.value === 'male'){
//         alert('CINSI KISHI')
//   }
//   else if(event.target.value === 'female'){
//     alert('CINSI QADIN')
// }
// });
// subscribeCheckbox.addEventListener('change', (event) => {
//   if (event.target.checked) {
//     alert('Siz abunə oldunuz');
//   } else {
//     alert('Siz abunə siyahısından çıxarılmısınız');
//   }
// });

let form = document.querySelector('form')
let button = document.querySelector('form button')

let tel = document.getElementById('az-telephone')
let telError = document.querySelector('.az-telephone')
let userName = document.getElementById('user-name')
let userNameError = document.querySelector('.user-name')
let nameInput 
let telephoneInput 

tel.addEventListener('input', (ev) => {
  const regex = /^\+994-(50|51|70|55)-\d{3}-\d{2}-\d{2}$/;
  if(telephoneInput || nameInput){
    button.disabled = false

  }else{ 
    button.disabled = true
  }
  if(regex.test(tel.value)){
    telError.style = 'display:none'

  }else{
    telError.style = 'display:block'
  }
  nameInput = regex.test(tel.value)
})
userName.addEventListener('input', (ev) => {
  const regex = /^[A-Z][a-z]{2,}$/;
  if(telephoneInput || nameInput){
    button.disabled = false

  }else{ 
    button.disabled = true
  }
  if(regex.test(userName.value)){
    userNameError.style = 'display:none'

  }else{
    userNameError.style = 'display:block'
  }

  telephoneInput = regex.test(userName.value)
})
let obj ={}
form.addEventListener('submit', (event) => {
  if(telephoneInput || nameInput){

  }else{ 
    alert('WRONG')
    return
  }
  event.preventDefault()
  let formData = new FormData(form)
  console.log(formData.get('user-name'))
  console.log([...formData.entries()])
  for (const [key, value] of formData.entries()) {
    obj[key] = value
  }

  console.log(obj)
})

function validatePhoneNumber(phoneNumber) {
  // Регулярное выражение для валидации номера телефона
  const regex = /^\+994-(50|51|70|55)-\d{3}-\d{2}-\d{2}$/;

  // Проверяем, соответствует ли номер телефона регулярному выражению
  return regex.test(phoneNumber);
}

// Примеры использования
console.log(validatePhoneNumber("+994-50-555-55-55")); // true
console.log(validatePhoneNumber("202-555-0123"));    // true
console.log(validatePhoneNumber("+12-345-678-9012")); // false (слишком много цифр)
console.log(validatePhoneNumber("2025550123"));      // false (неправильный формат)
 