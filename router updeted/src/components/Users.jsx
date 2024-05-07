import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"


function Users() {

    let [usersArray, setUsersArray] = useState([])
    let location  = useLocation()
    console.log(location)
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsersArray(data))
      },[])
    return (
      <section className='users'>
          <h1>Users</h1>
          <ul>
            {usersArray.map((item,index) => {
              return(
                <li><Link to={`/about/user/${index}`}>{item.name}</Link></li>
              )
            })}
          </ul>
      </section>
    )
  }
  
  export default Users
  