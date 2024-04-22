// let array = [
//     { userName: 'Sam', id: 1 }
// ]
// console.log(String(array))
// let jsonArray = JSON.stringify(array)
// console.log(array)
// console.log(jsonArray, typeof jsonArray)
// console.log(JSON.parse(jsonArray))

// let info

// fetch('https://ai.chucknorris.io/jokes/random')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// fetch('http://149.100.156.6:3000/items')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// const info = {
//     from: 'Taleh',
//     to: 'Joaquin Phoenix',
//     message: "hello"
// }

// fetch('http://149.100.156.6:3000/items/4', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(info)
// });

// fetch('http://149.100.156.6:3000/items/6', {
//     method: 'DELETE',
// });


// function timer(){
//     time += 1
//     console.log(time)
//     setTimeout(timer,1000)
// }
// timer()


// setInterval(() => {
//   time += 1;
//   console.log(`Прошло ${time} сек.`);
// }, 1000);



// let time = 0;
// let time = document.querySelector('#time')
// setInterval(() => {
//   let hour = new Date().getHours()
//   let minutes = new Date().getMinutes()
//   let seconds = new Date().getSeconds()
//   time.innerHTML = `<span>${hour}:</span><span>${minutes}:</span><span>${seconds}</span>`
// }, 1000);
// let timer = 0;
// let flag = true
// let id
// let time = document.querySelector('#time')
// let start = document.querySelector('#start')
// function startStop(){
//     if(flag === true){
//         id = setInterval(() => {
//             timer += 1;
//             console.log(timer)
//             time.innerHTML = timer
//             start.innerText = 'STOP'
//           }, 1000);
//     }else if(flag === false){
//            clearInterval(id)
//            start.innerText = 'START'
//     }
//     flag = !flag
// }
// start.addEventListener('click', startStop)



// const responseF = (callback1, callback2, value) => {
//     if(value < 7000){
//         return callback1
//     }else if(value > 7000){
//         return callback2
//     }

// }
// let response = responseF(() => 'ok',() => 'error', 8000)
// console.log(response())



// const timer = (time) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (time > 5000) {
//           resolve('success');
//         } else {
//           reject('fail');
//         }
//       }, time);
//     });
//   }

//   timer(3000)
//   .then(() => console.log('ok'))
//   .catch((err) => console.log(err))
//   // rejected halına keçəcək Promise qaytaracaq

//   timer(7000)
//   .then(() => console.log('ok'))
//   .catch((err) => console.log(err))
//   // fulfilled halına keçəcək Promise qaytaracaq

//   let s = Promise.reject(10)
//   console.log(s)

// const getBreweryDataById = (id) => {
//     if (typeof id === "number") {
//       return Promise.reject('Invalid id');
//     }

//     return fetch(`https://api.openbrewerydb.org/breweries/${id}`);
//   }

//   getBreweryDataById('5128df48-79fc-4f0f-8b52-d06be54d0cec')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err + 'error MESSAGE'))

// for (let index = 0; index < 200; index++) {
//     const element = index
//     let obj = {
//         from: 'User-from' + element,
//         to: 'User-to' + element,
//         message: 'message' + element
//     }

//     fetch('http://149.100.156.6:3000/items/', {
//         method: 'POST',
//         headers:{
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//     })
// }

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

