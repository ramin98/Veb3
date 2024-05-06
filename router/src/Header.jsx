import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <ul>
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/contacts">Contacts</NavLink></li>
            </ul>
        </header>
    )
}

export default Header
