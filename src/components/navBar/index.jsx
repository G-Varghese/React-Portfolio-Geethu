import React, { useState } from "react";
import { FaBars, FaGofore } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        To: '/'
    },
    {
        label: 'ABOUT',
        To: '/about'
    },
    {
        label: 'SKILLS',
        To: '/skills'
    },
    {
        label: 'RESUME',
        To: '/resume'
    },
    {
        label: 'PROJECTS',
        To: '/portfolio'
    },
    {
        label: 'CONTACT',
        To: '/contact'
    }
]

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon); // Toggle menu open/close
    }

    const handleMenuItemClick = () => {
        setToggleIcon(false); // Close the menu when a menu item is clicked
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <FaGofore size={30} />
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link
                                    className="navbar_container_menu_item_links"
                                    to={item.To}
                                    onClick={handleMenuItemClick}  // Close the menu on click
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
