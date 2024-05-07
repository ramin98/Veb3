import { Link, Route, Routes } from "react-router-dom"
import Users from "./Users"
import User from "./User"


function About() {
    return (
      <section className='section-about'>
          <h1>About</h1>
          <Link to='users'>USERS</Link>

          <Routes>
            <Route path="users" element={<Users/>}/>
            <Route path="user/:userId" element={<User/>}/>

          </Routes>
      </section>
    )
  }
  
  export default About
  