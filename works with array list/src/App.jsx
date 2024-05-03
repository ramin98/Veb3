import { useEffect, useState } from 'react'
import './App.css'
import User from './User'


function App() {
  let [usersArray, setUsersArray] = useState([])
  let [changedUserId, setChangedUserId] = useState(null)
  let [input, setInput] = useState('')
  let [userAdd, setUserAdd] = useState({
    name: '',
    username: '',
    email: '',
    id: ''
  })
  let [userChange, setUserChange] = useState({
    name: '',
    username: '',
    email: '',
    id: ''
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsersArray(data.filter((item) => item.name.startsWith(input)))
      })
  }, [input])

  const addUser = (ev) => {
    ev.preventDefault()
    let newArray = [...usersArray]
    let obj = { ...userAdd }
    if (newArray.length === 0) {
      obj.id = 1
    } else {
      obj.id = newArray.at(-1).id + 1

    }
    newArray.push(obj)
    console.log(obj)
    console.log(newArray)
    setUsersArray(newArray)
  }

  const changeUser = (id) => {
    console.log(id)
    event.preventDefault()
    if (changedUserId !== id) {
      alert('You cliked on diffrent element')
      return
    } else {
      let newArray = [...usersArray]
      let detectedElement = newArray.findIndex((item) => item.id === changedUserId)
      let obj = { ...userChange, id: newArray[detectedElement].id }
      newArray[detectedElement] = obj
      setUsersArray(newArray)
    }

  }

  const deleteUser = (index) => {
    let newArray = [...usersArray]
    newArray.splice(index, 1)
    setUsersArray(newArray)
  }


  return (
    <>
      <input onChange={(ev) => setInput(ev.target.value)} type="text" placeholder='SEARCH' />
      <form onSubmit={addUser}>
        <input onChange={(ev) => setUserAdd({ ...userAdd, name: ev.target.value })} type="text" />
        <input onChange={(ev) => setUserAdd({ ...userAdd, username: ev.target.value })} type="text" />
        <input onChange={(ev) => setUserAdd({ ...userAdd, email: ev.target.value })} type="text" />
        <button type='submit'>ADD</button>
      </form>
      <ul>
        {usersArray.map((item, index) => <User key={item.id}
        item={item} 
        index={index} 
        deleteUser={deleteUser} 
        setChangedUserId={setChangedUserId} 
        setUserChange={setUserChange} 
        userChange={userChange} 
        changeUser={changeUser} 
        />)}
      </ul>
    </>
  )
}

export default App
