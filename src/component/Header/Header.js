import React from 'react'
import './Header.css';
import Logo from '../../Image/logo.png';

function Header() {
    return (
        <div className="header">
            <img className="logo-image" src={Logo} alt="Pokam"/>

            <div className="header_search">
                <input type="text" className="header__input"/>
                <span className="search_icon">W</span>
            </div>
        </div>
    )
}

export default Header
