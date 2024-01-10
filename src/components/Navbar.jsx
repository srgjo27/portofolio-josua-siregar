import { Link, NavLink } from 'react-router-dom'

import './navbar.css'
import Logo from '../img/'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <link to="/" className='logo'>
                    <img src={Logo} alt="logo" />
                </link>
            </div>
        </nav>
    )
}

export default Navbar;