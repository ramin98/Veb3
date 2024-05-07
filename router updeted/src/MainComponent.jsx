import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contacts from "./components/Contacts"
import User from "./components/User"

function Main() {

    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about/*" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </main>
    )
}

export default Main
